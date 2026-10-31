import { Suspense } from "react";
import { PublicLayout } from "@/components/public-layout";
import SponsorCheckoutForm from "./checkout-form";

export default async function SponsorCheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ package?: string }>;
}) {
  const params = await searchParams;
  const packageName = params.package || "Sapling";

  return (
    <PublicLayout>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
        <h1 className="heading-serif mb-2 text-3xl font-bold text-forest">
          Sponsorship Checkout
        </h1>
        <p className="mb-8 text-bark-dark">
          You're sponsoring Learning Lantern at the{" "}
          <strong className="text-forest">{packageName}</strong> level. Fill out
          the form below to complete your sponsorship.
        </p>

        <Suspense fallback={<div className="text-bark">Loading form…</div>}>
          <SponsorCheckoutForm packageName={packageName} />
        </Suspense>
      </div>
    </PublicLayout>
  );
}
