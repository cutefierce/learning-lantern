"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { isZeffyMockMode } from "@/lib/zeffy";

const tierAmounts: Record<string, number> = {
  Sapling: 500,
  Oak: 1000,
  Lantern: 2500,
  Champion: 10000,
};

export default function SponsorCheckoutForm({
  packageName,
}: {
  packageName: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState("");

  const amount = tierAmounts[packageName] || 500;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const donorName = formData.get("donorName") as string;
    const email = formData.get("email") as string;
    const businessName = formData.get("businessName") as string;

    try {
      const res = await fetch("/api/sponsor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          donorName,
          email,
          businessName,
          tier: packageName,
          amount: amount * 100,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      const data = await res.json();
      setPaymentUrl(data.paymentUrl);
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
        <div className="mb-4 text-5xl">🎉</div>
        <h2 className="heading-serif mb-3 text-2xl font-bold text-forest">
          Thank You for Your Sponsorship!
        </h2>
        <p className="mb-6 text-bark-dark">
          Your sponsorship record has been created. Click below to complete
          your payment through Zeffy.
        </p>
        <a
          href={paymentUrl}
          className="btn btn-accent btn-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Complete Payment →
        </a>
        {isZeffyMockMode && (
          <p className="mt-4 text-sm text-bark">
            (Test mode — no real payment will be processed)
          </p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      <div className="rounded-lg bg-bark-light/20 p-4" style={{ borderRadius: "8px" }}>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-forest">{packageName} Sponsor</span>
          <span className="text-2xl font-bold text-lantern-dark">
            ${amount.toLocaleString()}/year
          </span>
        </div>
      </div>

      <div>
        <label className="label-field" htmlFor="donorName">
          Your Name *
        </label>
        <input
          id="donorName"
          name="donorName"
          required
          className="input-field"
          placeholder="Jane Doe"
        />
      </div>

      <div>
        <label className="label-field" htmlFor="email">
          Email Address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="input-field"
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label className="label-field" htmlFor="businessName">
          Business Name (optional)
        </label>
        <input
          id="businessName"
          name="businessName"
          className="input-field"
          placeholder="Jane's Bookstore"
        />
      </div>

      {error && (
        <div className="rounded-md bg-red-50 p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <button type="submit" disabled={loading} className="btn btn-primary w-full">
        {loading ? "Creating…" : `Continue to Payment — $${amount.toLocaleString()}`}
      </button>

      <p className="text-center text-xs text-bark">
        Payments are processed securely through Zeffy. 100% of your
        contribution goes to Learning Lantern.
      </p>
    </form>
  );
}
