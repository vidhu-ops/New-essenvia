import { MarketingLayout } from "@/components/essentra/MarketingLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is this just ‘small, medium, large’ for everything?",
    a: "No. Your toilet paper quantity can differ from detergent. The plan matches total customized need—not one template size per category.",
  },
  {
    q: "Will I see extra charges for brands or sizes?",
    a: "You see one monthly package price (+ tax). No +$3 per item UI—by design, to keep trust and clarity.",
  },
  {
    q: "Can I skip or pause?",
    a: "Yes—rules and cut-offs will be configurable in admin and explained clearly before launch (placeholder policies until legal review).",
  },
  {
    q: "Which brands are included?",
    a: "Recognizable national brands where supply allows—managed in the admin catalog, not frozen in code.",
  },
];

export default function FAQPage() {
  return (
    <MarketingLayout>
      <div className="mx-auto max-w-2xl px-4 py-16">
        <h1 className="font-serif text-4xl text-[#1B4332]">FAQ</h1>
        <Accordion className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`f-${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-[#64748B]">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </MarketingLayout>
  );
}
