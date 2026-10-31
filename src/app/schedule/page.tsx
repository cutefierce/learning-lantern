import { PublicLayout } from "@/components/public-layout";

export default function SchedulePage() {
  const days = [
    { day: "Monday", slots: ["9:00 AM — Elementary Science (K–3)", "1:00 PM — Music & Worship (All)"] },
    { day: "Tuesday", slots: ["10:00 AM — Middle School Literature (6–8)", "1:00 PM — Spanish I (7–12)"] },
    { day: "Wednesday", slots: ["9:00 AM — High School Biology (9–12)", "1:00 PM — Physical Education (All)"] },
    { day: "Thursday", slots: ["1:00 PM — Art & Creativity (1–6)"] },
    { day: "Friday", slots: ["9:30 AM — World Geography (4–8)"] },
  ];

  return (
    <PublicLayout>
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h1 className="heading-serif mb-4 text-4xl font-bold text-forest">
          Weekly Schedule
        </h1>
        <p className="mb-12 text-lg text-bark-dark">
          Our co-op meets weekly. Here's a look at our typical class schedule
          for the current school year.
        </p>

        <div className="space-y-6">
          {days.map((d) => (
            <div key={d.day} className="card">
              <h2 className="heading-serif mb-4 text-xl font-semibold text-lantern-dark">
                {d.day}
              </h2>
              <ul className="space-y-2">
                {d.slots.map((slot) => (
                  <li
                    key={slot}
                    className="flex items-center gap-3 text-bark-dark"
                  >
                    <span className="text-lantern">▸</span>
                    {slot}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-forest p-8 text-center text-cream" style={{ borderRadius: "12px" }}>
          <h2 className="heading-serif mb-3 text-2xl font-semibold">
            Co-op Location
          </h2>
          <p className="mb-4 text-cream/80">
            We meet at our co-op facility. For the address and directions,
            please contact us.
          </p>
          <a href="/contact" className="btn btn-accent">
            Get Directions
          </a>
        </div>
      </div>
    </PublicLayout>
  );
}
