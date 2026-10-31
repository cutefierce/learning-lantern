import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createPaymentLink } from "@/lib/zeffy";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { donorName, email, businessName, tier, amount } = body;

    if (!donorName || !email || !tier || !amount) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create the donation record in our DB (system of record)
    const donation = await prisma.donation.create({
      data: {
        donorName,
        email,
        amount: parseInt(amount),
        status: "pending",
        type: "sponsorship",
        businessName: businessName || null,
        tier,
      },
    });

    // Create a Zeffy payment link
    const paymentLink = await createPaymentLink({
      amount: parseInt(amount),
      donorName,
      email,
      type: "sponsorship",
      tier,
      businessName: businessName || undefined,
    });

    return NextResponse.json({
      donationId: donation.id,
      paymentUrl: paymentLink.url,
      mock: paymentLink.mock,
    });
  } catch (error: any) {
    console.error("Sponsor API error:", error);
    return NextResponse.json(
      { error: "Failed to create sponsorship record" },
      { status: 500 }
    );
  }
}
