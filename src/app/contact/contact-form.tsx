"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="card text-center">
        <div className="mb-4 text-5xl">📬</div>
        <h2 className="heading-serif mb-2 text-2xl font-bold text-forest">
          Message Sent!
        </h2>
        <p className="mb-6 text-bark-dark">
          Thanks for reaching out. We'll get back to you soon.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="btn btn-outline"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      <div>
        <label className="label-field" htmlFor="name">
          Name *
        </label>
        <input
          id="name"
          name="name"
          required
          className="input-field"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="label-field" htmlFor="email">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="input-field"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="label-field" htmlFor="subject">
          Subject *
        </label>
        <input
          id="subject"
          name="subject"
          required
          className="input-field"
          placeholder="How can we help?"
        />
      </div>
      <div>
        <label className="label-field" htmlFor="message">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="input-field"
          placeholder="Tell us more…"
        />
      </div>

      {error && (
        <div className="rounded-md bg-red-50 p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <button type="submit" disabled={loading} className="btn btn-primary w-full">
        {loading ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
