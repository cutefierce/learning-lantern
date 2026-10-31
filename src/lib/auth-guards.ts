import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export async function requireAuth() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");
  return session;
}

export async function requireRole(role: string) {
  const session = await requireAuth();
  if ((session.user as any).role !== role) {
    redirect("/dashboard");
  }
  return session;
}

export async function requireAdmin() {
  return requireRole("ADMIN");
}

export async function requireParent() {
  return requireRole("PARENT");
}

export async function requireTeacher() {
  return requireRole("TEACHER");
}
