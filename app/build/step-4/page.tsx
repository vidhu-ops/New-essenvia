import { BuildShell } from "@/components/essentra/build/BuildShell";
import { HumanCta } from "@/components/essentra/HumanCta";

const items = ["Dishwasher pods", "Dish soap", "Kitchen garbage bags", "Large garbage bags"];

export default function BuildStep4() {
  return (
    <BuildShell step={4} title="Kitchen" backHref="/build/step-3">
      <ul className="divide-y divide-line border-y border-line text-[15px]">
        {items.map((item) => (
          <li key={item} className="flex justify-between py-3 text-ink-muted">
            <span>{item}</span>
            <span className="text-ink-soft">Defaults OK</span>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <HumanCta href="/build/step-5" className="block w-full">
          Next
        </HumanCta>
      </div>
    </BuildShell>
  );
}
