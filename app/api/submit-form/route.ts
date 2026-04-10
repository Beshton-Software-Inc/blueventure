import { NextRequest, NextResponse } from "next/server";

const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > MAX_REQUESTS_PER_WINDOW;
}

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
}

const VALID_TYPES = ["Contact Forms", "Newsletter"] as const;
const VALID_INTERESTS = [
  "general",
  "student",
  "mentor",
  "volunteer",
  "sponsor",
  "school",
];

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  const sheetsUrl = process.env.GOOGLE_SHEETS_URL;
  if (!sheetsUrl) {
    console.error("GOOGLE_SHEETS_URL is not configured");
    return NextResponse.json(
      {
        success: false,
        message: "Form submission is not configured. Please try again later.",
      },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const data = body as Record<string, unknown>;

  // Validate type
  const type = data.type;
  if (!type || !VALID_TYPES.includes(type as (typeof VALID_TYPES)[number])) {
    return NextResponse.json(
      { success: false, message: "Invalid form type." },
      { status: 400 }
    );
  }

  // Validate email (required for both form types)
  const email = typeof data.email === "string" ? data.email.trim() : "";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { success: false, message: "A valid email is required." },
      { status: 400 }
    );
  }

  // Additional validation for contact forms
  if (type === "Contact Forms") {
    const name = typeof data.name === "string" ? data.name.trim() : "";
    const message = typeof data.message === "string" ? data.message.trim() : "";
    const interest = typeof data.interest === "string" ? data.interest : "";

    if (!name) {
      return NextResponse.json(
        { success: false, message: "Name is required." },
        { status: 400 }
      );
    }

    if (!message) {
      return NextResponse.json(
        { success: false, message: "Message is required." },
        { status: 400 }
      );
    }

    if (interest && !VALID_INTERESTS.includes(interest)) {
      return NextResponse.json(
        { success: false, message: "Invalid interest selection." },
        { status: 400 }
      );
    }
  }

  try {
    const response = await fetch(sheetsUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error("Google Sheets error:", response.status, await response.text());
      return NextResponse.json(
        { success: false, message: "Failed to submit form. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully!",
    });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit form. Please try again." },
      { status: 500 }
    );
  }
}
