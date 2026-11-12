import Image from "next/image";

/** Calm household moment — delivery / essentials, not generic architecture */
export function HeroPhoto() {
  return (
    <figure className="relative mx-auto w-full max-w-md md:max-w-none">
      <div className="relative overflow-hidden rounded-lg border border-line bg-paper-warm shadow-[0_12px_40px_-16px_rgba(42,41,38,0.2)]">
        <Image
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80"
          alt="Organized kitchen with everyday essentials ready for the week"
          width={900}
          height={700}
          className="h-auto w-full object-cover"
          priority
        />
      </div>
    </figure>
  );
}
