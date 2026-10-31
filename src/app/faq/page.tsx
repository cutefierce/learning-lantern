import { PublicLayout } from "@/components/public-layout";

export default function FaqPage() {
  const faqs = [
    { q: "What is a homeschool co-op?", a: "A homeschool co-op is a group of families who come together to share educational resources, teach classes, and support one another in the homeschooling journey. Each family contributes according to their gifts and availability." },
    { q: "Do I need to be a Christian to participate?", a: "Learning Lantern is a Christ-centered co-op. While we welcome all families, our classes and activities are taught from a Christian perspective, and we ask that all members respect and support our statement of faith." },
    { q: "What grade levels do you serve?", a: "We offer classes for students from kindergarten through 12th grade. Class placement is based on age, grade level, and individual student needs." },
    { q: "How many days per week does the co-op meet?", a: "Our co-op meets on weekdays with classes scheduled Monday through Friday. Most classes meet once per week. See our schedule page for the current class times." },
    { q: "Do parents need to stay during classes?", a: "Parents are welcome to stay and assist or socialize. Some classes may require a parent volunteer. For younger students, we ask that a parent remains on-site." },
    { q: "What is the parent involvement requirement?", a: "As a co-op, we rely on parent participation. Each family is asked to volunteer in some capacity — whether teaching, assisting in a classroom, helping with setup/cleanup, or serving on a committee." },
    { q: "How do I enroll my child?", a: "To enroll, please use our contact form to express interest. We'll guide you through the registration process, including completing any required waivers and paying the registration fee." },
    { q: "Are you a drop-off program?", a: "For most elementary classes, we ask that a parent or guardian remains on-site. Middle and high school classes may be drop-off, depending on the class and the student's needs." },
    { q: "What if my child has special needs?", a: "We strive to accommodate all students. Please contact us to discuss your child's specific needs, and we'll work together to find the best fit within our program." },
  ];

  return (
    <PublicLayout>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="heading-serif mb-4 text-4xl font-bold text-forest">
          Frequently Asked Questions
        </h1>
        <p className="mb-12 text-lg text-bark-dark">
          Have questions about Learning Lantern? Here are answers to some of the
          most common questions we receive.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="card group">
              <summary className="cursor-pointer list-none font-semibold text-forest">
                <span className="flex items-center justify-between gap-4">
                  {faq.q}
                  <span className="text-lantern transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-bark-dark">{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-bark-light/20 p-8 text-center" style={{ borderRadius: "12px" }}>
          <p className="mb-4 text-forest">
            Still have questions? We're happy to help.
          </p>
          <a href="/contact" className="btn btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </PublicLayout>
  );
}
