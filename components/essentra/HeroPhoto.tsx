import Image from "next/image";

/** Real photography reads human; illustration grids read “template” */
export function HeroPhoto() {
  return (
    <figure className="relative mx-auto w-full max-w-md md:max-w-none">
      <div className="absolute -right-2 top-6 z-10 max-w-[220px] rotate-2 rounded-sm border border-[#e8e2d9] bg-[#faf8f5] px-4 py-3 text-sm text-[#5c574f] shadow-md md:-left-6 md:right-auto md:-rotate-1">
        “Same Tide we already use—just shows up.”
        <span className="mt-1 block text-xs text-[#8a847a]">— early pilot feedback placeholder</span>
      </div>
      <div className="relative rotate-1 overflow-hidden rounded-sm border border-[#e0d9cf] shadow-[4px_8px_24px_rgba(42,41,38,0.12)] md:rotate-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
          alt="Front step and entryway of a Canadian home—where monthly deliveries land"
          width={900}
          height={1100}
          className="h-auto w-full object-cover"
          priority
        />
      </div>
      <figcaption className="mt-3 text-left text-xs text-[#8a847a]">
        Photo: Unsplash · We’ll swap in Essentra box photography at launch.
      </figcaption>
    </figure>
  );
}
