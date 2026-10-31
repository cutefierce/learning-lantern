import { PublicLayout } from "@/components/public-layout";
import ContactForm from "./contact-form";

export default function ContactPage() {
  return (
    <PublicLayout>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="heading-serif mb-4 text-4xl font-bold text-forest">
          Contact Us
        </h1>
        <p className="mb-8 text-lg text-bark-dark">
          Have a question or want to learn more about Learning Lantern? We'd
          love to hear from you. Fill out the form below and we'll get back to
          you soon.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <ContactForm />
          </div>
          <div className="space-y-6">
            <div className="card">
              <h3 className="heading-serif mb-2 font-semibold text-forest">
                Email
              </h3>
              <a
                href="mailto:info@learninglantern.com"
                className="text-lantern-dark hover:underline"
              >
                info@learninglantern.com
              </a>
            </div>
            <div className="card">
              <h3 className="heading-serif mb-2 font-semibold text-forest">
                Hours
              </h3>
              <p className="text-sm text-bark-dark">
                Monday – Friday
                <br />
                9:00 AM – 3:00 PM
              </p>
            </div>
            <div className="card">
              <h3 className="heading-serif mb-2 font-semibold text-forest">
                Co-op Days
              </h3>
              <p className="text-sm text-bark-dark">
                We meet on weekdays during the school year. Contact us for our
                current schedule and location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
