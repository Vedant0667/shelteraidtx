import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
});

export async function POST(req: NextRequest) {
  try {
    const { amount, frequency, donorName, donorEmail } = await req.json();

    // Validate amount
    if (!amount || amount < 1) {
      return NextResponse.json(
        { error: "Invalid amount" },
        { status: 400 }
      );
    }

    // Convert dollars to cents for Stripe
    const amountInCents = Math.round(amount * 100);

    if (frequency === "monthly") {
      // Create a subscription for recurring donations
      const customer = await stripe.customers.create({
        email: donorEmail,
        name: donorName,
        metadata: {
          donationType: "monthly_recurring",
        },
      });

      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Monthly Donation to Shelter Aid TX",
                description: "Recurring monthly donation",
              },
              unit_amount: amountInCents,
              recurring: {
                interval: "month",
              },
            },
          },
        ],
        payment_settings: {
          payment_method_types: ["card"],
          save_default_payment_method: "on_subscription",
        },
        expand: ["latest_invoice.payment_intent"],
      });

      const invoice = subscription.latest_invoice as Stripe.Invoice;
      const paymentIntent = invoice.payment_intent as Stripe.PaymentIntent;

      return NextResponse.json({
        subscriptionId: subscription.id,
        clientSecret: paymentIntent.client_secret,
      });
    } else {
      // Create a one-time payment intent
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amountInCents,
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
        metadata: {
          donationType: "one_time",
          donorName: donorName || "Anonymous",
          donorEmail: donorEmail || "",
        },
        description: "One-time donation to Shelter Aid TX",
      });

      return NextResponse.json({
        clientSecret: paymentIntent.client_secret,
      });
    }
  } catch (error: unknown) {
    console.error("Payment intent creation failed:", error);
    const message = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
