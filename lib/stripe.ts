import Stripe from "stripe";

export function stripeEnabled(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY?.startsWith("sk_"));
}

export function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key?.startsWith("sk_")) return null;
  return new Stripe(key, { typescript: true });
}

export function priceIdForPackageSlug(slug: string): string | null {
  const map: Record<string, string | undefined> = {
    essential: process.env.STRIPE_PRICE_ESSENTIAL,
    family: process.env.STRIPE_PRICE_FAMILY,
    plus: process.env.STRIPE_PRICE_PLUS,
  };
  return map[slug] ?? null;
}
