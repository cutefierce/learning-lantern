import { requireTeacher } from "@/lib/auth-guards";
import { DashboardShell } from "@/components/dashboard-shell";

export default async function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireTeacher();
  return <DashboardShell role="teacher">{children}</DashboardShell>;
}
