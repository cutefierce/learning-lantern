export default function AdminPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="heading-serif text-3xl font-bold text-forest">
          Admin Dashboard
        </h1>
        <p className="mt-1 text-bark-dark">
          Welcome back! Here's an overview of your co-op.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Families", value: "12", icon: "👨‍👩‍👧", color: "bg-forest/10 text-forest" },
          { label: "Teachers", value: "8", icon: "👩‍🏫", color: "bg-bark/10 text-bark-dark" },
          { label: "Active Classes", value: "15", icon: "📚", color: "bg-lantern/10 text-lantern-dark" },
          { label: "Total Donations", value: "$8,500", icon: "💰", color: "bg-green-100 text-green-800" },
        ].map((stat) => (
          <div key={stat.label} className="card">
            <div className={`mb-3 inline-flex rounded-lg p-3 text-2xl ${stat.color}`}>
              {stat.icon}
            </div>
            <div className="text-2xl font-bold text-forest">{stat.value}</div>
            <div className="text-sm text-bark">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="card">
        <h2 className="heading-serif mb-4 text-xl font-semibold text-forest">
          Recent Activity
        </h2>
        <div className="space-y-3">
          {[
            "New family registration: The Wilson Family",
            "Payment received: $150.00 from The Garcia Family",
            "New sponsorship: Oak tier from Acme Books",
            "Class added: High School Biology for Fall 2026",
            "Announcement posted: Fall semester registration open",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 border-b border-cream-dark pb-3 text-sm text-bark-dark last:border-0"
            >
              <span className="text-lantern">▸</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h2 className="heading-serif mb-4 text-xl font-semibold text-forest">
          Quick Actions
        </h2>
        <div className="flex flex-wrap gap-3">
          <button className="btn btn-primary btn-sm">+ Add Family</button>
          <button className="btn btn-primary btn-sm">+ Add Teacher</button>
          <button className="btn btn-primary btn-sm">+ Add Class</button>
          <button className="btn btn-accent btn-sm">+ Post Announcement</button>
          <button className="btn btn-outline btn-sm">View Payments</button>
        </div>
      </div>
    </div>
  );
}
