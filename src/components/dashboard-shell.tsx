"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

interface NavItem {
  href: string;
  label: string;
  icon: string;
}

const roleNavs: Record<string, NavItem[]> = {
  admin: [
    { href: "/admin", label: "Dashboard", icon: "📊" },
    { href: "/admin/families", label: "Families", icon: "👨‍👩‍👧" },
    { href: "/admin/teachers", label: "Teachers", icon: "👩‍🏫" },
    { href: "/admin/classes", label: "Classes", icon: "📚" },
    { href: "/admin/payments", label: "Payments", icon: "💰" },
    { href: "/admin/announcements", label: "Announcements", icon: "📣" },
    { href: "/admin/committees", label: "Committees", icon: "🤝" },
  ],
  parent: [
    { href: "/parent", label: "Dashboard", icon: "📊" },
    { href: "/parent/students", label: "My Students", icon: "🎒" },
    { href: "/parent/classes", label: "Classes", icon: "📚" },
    { href: "/parent/payments", label: "Payments", icon: "💰" },
    { href: "/parent/events", label: "Events", icon: "📅" },
  ],
  teacher: [
    { href: "/teacher", label: "Dashboard", icon: "📊" },
    { href: "/teacher/classes", label: "My Classes", icon: "📚" },
    { href: "/teacher/students", label: "Students", icon: "🎒" },
    { href: "/teacher/schedule", label: "Schedule", icon: "📅" },
  ],
};

export function DashboardShell({
  children,
  role,
}: {
  children: React.ReactNode;
  role: "admin" | "parent" | "teacher";
}) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = roleNavs[role] || [];
  const roleLabel =
    role === "admin" ? "Admin Portal" : role === "parent" ? "Parent Portal" : "Teacher Portal";

  return (
    <div className="flex min-h-screen bg-paper">
      {/* Sidebar — desktop */}
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 flex-col bg-forest text-cream md:flex">
        <div className="flex items-center gap-2 border-b border-forest-light/30 p-4">
          <img
            src="/learning-lantern-logo.svg"
            alt="Learning Lantern"
            className="h-10 w-10 rounded-full"
          />
          <span className="heading-serif text-lg font-bold">Learning Lantern</span>
        </div>
        <div className="px-4 py-3 text-xs uppercase tracking-wide text-lantern">
          {roleLabel}
        </div>
        <nav className="flex-1 space-y-1 px-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors ${
                pathname === item.href
                  ? "bg-lantern font-semibold text-white"
                  : "text-cream/80 hover:bg-forest-light"
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-forest-light/30 p-4">
          <div className="mb-2 text-sm">
            <span className="text-cream/60">Signed in as</span>
            <div className="font-semibold">{session?.user?.name || "User"}</div>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="btn btn-ghost btn-sm w-full text-cream"
          >
            Sign Out
          </button>
        </div>
      </aside>

      {/* Mobile sidebar toggle */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-forest text-cream transition-transform md:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center gap-2 border-b border-forest-light/30 p-4">
          <img
            src="/learning-lantern-logo.svg"
            alt="Learning Lantern"
            className="h-10 w-10 rounded-full"
          />
          <span className="heading-serif text-lg font-bold">Learning Lantern</span>
          <button
            className="ml-auto text-cream"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>
        </div>
        <div className="px-4 py-3 text-xs uppercase tracking-wide text-lantern">
          {roleLabel}
        </div>
        <nav className="flex-1 space-y-1 px-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors ${
                pathname === item.href
                  ? "bg-lantern font-semibold text-white"
                  : "text-cream/80 hover:bg-forest-light"
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-forest-light/30 p-4">
          <div className="mb-2 text-sm">
            <span className="text-cream/60">Signed in as</span>
            <div className="font-semibold">{session?.user?.name || "User"}</div>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="btn btn-ghost btn-sm w-full text-cream"
          >
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 md:ml-64">
        <div className="flex items-center justify-between border-b border-cream-dark bg-white px-4 py-3 md:px-8">
          <button
            className="rounded-md p-2 text-forest md:hidden"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <h2 className="heading-serif text-lg font-semibold text-forest">
            {roleLabel}
          </h2>
          <Link
            href="/"
            className="text-sm text-bark hover:text-lantern"
          >
            ← Back to Site
          </Link>
        </div>
        <div className="p-4 md:p-8">{children}</div>
      </div>
    </div>
  );
}
