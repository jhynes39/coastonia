import { NextResponse } from "next/server";

type Payload = {
  name: string;
  email: string;
  company?: string;
  message: string;
  website?: string; // honeypot
};

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Payload;

    // Honeypot: real users won't fill this
    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json({ ok: true }); // silently accept
    }

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const company = (body.company || "").trim();
    const message = (body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }
    if (!isEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email." },
        { status: 400 }
      );
    }
    if (message.length < 10) {
      return NextResponse.json(
        { ok: false, error: "Message is too short." },
        { status: 400 }
      );
    }

    // ✅ Option A (quick start): send to your email via provider later
    // For now we just log it (shows in Vercel logs)
    console.log("New contact form submission:", {
      name,
      email,
      company,
      message,
      receivedAt: new Date().toISOString(),
    });

    // TODO (next): integrate SendGrid/Resend so you receive emails.
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Server error." },
      { status: 500 }
    );
  }
}
