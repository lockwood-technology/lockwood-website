"use client";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

const SERVICES = [
  "Platform Development",
  "E-Commerce Solutions",
  "Payment Gateway Integration",
  "UI/UX Design",
  "Branding",
  "Digital Marketing",
  "Systems Support & Advisory",
  "Digital Consultation",
  "Malipopay (product)",
  "Wedding (product)",
  "Send (product)",
  "Link (product)",
];

const BUDGETS = [
  "Under $10k",
  "$10k–$25k",
  "$25k–$75k",
  "$75k–$200k",
  "$200k+",
  "Not sure yet",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const service = String(fd.get("service") || "");
    const budget = String(fd.get("budget") || "");
    const message = String(fd.get("message") || "");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          company: fd.get("company"),
          message: `${service} | ${budget}\n\n${message}`,
        }),
      });
      if (res.ok) {
        trackEvent("contact_form_submitted", {
          service,
          budget,
          has_company: !!fd.get("company"),
          message_length: message.length,
        });
      }
    } catch {
      /* swallow */
    }
    setSent(true);
    setSubmitting(false);
  }

  if (sent) {
    return (
      <div className="p-12 border border-ink-200 rounded-lg bg-white shadow-[0_15px_35px_rgba(23,23,23,0.08)] text-center">
        <div className="w-14 h-14 rounded-full bg-[rgba(21,190,83,0.2)] grid place-items-center mx-auto">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#108c3d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l5 5L20 7" />
          </svg>
        </div>
        <h3 className="font-light text-[28px] tracking-[-0.02em] mt-6 text-ink-900">
          Message received.
        </h3>
        <p className="text-base text-ink-600 mt-3 font-light">
          We&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full px-3.5 py-3 border border-ink-200 rounded text-[15px] text-ink-900 bg-white outline-none focus:border-primary-500 transition-colors";
  const labelClass = "text-[13px] font-medium text-ink-700 block mb-2";

  return (
    <form
      onSubmit={onSubmit}
      className="p-10 border border-ink-200 rounded-lg bg-white shadow-[0_15px_35px_rgba(23,23,23,0.08)] flex flex-col gap-5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label>
          <span className={labelClass}>Your name</span>
          <input required name="name" className={fieldClass} placeholder="Amara Oyelaran" />
        </label>
        <label>
          <span className={labelClass}>Work email</span>
          <input
            required
            type="email"
            name="email"
            className={fieldClass}
            placeholder="you@company.co.tz"
          />
        </label>
      </div>
      <label>
        <span className={labelClass}>Company</span>
        <input name="company" className={fieldClass} placeholder="Company name (optional)" />
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label>
          <span className={labelClass}>What do you need?</span>
          <select name="service" defaultValue="Platform Development" className={fieldClass}>
            {SERVICES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label>
          <span className={labelClass}>Rough budget</span>
          <select name="budget" defaultValue="$10k–$25k" className={fieldClass}>
            {BUDGETS.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        <span className={labelClass}>Tell us about the project</span>
        <textarea
          required
          name="message"
          rows={5}
          className={`${fieldClass} resize-y leading-[1.5]`}
          placeholder="A paragraph or two about what you're trying to achieve, who it's for, and any constraints."
        />
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="self-start inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white font-semibold text-base px-7 py-4 rounded-2xl transition-all disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Send message →"}
      </button>
    </form>
  );
}
