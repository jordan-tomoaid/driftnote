import { CaptureDemo } from "./CaptureDemo";

// Ambient "drifting" thoughts behind the hero — the visual thesis of the name.
// Decorative only, so aria-hidden, and motion is disabled for reduced-motion.
type Drifter = {
  text: string;
  top: string;
  left?: string;
  right?: string;
  tilt: string;
  delay: string;
};

const DRIFTERS: Drifter[] = [
  {
    text: "that thing for the thing",
    top: "12%",
    left: "4%",
    tilt: "-6deg",
    delay: "0s",
  },
  {
    text: "domain idea??",
    top: "26%",
    right: "6%",
    tilt: "5deg",
    delay: "1.2s",
  },
  {
    text: "reply to the DM",
    top: "68%",
    left: "7%",
    tilt: "4deg",
    delay: "0.6s",
  },
  {
    text: "the good one I forgot",
    top: "78%",
    right: "9%",
    tilt: "-5deg",
    delay: "1.8s",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="drift-grid absolute inset-0 -z-10" aria-hidden />
      {/* soft signal glow rising from the capture box */}
      <div
        className="absolute left-1/2 top-[46%] -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-signal/15 blur-3xl"
        aria-hidden
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 hidden md:block"
      >
        {DRIFTERS.map((d) => (
          <span
            key={d.text}
            className="animate-drift-float absolute select-none rounded-lg border border-ink/10 bg-paper/70 px-3 py-1.5 font-mono text-xs text-ink-soft shadow-sm backdrop-blur-sm"
            style={{
              top: d.top,
              left: d.left,
              right: d.right,
              ["--tilt" as string]: d.tilt,
              animationDelay: d.delay,
            }}
          >
            {d.text}
          </span>
        ))}
      </div>

      <div className="mx-auto max-w-3xl px-5 pb-20 pt-20 text-center sm:pt-28">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper/70 px-3 py-1 font-mono text-xs text-ink-soft">
          <span className="size-1.5 rounded-full bg-amber" aria-hidden />
          for people with too many notes apps
        </p>

        <h1 className="text-balance text-5xl font-extrabold leading-[1.04] text-ink sm:text-6xl">
          Catch the thought
          <br className="hidden sm:block" /> before it{" "}
          <span className="relative whitespace-nowrap text-signal">
            drifts off
            <svg
              className="absolute -bottom-2 left-0 w-full text-amber"
              viewBox="0 0 200 12"
              fill="none"
              aria-hidden
            >
              <path
                d="M2 8C40 3 80 3 120 6s60 3 78 1"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
          .
        </h1>

        <p className="mx-auto mt-7 max-w-xl text-pretty text-lg text-ink-soft">
          Driftnote is one keyboard shortcut for every stray idea. Type it,
          press Enter, and it files itself into the right project.{" "}
          <span className="font-medium text-ink">
            Capture now, organize never.
          </span>
        </p>

        <div className="mx-auto mt-10 max-w-xl">
          <CaptureDemo />
        </div>

        <p className="mt-6 font-mono text-[13px] text-ink-soft">
          Free forever for the basics · Pro is $5/mo
        </p>
      </div>
    </section>
  );
}
