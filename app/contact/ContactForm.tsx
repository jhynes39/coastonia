"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  // Honeypot field (hidden)
  const [website, setWebsite] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message, website }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed to submit.");

      setStatus("success");
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
      setWebsite("");
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Something went wrong.");
    }
  }

  return (
    <div className="card">
      <form onSubmit={onSubmit} className="form">
        <div className="formRow">
          <div className="formField">
            <label htmlFor="name">Name *</label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              required
            />
          </div>

          <div className="formField">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              type="email"
              required
            />
          </div>
        </div>

        <div className="formField">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            autoComplete="organization"
          />
        </div>

        {/* Honeypot (do not remove) */}
        <div className="hp">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="formField">
          <label htmlFor="message">How can I help? *</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={6}
            placeholder="Tell me about your platform, goals, and timeline."
          />
        </div>

        {status === "success" ? (
          <div className="formSuccess">
            Thanks — your message has been sent. I’ll get back to you soon.
          </div>
        ) : null}

        {status === "error" ? (
          <div className="formError">{error}</div>
        ) : null}

        <button className="buttonPrimary" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

      </form>
    </div>
  );
}
