export function BuildProgress({ step, total }: { step: number; total: number }) {
  return (
    <div>
      <p className="text-[13px] text-ink-soft">
        Step {step} of {total}
      </p>
      <div className="mt-2 h-1.5 overflow-hidden rounded-sm bg-line">
        <div className="h-full bg-green transition-all duration-300" style={{ width: `${(step / total) * 100}%` }} />
      </div>
    </div>
  );
}
