import { Waitlist } from "./Waitlist";

export function CtaSection() {
  return (
    <section id="waitlist" className="scroll-mt-20">
      <div className="mx-auto max-w-2xl px-5 py-24 text-center">
        <h2 className="text-balance text-3xl font-bold text-ink sm:text-4xl">
          Stop losing the good ones.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg text-ink-soft">
          Driftnote is opening up in batches. Drop your email and we&apos;ll hand
          you a spot — and we&apos;d genuinely love to hear what you&apos;d want it
          to catch.
        </p>
        <div className="mx-auto mt-9 max-w-lg">
          <Waitlist />
        </div>
      </div>
    </section>
  );
}
