"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

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
  minimal?: boolean;
  defaultInquiry?: string;
  messagePlaceholder?: string;
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

/** Field ids have to be valid HTML ids, and the subject has spaces in it. */
function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "form";
}

export default function ContactForm({
  subject,
  title = "Send Us a Message",
  description = "Have questions or want to collaborate? Share a few details below and we'll follow up within two business days.",
  submitLabel = "Send Message",
  successMessage = "Thank you! We received your message and will get back to you soon.",
  className = "",
  inquiryOptions,
  minimal = false,
  defaultInquiry = "",
  messagePlaceholder = "Share any details you would like us to know...",
}: ContactFormProps) {
  const options = useMemo(() => {
    if (inquiryOptions && inquiryOptions.length > 0) {
      return inquiryOptions;
    }
    return FALLBACK_OPTIONS;
  }, [inquiryOptions]);

  const [pickedInquiry, setPickedInquiry] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const uid = useMemo(() => slugify(subject), [subject]);

  // The post-submit "back to idle" timer, so a resubmit re-arms it instead of
  // stacking timers, and an unmount mid-countdown does not setState on a dead tree.
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    },
    []
  );

  // Until the visitor picks one, follow the default the page asked for (it
  // changes when the tab changes). Never show a value the options do not have.
  const requestedInquiry = pickedInquiry ?? defaultInquiry;
  const inquiryType = options.some((option) => option.value === requestedInquiry)
    ? requestedInquiry
    : "";

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setPickedInquiry(null);
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
      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => {
        resetTimer.current = null;
        setStatus("idle");
        setError("");
      }, 6000);
    }
  };

  const showHeader = !minimal && title;

  return (
    <div
      className={minimal ? className : `card p-7 md:p-9 ${className}`}
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        {showHeader && (
          <div className="space-y-3">
            <h3 className="title">{title}</h3>
            <p className="body">{description}</p>
          </div>
        )}

        <div className="grid gap-5 sm:grid-cols-2">
          {options.length > 1 && (
            <FormSelect
              id={`inquiry-${uid}`}
              label="Inquiry type"
              value={inquiryType}
              onChange={setPickedInquiry}
              options={options}
            />
          )}
          <FormField
            id={`name-${uid}`}
            label="Name"
            placeholder="Your name"
            value={name}
            onChange={setName}
            type="text"
          />
          <FormField
            id={`email-${uid}`}
            label="Email"
            placeholder="you@example.com"
            value={email}
            onChange={setEmail}
            type="email"
          />
        </div>

        <FormTextArea
          id={`message-${uid}`}
          label="How can we help?"
          placeholder={messagePlaceholder}
          value={message}
          onChange={setMessage}
        />

        <div className="space-y-4">
          <button type="submit" disabled={status === "loading"} className="btn btn-primary btn-lg w-full">
            {status === "loading" ? "Sending..." : submitLabel}
          </button>

          {status === "success" && (
            <p
              role="status"
              className="rounded-xl border border-[var(--hairline)] bg-[var(--accent-wash)] px-4 py-3 text-[0.9rem] text-[var(--accent-ink)]"
            >
              {successMessage}
            </p>
          )}

          {status === "error" && (
            <p role="alert" className="field-error">
              {error || "Something went wrong. Please try again."}
            </p>
          )}
        </div>
      </form>
    </div>
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
    <div>
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="field"
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
    <div>
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={5}
        className="field resize-none"
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
    <div className="sm:col-span-2">
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="field field-select"
        required
      >
        <option value="" disabled>
          Select an inquiry type
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
