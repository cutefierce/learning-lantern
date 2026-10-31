import { requireParent } from "@/lib/auth-guards";
import { DashboardShell } from "@/components/dashboard-shell";

export default async function ParentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireParent();
  return <DashboardShell role="parent">{children}</DashboardShell>;
}
