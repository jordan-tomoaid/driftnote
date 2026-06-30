import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} handles your data.`,
};

// A real, plain-language privacy policy. Reddit (and most ad networks) require
// a reachable privacy policy on any landing page that collects emails or runs
// an advertising pixel. Keep this honest and current.
const UPDATED = "June 30, 2026";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-full flex-col">
      <header className="border-b border-ink/5 bg-drift/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-3xl items-center px-5">
          <Link href="/" className="flex items-center gap-2 font-heading font-bold text-ink">
            <span
              aria-hidden
              className="grid size-6 place-items-center rounded-md bg-signal text-[13px] text-white"
            >
              ⌁
            </span>
            {site.name}
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-16">
        <h1 className="text-4xl font-extrabold text-ink">Privacy Policy</h1>
        <p className="mt-3 font-mono text-sm text-ink-soft">Last updated: {UPDATED}</p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink-soft [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-ink [&_a]:text-signal [&_a]:underline">
          <section className="space-y-3">
            <p>
              {site.name} is an early-stage product. This page explains what we
              collect on this website and what we do with it. If anything here is
              unclear, email us and we&apos;ll fix the wording.
            </p>
          </section>

          <section className="space-y-3">
            <h2>What we collect</h2>
            <p>
              <strong className="text-ink">Your email address</strong>, if you
              join the waitlist. That&apos;s the only personal detail we ask for.
            </p>
            <p>
              <strong className="text-ink">Basic analytics and ad data.</strong>{" "}
              If you arrived from a Reddit ad, we use the Reddit advertising pixel
              to understand whether the ad led to a signup. This may set cookies
              and share a hashed, non-identifying signal with Reddit. We do not
              upload your email to ad networks.
            </p>
          </section>

          <section className="space-y-3">
            <h2>How we use it</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>To email you when Driftnote opens up, and about Driftnote only.</li>
              <li>To measure whether our ads are working, in aggregate.</li>
              <li>To improve the product based on what early users tell us.</li>
            </ul>
            <p>We do not sell your data. We do not send marketing for other products.</p>
          </section>

          <section className="space-y-3">
            <h2>Who we share it with</h2>
            <p>
              We use a small number of service providers to run the site: a form
              host to receive waitlist emails, static hosting to serve these
              pages, and Reddit&apos;s advertising tools for measurement. Each
              processes data only to provide that service.
            </p>
          </section>

          <section className="space-y-3">
            <h2>Your choices</h2>
            <p>
              You can ask us to delete your email at any time, and every email we
              send includes an unsubscribe link. You can block advertising cookies
              in your browser settings without affecting the site.
            </p>
          </section>

          <section className="space-y-3">
            <h2>Contact</h2>
            <p>
              Questions or deletion requests:{" "}
              <a href="mailto:hello@driftnote.example">hello@driftnote.example</a>.
            </p>
          </section>
        </div>

        <div className="mt-12 border-t border-ink/10 pt-6">
          <Link href="/" className="text-sm text-signal hover:underline">
            ← Back to {site.name}
          </Link>
        </div>
      </main>
    </div>
  );
}
