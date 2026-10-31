import { PublicLayout } from "@/components/public-layout";

export default function ClassesPage() {
  const classes = [
    { name: "Elementary Science", teacher: "Mrs. Johnson", day: "Monday", time: "9:00–10:30 AM", grades: "K–3", desc: "Hands-on experiments exploring God's creation through physical science, life science, and earth science." },
    { name: "Middle School Literature", teacher: "Mr. Davis", day: "Tuesday", time: "10:00–11:30 AM", grades: "6–8", desc: "Reading and discussing classic literature with a Christian worldview, developing critical thinking and writing skills." },
    { name: "High School Biology", teacher: "Mrs. Smith", day: "Wednesday", time: "9:00–11:00 AM", grades: "9–12", desc: "A comprehensive biology course with labs, covering cellular biology, genetics, ecology, and anatomy." },
    { name: "Art & Creativity", teacher: "Mrs. Williams", day: "Thursday", time: "1:00–2:30 PM", grades: "1–6", desc: "Exploring various art mediums while celebrating creativity as a reflection of our Creator." },
    { name: "World Geography", teacher: "Mr. Brown", day: "Friday", time: "9:30–11:00 AM", grades: "4–8", desc: "Traveling the world through maps, cultures, and missions — understanding God's world and His people." },
    { name: "Music & Worship", teacher: "Mrs. Garcia", day: "Monday", time: "1:00–2:00 PM", grades: "All", desc: "Learning music fundamentals and leading worship together, praising God through song." },
    { name: "Spanish I", teacher: "Señora Lopez", day: "Tuesday", time: "1:00–2:30 PM", grades: "7–12", desc: "Building conversational Spanish skills with a focus on missions and cultural understanding." },
    { name: "Physical Education", teacher: "Coach Miller", day: "Wednesday", time: "1:00–2:00 PM", grades: "All", desc: "Group games, sports skills, and fitness activities — building healthy bodies and teamwork." },
  ];

  return (
    <PublicLayout>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h1 className="heading-serif mb-4 text-4xl font-bold text-forest">
          Our Classes
        </h1>
        <p className="mb-12 text-lg text-bark-dark">
          We offer a variety of classes for all grade levels, taught by
          dedicated teachers who are passionate about their subjects and their
          faith.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((cls) => (
            <div key={cls.name} className="card">
              <div className="mb-3 flex items-start justify-between">
                <h3 className="heading-serif text-xl font-semibold text-forest">
                  {cls.name}
                </h3>
                <span className="badge badge-info">{cls.grades}</span>
              </div>
              <p className="mb-3 text-sm text-bark-dark">{cls.desc}</p>
              <div className="space-y-1 text-sm text-bark">
                <div>
                  <strong>Teacher:</strong> {cls.teacher}
                </div>
                <div>
                  <strong>Schedule:</strong> {cls.day}, {cls.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-bark-light/20 p-8 text-center" style={{ borderRadius: "12px" }}>
          <h2 className="heading-serif mb-3 text-2xl font-semibold text-forest">
            Interested in Teaching?
          </h2>
          <p className="mb-6 text-bark-dark">
            We're always looking for passionate teachers to join our co-op.
            If you have a gift to share, we'd love to hear from you.
          </p>
          <a href="/contact" className="btn btn-primary">
            Contact Us About Teaching
          </a>
        </div>
      </div>
    </PublicLayout>
  );
}
