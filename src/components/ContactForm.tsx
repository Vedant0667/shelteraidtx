"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { MotionDiv, fadeInUp } from "./Motion";

interface InquiryOption {
  value: string;
  label: string;
}

interface ContactFormProps {
  subject: string;
  title?: string;
  description?: string;
  submitLabel?: string;
  successMessage?: string;
  className?: string;
  inquiryOptions?: InquiryOption[];
}

type Status = "idle" | "loading" | "success" | "error";

const FALLBACK_OPTIONS: InquiryOption[] = [
  { value: "general-question", label: "General Question" },
  { value: "shoe-donation", label: "Donate Shoes" },
  { value: "host-drive", label: "Host a Shoe Drive" },
  { value: "partnership", label: "Partnership Inquiry" },
  { value: "volunteer", label: "Volunteer Interest" },
  { value: "donation-support", label: "Monetary Donation Support" },
];

export default function ContactForm({
  subject,
  title = "Send Us a Message",
  description = "Have questions or want to collaborate? Share a few details below and we'll follow up within two business days.",
  submitLabel = "Send Message",
  successMessage = "Thank you! We received your message and will get back to you soon.",
  className = "",
  inquiryOptions,
}: ContactFormProps) {
  const options = useMemo(() => {
    if (inquiryOptions && inquiryOptions.length > 0) {
      return inquiryOptions;
    }
    return FALLBACK_OPTIONS;
  }, [inquiryOptions]);

  const [inquiryType, setInquiryType] = useState<string>(
    options[0]?.value ?? "general-question"
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!options.some((option) => option.value === inquiryType)) {
      setInquiryType(options[0]?.value ?? "general-question");
    }
  }, [options, inquiryType]);

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setInquiryType(options[0]?.value ?? "general-question");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please complete all fields before submitting.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          subject,
          inquiryType,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Unable to send message.");
      }

      resetForm();
      setStatus("success");
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Unable to send message. Please try again later.";
      setError(errorMessage);
      setStatus("error");
    } finally {
      setTimeout(() => {
        setStatus("idle");
        setError("");
      }, 6000);
    }
  };

  return (
    <MotionDiv
      {...fadeInUp}
      className={`rounded-3xl border border-white/80 bg-white/85 shadow-xl backdrop-blur p-6 sm:p-8 ${className}`}
    >
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="space-y-4 text-center sm:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
            Let&rsquo;s Connect
          </span>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{description}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <FormSelect
            id={`inquiry-${subject}`}
            label="Inquiry Type"
            value={inquiryType}
            onChange={setInquiryType}
            options={options}
          />
          <FormField
            id={`name-${subject}`}
            label="Name"
            placeholder="Your name"
            value={name}
            onChange={setName}
            type="text"
          />
          <FormField
            id={`email-${subject}`}
            label="Email"
            placeholder="you@example.com"
            value={email}
            onChange={setEmail}
            type="email"
          />
        </div>

        <FormTextArea
          id={`message-${subject}`}
          label="How can we help?"
          placeholder="Share any details you would like us to know..."
          value={message}
          onChange={setMessage}
        />

        <input type="hidden" value={subject} readOnly />

        <div className="space-y-5">
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-full px-8 py-4 font-display text-lg font-semibold text-white shadow-lg transition-all disabled:cursor-not-allowed disabled:opacity-60"
            style={{
              background:
                status === "loading"
                  ? "#94a3b8"
                  : "linear-gradient(to right, var(--color-primary-gradient-start), var(--color-primary-gradient-end))",
            }}
          >
            {status === "loading" ? "Sending..." : submitLabel}
          </button>

          {status === "success" && (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-600">
              {successMessage}
            </div>
          )}

          {status === "error" && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
              {error || "Something went wrong. Please try again."}
            </div>
          )}
        </div>
      </form>
    </MotionDiv>
  );
}

interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type: "text" | "email";
}

function FormField({ id, label, placeholder, value, onChange, type }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200/70 bg-white/90 px-4 py-3 font-medium text-slate-900 outline-none transition-all focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20"
        required
      />
    </div>
  );
}

interface FormTextAreaProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

function FormTextArea({ id, label, placeholder, value, onChange }: FormTextAreaProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={5}
        className="w-full rounded-2xl border border-slate-200/70 bg-white/90 px-4 py-3 font-medium text-slate-900 outline-none transition-all focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20"
        required
      />
    </div>
  );
}

interface FormSelectProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: InquiryOption[];
}

function FormSelect({ id, label, value, onChange, options }: FormSelectProps) {
  return (
    <div className="space-y-2 sm:col-span-2">
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-slate-200/70 bg-white/90 px-4 py-3 font-medium text-slate-900 outline-none transition-all focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}


