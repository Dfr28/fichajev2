import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getStripeClient } from "@/lib/stripe";

export async function POST(req: Request) {
  const signature = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json({ error: "Webhook no configurado" }, { status: 400 });
  }

  try {
    const stripe = getStripeClient();
    const body = await req.text();
    const event = stripe.webhooks.constructEvent(body, signature, webhookSecret);

    switch (event.type) {
      case "checkout.session.completed":
      case "customer.subscription.updated":
      case "customer.subscription.deleted":
        break;
      default:
        break;
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    const err = error as Stripe.errors.StripeError;
    return NextResponse.json(
      { error: "Firma de webhook invalida", details: err.message },
      { status: 400 }
    );
  }
}
