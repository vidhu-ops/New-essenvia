export type LegalSlug =
  | "terms"
  | "subscription"
  | "privacy"
  | "shipping"
  | "refunds"
  | "cancellation"
  | "accessibility";

export const legalPages: Record<
  LegalSlug,
  { title: string; summary: string; sections: { heading: string; body: string }[] }
> = {
  terms: {
    title: "Terms of Service",
    summary: "Placeholder until Essentra counsel approves final language.",
    sections: [
      {
        heading: "Agreement",
        body: "By using essentra.ca and subscribing, you agree to these terms, our Privacy Policy, and Subscription Terms.",
      },
      {
        heading: "Service",
        body: "Essentra provides recurring delivery of household essentials in Canada. Product mix may change with equivalent substitutes when items are unavailable.",
      },
    ],
  },
  subscription: {
    title: "Subscription Terms",
    summary: "Billing cadence, changes, skip/pause, and cancellation — subject to final legal review.",
    sections: [
      {
        heading: "Monthly billing",
        body: "You authorize recurring monthly charges in CAD plus applicable tax. Your plan price is shown at checkout and in your account.",
      },
      {
        heading: "Skip, pause, cancel",
        body: "You may skip or pause before the cut-off date shown in your account. Cancellation stops future billing; see Refunds for delivered orders.",
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    summary: "PIPEDA-oriented placeholder describing how we handle personal information.",
    sections: [
      {
        heading: "What we collect",
        body: "Contact details, delivery address, order history, payment tokens via Stripe (we do not store card numbers), and support communications.",
      },
      {
        heading: "Your rights",
        body: "Canadian residents may request access, correction, or deletion subject to legal retention requirements.",
      },
    ],
  },
  shipping: {
    title: "Shipping & Delivery",
    summary: "Delivery windows and zones for Canadian subscribers.",
    sections: [
      {
        heading: "Schedule",
        body: "First delivery is typically within two weeks of signup. Recurring deliveries follow your monthly cycle.",
      },
      {
        heading: "Zones",
        body: "Service expands by postal prefix. If we cannot serve your area yet, you may join a waitlist when that feature is enabled.",
      },
    ],
  },
  refunds: {
    title: "Refunds",
    summary: "Placeholder refund policy for damaged or missing items.",
    sections: [
      {
        heading: "Damaged goods",
        body: "Contact support within 7 days of delivery with photos. We will replace or credit at our discretion.",
      },
    ],
  },
  cancellation: {
    title: "Cancellation",
    summary: "How to end your subscription.",
    sections: [
      {
        heading: "How to cancel",
        body: "Use your account dashboard or contact support. Cancellation applies to future cycles after the current cut-off.",
      },
    ],
  },
  accessibility: {
    title: "Accessibility",
    summary: "Our commitment to accessible digital experiences.",
    sections: [
      {
        heading: "Standards",
        body: "We target WCAG 2.1 AA for the marketing site and account experience. Report barriers to support@essentra.ca.",
      },
    ],
  },
};

export function isLegalSlug(slug: string): slug is LegalSlug {
  return slug in legalPages;
}
