import { NextResponse } from "next/server";
import { z } from "zod";
import { getStripeClient } from "@/lib/stripe";

const schema = z.object({
  priceId: z.string().min(1),
  interval: z.enum(["monthly", "yearly"]).default("monthly")
});

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const data = schema.parse(payload);
    const stripe = getStripeClient();
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: data.priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/dueno?checkout=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/?checkout=cancelled`,
      metadata: { interval: data.interval }
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json(
      { error: "No se pudo crear la sesion de pago", details: `${error}` },
      { status: 400 }
    );
  }
}
