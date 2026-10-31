const ZEFFY_API_KEY = process.env.ZEFFY_API_KEY || "";

export const isZeffyMockMode = !ZEFFY_API_KEY || ZEFFY_API_KEY === "mock";

const ZEFFY_BASE_URL = "https://api.zeffy.com/api/v1";

export interface PaymentLinkRequest {
  amount: number;
  donorName: string;
  email: string;
  type: string;
  tier?: string;
  businessName?: string;
}

export interface PaymentLinkResponse {
  id: string;
  url: string;
  amount: number;
  status: string;
  mock: boolean;
}

export async function createPaymentLink(
  req: PaymentLinkRequest
): Promise<PaymentLinkResponse> {
  if (isZeffyMockMode) {
    return {
      id: `mock_pl_${Math.random().toString(36).slice(2, 12)}`,
      url: `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/sponsor/mock-success?amount=${req.amount}`,
      amount: req.amount,
      status: "active",
      mock: true,
    };
  }

  const res = await fetch(`${ZEFFY_BASE_URL}/payments`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ZEFFY_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: req.amount,
      contact: { email: req.email, name: req.donorName },
      metadata: {
        type: req.type,
        tier: req.tier,
        businessName: req.businessName,
      },
    }),
  });

  if (!res.ok) {
    throw new Error(`Zeffy API error: ${res.status}`);
  }

  const data = await res.json();
  return {
    id: data.id,
    url: data.url,
    amount: req.amount,
    status: data.status,
    mock: false,
  };
}
