import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function ParentPage() {
  const session = await getServerSession(authOptions);
  const familyId = (session?.user as any)?.familyId;

  let students: any[] = [];
  let payments: any[] = [];
  try {
    if (familyId) {
      students = await prisma.student.findMany({ where: { familyId } });
      payments = await prisma.payment.findMany({
        where: { familyId },
        take: 5,
        orderBy: { createdAt: "desc" },
      });
    }
  } catch {
    // degrade gracefully if DB not available
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="heading-serif text-3xl font-bold text-forest">
          Parent Dashboard
        </h1>
        <p className="mt-1 text-bark-dark">
          Welcome, {session?.user?.name || "Parent"}! Here's an overview of your
          family.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="card">
          <div className="text-3xl">{students.length}</div>
          <div className="text-sm text-bark">Enrolled Students</div>
        </div>
        <div className="card">
          <div className="text-3xl">{payments.length}</div>
          <div className="text-sm text-bark">Payment Records</div>
        </div>
        <div className="card">
          <div className="text-3xl">Active</div>
          <div className="text-sm text-bark">Membership Status</div>
        </div>
      </div>

      <div className="card">
        <h2 className="heading-serif mb-4 text-xl font-semibold text-forest">
          My Students
        </h2>
        {students.length === 0 ? (
          <p className="text-bark">No students enrolled yet.</p>
        ) : (
          <div className="space-y-3">
            {students.map((s) => (
              <div
                key={s.id}
                className="flex items-center justify-between border-b border-cream-dark pb-3 last:border-0"
              >
                <div>
                  <div className="font-semibold text-forest">{s.name}</div>
                  <div className="text-sm text-bark">
                    {s.grade || "Grade N/A"} · Age {s.age || "—"}
                  </div>
                </div>
                <span className="badge badge-success">Enrolled</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="card">
        <h2 className="heading-serif mb-4 text-xl font-semibold text-forest">
          Recent Payments
        </h2>
        {payments.length === 0 ? (
          <p className="text-bark">No payment records found.</p>
        ) : (
          <div className="space-y-3">
            {payments.map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-between border-b border-cream-dark pb-3 last:border-0"
              >
                <div>
                  <div className="font-semibold text-forest">{p.type}</div>
                  <div className="text-sm text-bark">
                    {new Date(p.createdAt).toLocaleDateString()}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-forest">
                    ${(p.amount / 100).toFixed(2)}
                  </div>
                  <span className="badge badge-info">{p.status}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
