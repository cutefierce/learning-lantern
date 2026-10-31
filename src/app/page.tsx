import { PublicLayout } from "@/components/public-layout";

export default function HomePage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="relative bg-forest text-cream">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-20 text-center sm:px-6 md:py-28">
          <div className="flex flex-col items-center gap-4">
            <img
              src="/learning-lantern-logo.svg"
              alt="Learning Lantern"
              className="h-24 w-24 rounded-full shadow-2xl ring-4 ring-white/20"
            />
          </div>
          <h1 className="heading-serif text-4xl font-bold leading-tight md:text-6xl">
            Illuminating Minds,<br />Nurturing Hearts
          </h1>
          <p className="max-w-2xl text-lg text-cream/80 md:text-xl">
            A Christian homeschool co-op offering enriching classes, a
            supportive community, and a Christ-centered learning environment
            for your family.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="/about" className="btn btn-accent btn-lg">
              Learn About Us
            </a>
            <a href="/contact" className="btn btn-outline btn-lg border-cream text-cream hover:bg-cream hover:text-forest">
              Get Involved
            </a>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: "📚",
              title: "Enriching Classes",
              desc: "From science and literature to art and music, our co-op offers a wide range of classes taught by dedicated, experienced teachers.",
            },
            {
              icon: "🤝",
              title: "Supportive Community",
              desc: "Connect with like-minded Christian families who share your values and commitment to home education.",
            },
            {
              icon: "✝️",
              title: "Christ-Centered",
              desc: "Our co-op is grounded in Christian values. Every class and activity is designed to reflect God's love and truth.",
            },
          ].map((feature) => (
            <div key={feature.title} className="card">
              <div className="mb-4 text-4xl">{feature.icon}</div>
              <h3 className="heading-serif mb-2 text-xl font-semibold text-forest">
                {feature.title}
              </h3>
              <p className="text-bark-dark">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-bark-light/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
          <h2 className="heading-serif text-3xl font-bold text-forest md:text-4xl">
            Ready to Join Our Co-op?
          </h2>
          <p className="max-w-xl text-lg text-bark-dark">
            Whether you're a parent looking for classes, a teacher wanting to
            share your gifts, or a business wanting to sponsor — there's a
            place for you at Learning Lantern.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="/tuition" className="btn btn-primary btn-lg">
              View Tuition
            </a>
            <a href="/sponsor" className="btn btn-accent btn-lg">
              Become a Sponsor
            </a>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
