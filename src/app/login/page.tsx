import { Suspense } from "react";
import { PublicLayout } from "@/components/public-layout";
import LoginForm from "./login-form";

export default function LoginPage() {
  return (
    <PublicLayout>
      <div className="flex min-h-[70vh] items-center justify-center px-4 py-16 sm:px-6">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <img
              src="/learning-lantern-logo.svg"
              alt="Learning Lantern"
              className="mx-auto mb-4 h-20 w-20 rounded-full shadow-lg ring-4 ring-lantern/20"
            />
            <h1 className="heading-serif text-3xl font-bold text-forest">
              Welcome Back
            </h1>
            <p className="mt-2 text-bark-dark">
              Sign in to your Learning Lantern account
            </p>
          </div>

          <Suspense fallback={<div className="text-bark">Loading…</div>}>
            <LoginForm />
          </Suspense>

          <div className="mt-8 rounded-lg bg-bark-light/15 p-4 text-sm text-bark-dark" style={{ borderRadius: "8px" }}>
            <p className="mb-2 font-semibold text-forest">Test Accounts:</p>
            <ul className="space-y-1">
              <li>Admin: admin@learninglantern.com / admin123</li>
              <li>Parent: parent@learninglantern.com / parent123</li>
              <li>Teacher: teacher@learninglantern.com / teacher123</li>
            </ul>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
