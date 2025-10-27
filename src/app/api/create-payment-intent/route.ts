import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.info("Donation request received (stubbed):", body);
    return NextResponse.json(
      {
        error:
          "Online payments are not enabled yet. Please check back soon or use the contact form to coordinate a donation.",
      },
      { status: 503 }
    );
  } catch (error: unknown) {
    console.error("Payment intent creation failed:", error);
    const message = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
