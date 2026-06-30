import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What does early access cost?",
    a: "Nothing. Driftnote is in early access while we build it, so joining the waitlist is free. We'll sort out paid plans later — and early users will hear about it first, with no surprises.",
  },
  {
    q: "Where do my notes end up?",
    a: "Inside Driftnote, grouped by project. The whole point is that you don't decide where things go at capture time — you dump, and it sorts. You can always re-route a note later if the AI guessed wrong.",
  },
  {
    q: "Does it replace Notion / Apple Notes?",
    a: "Not trying to. Driftnote is the catching layer — the place thoughts land before they're lost. If you live in another tool, think of this as the fast front door to it.",
  },
  {
    q: "What's the keyboard shortcut?",
    a: "A global hotkey (⌘ J by default) opens the capture bar over anything you're doing. Type, hit Enter, and you're back where you were.",
  },
  {
    q: "It's early — what's the catch?",
    a: "It's built by a tiny team and we're opening access in batches. Join the list and tell us what you'd want it to capture; early feedback shapes what ships next.",
  },
];

export function Faq() {
  return (
    <section className="mx-auto max-w-2xl px-5 pb-24">
      <h2 className="text-center text-2xl font-bold text-ink sm:text-3xl">
        Questions, before you trust it with your brain.
      </h2>
      <Accordion type="single" collapsible className="mt-8 w-full">
        {FAQS.map((f, i) => (
          <AccordionItem key={f.q} value={`item-${i}`}>
            <AccordionTrigger className="text-left text-[15px] font-medium text-ink">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-[15px] leading-relaxed text-ink-soft">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
