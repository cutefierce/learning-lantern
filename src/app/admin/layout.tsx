import { requireAdmin } from "@/lib/auth-guards";
import { DashboardShell } from "@/components/dashboard-shell";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAdmin();
  return <DashboardShell role="admin">{children}</DashboardShell>;
}
