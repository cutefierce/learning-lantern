import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function TeacherPage() {
  const session = await getServerSession(authOptions);
  const teacherId = (session?.user as any)?.teacherId;

  let classes: any[] = [];
  try {
    if (teacherId) {
      classes = await prisma.class.findMany({
        where: { teacherId },
        orderBy: { name: "asc" },
      });
    }
  } catch {
    // degrade gracefully
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="heading-serif text-3xl font-bold text-forest">
          Teacher Dashboard
        </h1>
        <p className="mt-1 text-bark-dark">
          Welcome, {session?.user?.name || "Teacher"}! Here are your classes.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="card">
          <div className="text-3xl">{classes.length}</div>
          <div className="text-sm text-bark">Classes Teaching</div>
        </div>
        <div className="card">
          <div className="text-3xl">Active</div>
          <div className="text-sm text-bark">Status</div>
        </div>
        <div className="card">
          <div className="text-3xl">Fall 2026</div>
          <div className="text-sm text-bark">Current Term</div>
        </div>
      </div>

      <div className="card">
        <h2 className="heading-serif mb-4 text-xl font-semibold text-forest">
          My Classes
        </h2>
        {classes.length === 0 ? (
          <p className="text-bark">No classes assigned yet.</p>
        ) : (
          <div className="space-y-3">
            {classes.map((c) => (
              <div
                key={c.id}
                className="flex items-center justify-between border-b border-cream-dark pb-3 last:border-0"
              >
                <div>
                  <div className="font-semibold text-forest">{c.name}</div>
                  <div className="text-sm text-bark">
                    {c.dayOfWeek} · {c.startTime}–{c.endTime}
                  </div>
                </div>
                <span className="badge badge-success">Active</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="card">
        <h2 className="heading-serif mb-4 text-xl font-semibold text-forest">
          Student Overview
        </h2>
        <p className="text-sm text-bark-dark">
          As a teacher, you can view student names, ages, and grades. For
          privacy, access to additional family information is restricted.
        </p>
      </div>
    </div>
  );
}
