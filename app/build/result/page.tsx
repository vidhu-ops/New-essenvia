import { BuildResultClient } from "@/components/essentra/build/BuildResultClient";

export default function BuildResult() {
  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-line bg-paper-warm px-5 py-5 text-center">
        <p className="font-display text-xl text-ink">Your Essentra package</p>
      </header>
      <div className="mx-auto max-w-lg px-5 py-10">
        <BuildResultClient />
      </div>
    </div>
  );
}
