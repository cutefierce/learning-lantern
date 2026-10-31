import { PublicLayout } from "@/components/public-layout";

export default function TuitionPage() {
  const fees = [
    { label: "Family Registration Fee", amount: "$75", period: "per family, per year", desc: "Non-refundable fee due at enrollment." },
    { label: "Elementary Classes (K–5)", amount: "$150", period: "per class, per semester", desc: "Includes materials and supplies." },
    { label: "Middle School Classes (6–8)", amount: "$200", period: "per class, per semester", desc: "Includes materials and lab supplies." },
    { label: "High School Classes (9–12)", amount: "$250", period: "per class, per semester", desc: "Includes all lab materials and textbooks." },
  ];

  return (
    <PublicLayout>
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h1 className="heading-serif mb-4 text-4xl font-bold text-forest">
          Tuition & Fees
        </h1>
        <p className="mb-12 text-lg text-bark-dark">
          We strive to keep our co-op affordable while providing quality
          education. Tuition covers teacher compensation, classroom materials,
          and facility costs.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {fees.map((fee) => (
            <div key={fee.label} className="card">
              <h3 className="heading-serif mb-2 text-lg font-semibold text-forest">
                {fee.label}
              </h3>
              <div className="mb-2 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-lantern-dark">
                  {fee.amount}
                </span>
                <span className="text-sm text-bark">{fee.period}</span>
              </div>
              <p className="text-sm text-bark-dark">{fee.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-6">
          <h2 className="heading-serif text-2xl font-semibold text-forest">
            Payment Information
          </h2>
          <ul className="space-y-3 text-bark-dark">
            <li className="flex gap-3">
              <span className="text-lantern">✓</span>
              <span>Tuition is billed per semester. Families may pay in full or set up a monthly payment plan.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lantern">✓</span>
              <span>Payments are processed through Zeffy, a fee-free platform that allows 100% of your payment to go to the co-op.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lantern">✓</span>
              <span>Sibling discount: 10% off tuition for each additional child enrolled.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lantern">✓</span>
              <span>Financial assistance is available for families in need. Please contact us to learn more.</span>
            </li>
          </ul>
        </div>

        <div className="mt-12 rounded-lg bg-lantern/15 p-8 text-center" style={{ borderRadius: "12px" }}>
          <h2 className="heading-serif mb-3 text-2xl font-semibold text-forest">
            Need Help with Tuition?
          </h2>
          <p className="mb-6 text-bark-dark">
            We believe every family should have access to Christian education.
            Financial assistance and payment plans are available.
          </p>
          <a href="/contact" className="btn btn-primary btn-lg">
            Contact Us About Financial Aid
          </a>
        </div>
      </div>
    </PublicLayout>
  );
}
