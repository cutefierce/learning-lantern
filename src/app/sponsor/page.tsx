import { PublicLayout } from "@/components/public-layout";
import { isZeffyMockMode } from "@/lib/zeffy";

const sponsorshipTiers = [
  {
    name: "Sapling",
    amount: 500,
    amountCents: 50000,
    perks: [
      "Your business name on our sponsor page",
      "Quarterly newsletter mention",
      "Window decal with Learning Lantern logo",
    ],
    popular: false,
  },
  {
    name: "Oak",
    amount: 1000,
    amountCents: 100000,
    perks: [
      "Everything in Sapling tier",
      "Logo on our website sponsor section",
      "Social media shout-out (2x per semester)",
      "Co-op event banner recognition",
    ],
    popular: true,
  },
  {
    name: "Lantern",
    amount: 2500,
    amountCents: 250000,
    perks: [
      "Everything in Oak tier",
      "Featured sponsor spotlight in newsletter",
      "Logo on all co-op printed materials",
      "Booth at our end-of-year showcase",
      "Dedicated social media post each semester",
    ],
    popular: false,
  },
  {
    name: "Champion",
    amount: 10000,
    amountCents: 1000000,
    perks: [
      "Everything in Lantern tier",
      "Title sponsor of one co-op event",
      "Premium logo placement on website homepage",
      "Custom social media content partnership",
      "Speaking opportunity at our annual banquet",
    ],
    popular: false,
  },
];

export default function SponsorPage() {
  return (
    <PublicLayout>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-12 text-center">
          <h1 className="heading-serif mb-4 text-4xl font-bold text-forest md:text-5xl">
            Sponsor Learning Lantern
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-bark-dark">
            By sponsoring Learning Lantern, you're investing in Christian
            education and helping homeschool families access quality classes,
            resources, and community. Your support makes a lasting difference.
          </p>
          {isZeffyMockMode && (
            <span className="badge badge-warning mt-4">
              Test Mode — No real payments will be processed
            </span>
          )}
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {sponsorshipTiers.map((tier) => (
            <div
              key={tier.name}
              className={`card relative flex flex-col ${
                tier.popular ? "border-lantern ring-2 ring-lantern/40" : ""
              }`}
            >
              {tier.popular && (
                <span className="badge badge-warning absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </span>
              )}
              <h2 className="heading-serif text-2xl font-bold text-forest">
                {tier.name}
              </h2>
              <div className="my-4">
                <span className="text-4xl font-bold text-lantern-dark">
                  ${tier.amount.toLocaleString()}
                </span>
                <span className="text-sm text-bark"> / year</span>
              </div>
              <ul className="mb-6 flex-1 space-y-2 text-sm text-bark-dark">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex gap-2">
                    <span className="text-lantern">✓</span>
                    {perk}
                  </li>
                ))}
              </ul>
              <a
                href={`/sponsor/checkout?package=${encodeURIComponent(
                  tier.name
                )}`}
                className={`btn w-full ${
                  tier.popular ? "btn-accent" : "btn-primary"
                }`}
              >
                Sponsor at {tier.name} Level
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-6 text-center">
          <h2 className="heading-serif text-3xl font-bold text-forest">
            Why Sponsor Us?
          </h2>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            <div>
              <div className="mb-3 text-4xl">🎓</div>
              <h3 className="heading-serif mb-2 text-lg font-semibold text-forest">
                Support Education
              </h3>
              <p className="text-sm text-bark-dark">
                Your sponsorship directly supports classes, materials, and
                resources for homeschooling families.
              </p>
            </div>
            <div>
              <div className="mb-3 text-4xl">🌐</div>
              <h3 className="heading-serif mb-2 text-lg font-semibold text-forest">
                Community Visibility
              </h3>
              <p className="text-sm text-bark-dark">
                Reach dozens of local families with your business name and
                logo across our materials and events.
              </p>
            </div>
            <div>
              <div className="mb-3 text-4xl">🤲</div>
              <h3 className="heading-serif mb-2 text-lg font-semibold text-forest">
                Faith-Aligned
              </h3>
              <p className="text-sm text-bark-dark">
                Partner with a Christian organization that shares your values
                and commitment to families.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
