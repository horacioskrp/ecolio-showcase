import { trustedBy } from "./data";

const marqueeBatches = ["batch-a", "batch-b"];

export function MarqueeSection() {
  return (
    <section className="relative overflow-hidden py-12 border-y border-white/5">
      <div className="marquee-track">
        {marqueeBatches.map((batch) =>
          trustedBy.map((brand) => (
            <div key={`${batch}-${brand}`} className="text-sm text-muted font-medium whitespace-nowrap px-8">
              ✓ {brand}
            </div>
          )),
        )}
      </div>
    </section>
  );
}
