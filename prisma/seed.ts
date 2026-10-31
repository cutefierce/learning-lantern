import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import bcrypt from "bcryptjs";
import path from "path";

const adapter = new PrismaBetterSqlite3({
  url: `file:${path.join(process.cwd(), "dev.db")}`,
});
const prisma = new PrismaClient({ adapter });

async function main() {
  // Hash passwords
  const adminPassword = await bcrypt.hash("admin123", 10);
  const parentPassword = await bcrypt.hash("parent123", 10);
  const teacherPassword = await bcrypt.hash("teacher123", 10);

  // Create teacher record first (needed for teacher user relation)
  const teacher = await prisma.teacher.create({
    data: {
      name: "Mrs. Johnson",
      email: "teacher@learninglantern.com",
      bio: "Experienced educator specializing in elementary science and nature studies.",
    },
  });

  // Create the teacher user
  await prisma.user.create({
    data: {
      email: "teacher@learninglantern.com",
      name: "Mrs. Johnson",
      password: teacherPassword,
      role: "TEACHER",
      teacherId: teacher.id,
    },
  });

  // Create admin user
  await prisma.user.create({
    data: {
      email: "admin@learninglantern.com",
      name: "Admin User",
      password: adminPassword,
      role: "ADMIN",
    },
  });

  // Create a family
  const family = await prisma.family.create({
    data: {
      familyName: "The Garcia Family",
    },
  });

  // Create parent user linked to family
  await prisma.user.create({
    data: {
      email: "parent@learninglantern.com",
      name: "Maria Garcia",
      password: parentPassword,
      role: "PARENT",
      familyId: family.id,
    },
  });

  // Add students to the family
  await prisma.student.create({
    data: {
      name: "Sophia Garcia",
      age: 10,
      grade: "5th",
      familyId: family.id,
    },
  });
  await prisma.student.create({
    data: {
      name: "Lucas Garcia",
      age: 7,
      grade: "2nd",
      familyId: family.id,
    },
  });

  // Add a second teacher and classes
  const teacher2 = await prisma.teacher.create({
    data: {
      name: "Mr. Davis",
      email: "davis@learninglantern.com",
      bio: "Literature and writing instructor passionate about classic books.",
    },
  });

  // Create a school year
  const schoolYear = await prisma.schoolYear.create({
    data: {
      name: "2026–2027",
      tuitionAmount: 15000,
      active: true,
    },
  });

  // Create classes
  await prisma.class.create({
    data: {
      name: "Elementary Science",
      description:
        "Hands-on experiments exploring God's creation through physical science, life science, and earth science.",
      teacherId: teacher.id,
      schoolYearId: schoolYear.id,
      dayOfWeek: "Monday",
      startTime: "9:00",
      endTime: "10:30",
    },
  });
  await prisma.class.create({
    data: {
      name: "Middle School Literature",
      description:
        "Reading and discussing classic literature with a Christian worldview.",
      teacherId: teacher2.id,
      schoolYearId: schoolYear.id,
      dayOfWeek: "Tuesday",
      startTime: "10:00",
      endTime: "11:30",
    },
  });

  // Create FAQ entries
  const faqs = [
    { question: "What is a homeschool co-op?", answer: "A homeschool co-op is a group of families who come together to share educational resources, teach classes, and support one another in the homeschooling journey." },
    { question: "Do I need to be a Christian to participate?", answer: "Learning Lantern is a Christ-centered co-op. While we welcome all families, our classes are taught from a Christian perspective." },
    { question: "What grade levels do you serve?", answer: "We offer classes for students from kindergarten through 12th grade." },
    { question: "How do I enroll my child?", answer: "Use our contact form to express interest, and we'll guide you through the registration process." },
  ];
  for (const faq of faqs) {
    await prisma.faq.create({ data: faq });
  }

  // Create announcements
  await prisma.announcement.create({
    data: {
      title: "Fall 2026 Registration Now Open",
      body: "Registration for the Fall 2026 semester is now open! Please log in to your parent portal to register your students for classes.",
      date: new Date(),
    },
  });
  await prisma.announcement.create({
    data: {
      title: "New Sponsorship Program Launched",
      body: "We're excited to announce our new sponsorship program. Check out our sponsor page for details on how businesses can support our co-op.",
      date: new Date(Date.now() - 86400000),
    },
  });

  // Create events
  await prisma.event.create({
    data: {
      title: "Fall Semester Kickoff",
      description: "Join us for our fall semester kickoff — meet teachers, see classrooms, and connect with other families.",
      date: new Date(Date.now() + 604800000),
      location: "Co-op Facility",
    },
  });
  await prisma.event.create({
    data: {
      title: "End-of-Year Showcase",
      description: "Students showcase their projects and accomplishments from the year. All families and sponsors welcome!",
      date: new Date(Date.now() + 15552000000),
      location: "Co-op Facility",
    },
  });

  // Create a sample payment
  await prisma.payment.create({
    data: {
      amount: 15000,
      status: "paid",
      type: "tuition",
      familyId: family.id,
    },
  });

  // Create committees
  await prisma.committee.create({
    data: {
      name: "Hospitality Committee",
      description: "Coordinates refreshments and welcomes for co-op events and new families.",
    },
  });
  await prisma.committee.create({
    data: {
      name: "Fundraising Committee",
      description: "Plans and organizes fundraising activities to support co-op programs and scholarships.",
    },
  });
  await prisma.committee.create({
    data: {
      name: "Field Day Committee",
      description: "Organizes our annual field day with games, sports, and family activities.",
    },
  });

  console.log("Seed data created successfully!");
  console.log("Test accounts:");
  console.log("  Admin:   admin@learninglantern.com / admin123");
  console.log("  Parent:  parent@learninglantern.com / parent123");
  console.log("  Teacher: teacher@learninglantern.com / teacher123");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
