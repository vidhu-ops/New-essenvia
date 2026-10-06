/** Stylized box illustration — warmth + order (domestic calm, not warehouse clutter) */
export function BoxHeroVisual() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
      <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-br from-[#D8F3DC] to-[#40916C]/20 blur-2xl" aria-hidden />
      <div className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#E2E8F0] bg-white shadow-[0_24px_80px_-24px_rgba(27,67,50,0.25)]">
        <div className="bg-[#1B4332] px-6 py-4">
          <p className="font-serif text-lg text-white">Essentra</p>
          <p className="text-xs text-[#D8F3DC]/90">Your household box</p>
        </div>
        <div className="flex flex-1 flex-col gap-3 p-6">
          {[
            { label: "Laundry", color: "bg-[#40916C]/15" },
            { label: "Paper", color: "bg-[#D8F3DC]" },
            { label: "Kitchen", color: "bg-[#40916C]/10" },
            { label: "Cleaning", color: "bg-[#D8F3DC]/80" },
          ].map((row) => (
            <div key={row.label} className={`flex items-center gap-3 rounded-xl ${row.color} px-4 py-3`}>
              <div className="h-10 w-10 rounded-lg bg-white shadow-sm" aria-hidden />
              <div>
                <p className="text-sm font-medium text-[#1A1A1A]">{row.label}</p>
                <p className="text-xs text-[#64748B]">Your brands · your sizes</p>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-[#E2E8F0] bg-[#FAFAF8] px-6 py-4">
          <p className="text-center font-serif text-2xl text-[#1B4332]">One monthly price</p>
          <p className="text-center text-xs text-[#64748B]">No cart · No surprise add-ons</p>
        </div>
      </div>
    </div>
  );
}
