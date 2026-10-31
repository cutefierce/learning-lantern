import { PublicLayout } from "@/components/public-layout";

export default function AboutPage() {
  return (
    <PublicLayout>
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h1 className="heading-serif mb-6 text-4xl font-bold text-forest">
          About Learning Lantern
        </h1>

        <div className="space-y-6 text-lg leading-relaxed text-bark-dark">
          <p>
            Learning Lantern is a Christian homeschool co-op founded on the
            belief that education flourishes best in a nurturing, faith-filled
            community. We bring together homeschooling families to share
            resources, talents, and encouragement as we educate our children
            together.
          </p>

          <h2 className="heading-serif mt-8 text-2xl font-semibold text-forest">
            Our Mission
          </h2>
          <p>
            To provide a Christ-centered, cooperative learning environment where
            homeschooled students grow academically, socially, and spiritually —
            supported by dedicated teachers and a community of like-minded
            families.
          </p>

          <h2 className="heading-serif mt-8 text-2xl font-semibold text-forest">
            Our Values
          </h2>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-lantern">✦</span>
              <span>
                <strong className="text-forest">Faith First</strong> — Christ
                is at the center of everything we do, from curriculum choices to
                classroom culture.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-lantern">✦</span>
              <span>
                <strong className="text-forest">Cooperative Spirit</strong> —
                Parents and teachers work together, sharing their gifts and
                time to benefit all our students.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-lantern">✦</span>
              <span>
                <strong className="text-forest">Academic Excellence</strong> —
                We offer rigorous, engaging classes that challenge and inspire
                students at every level.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-lantern">✦</span>
              <span>
                <strong className="text-forest">Nurturing Community</strong> —
                We support one another in prayer, friendship, and practical
                help.
              </span>
            </li>
          </ul>

          <h2 className="heading-serif mt-8 text-2xl font-semibold text-forest">
            How We Started
          </h2>
          <p>
            Learning Lantern began with a small group of families who wanted to
            enrich their homeschool journey with group classes and shared
            experiences. What started as a handful of classes has grown into a
            thriving co-op serving dozens of families, offering classes from
            elementary through high school.
          </p>

          <div className="mt-12 rounded-card bg-bark-light/20 p-8" style={{ borderRadius: "12px" }}>
            <p className="text-center text-forest">
              <strong>&ldquo;Train up a child in the way he should go; even when he is
              old he will not depart from it.&rdquo;</strong>
              <br />
              <span className="text-sm text-bark">— Proverbs 22:6</span>
            </p>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
