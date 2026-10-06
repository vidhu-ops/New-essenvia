/** Progress reduces uncertainty (Zeigarnik + goal-gradient effect) */
export function BuildProgress({ step, total }: { step: number; total: number }) {
  const pct = Math.round((step / total) * 100);
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-[#64748B]">
        <span>Building your box</span>
        <span>{pct}% complete</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#E2E8F0]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#40916C] to-[#1B4332] transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="mt-2 text-[11px] text-[#94A3B8]">One question at a time—designed to lower decision fatigue.</p>
    </div>
  );
}
