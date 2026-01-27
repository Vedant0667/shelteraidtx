"use client";

interface StripePaymentFormProps {
  amount: number;
  frequency: "one-time" | "monthly";
  donorEmail: string;
  onSuccess: () => void;
  onError: (error: string) => void;
}

export default function StripePaymentForm({ amount, frequency }: StripePaymentFormProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 text-center">
        <p className="font-display text-xl font-bold text-[#0F172A] mb-2">Online payments coming soon</p>
        <p className="text-sm text-[#64748B]">
          For now, please use the contact form and we will coordinate the best way to donate.
        </p>
      </div>

      <button
        type="button"
        disabled
        className="w-full px-8 py-4 bg-slate-300 text-white rounded-xl font-medium text-lg cursor-not-allowed"
      >
        {`Donate $${amount.toFixed(2)}${frequency === "monthly" ? "/month" : ""}`}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Payments are temporarily disabled while we finish setup.
      </p>
    </div>
  );
}

