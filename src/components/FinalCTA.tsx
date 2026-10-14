import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { profile } from "../data/portfolio";
import { useSmoothScroll } from "../hooks/smoothScroll";
import { EASE, Magnetic, Particles } from "./fx";
import { SeriesMark } from "./Poster";

export default function FinalCTA({ onReplay }: { onReplay: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const [showContact, setShowContact] = useState(false);
  const { scrollTo } = useSmoothScroll();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.2"],
  });
  const spacing = useTransform(scrollYProgress, [0, 1], ["0.6em", "0.02em"]);
  const blur = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(16px)", "blur(0px)"],
  );
  const opacity = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  const ctas = [
    {
      label: "Let's Build",
      href: "#contact-options",
      primary: true,
      cursor: "play",
    },
    { label: "LinkedIn", href: profile.links.linkedin, cursor: "link" },
    { label: "GitHub", href: profile.links.github, cursor: "link" },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_60%,rgba(229,19,43,0.18),transparent_70%)]"
      />
      <Particles count={36} />

      <motion.p
        className="relative mb-6 text-[11px] font-bold uppercase tracking-[0.5em] text-crimson-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        The Next Episode
      </motion.p>
      <motion.h2
        className="relative font-display leading-[0.85] text-bone"
        style={{
          fontSize: "clamp(3.4rem, 13vw, 12rem)",
          letterSpacing: spacing,
          filter: blur,
          opacity,
        }}
      >
        TO BE CONTINUED…
      </motion.h2>

      <motion.div
        className="relative mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
      >
        <p className="font-sans text-2xl font-semibold tracking-[0.2em] text-bone sm:text-3xl">
          {profile.displayName.toUpperCase()}
        </p>
        <p className="mt-2 text-xs font-semibold tracking-[0.4em] text-mist sm:text-sm">
          {profile.role.toUpperCase()}
        </p>
      </motion.div>

      <motion.div
        className="relative mt-10 flex flex-wrap justify-center gap-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.08, delayChildren: 0.35 }}
      >
        {ctas.map((c) => (
          <motion.div
            key={c.label}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.9 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.6, ease: EASE },
              },
            }}
          >
            <Magnetic>
              {c.primary ? (
                <button
                  type="button"
                  onClick={() => setShowContact(true)}
                  data-cursor={c.cursor}
                  className="flex min-h-12 items-center gap-2 rounded-full bg-crimson px-7 text-sm font-bold tracking-[0.12em] text-white shadow-[0_0_50px_rgba(229,19,43,0.5)] transition hover:bg-crimson-2"
                >
                  <span>▶</span>
                  {c.label.toUpperCase()}
                </button>
              ) : (
                <a
                  href={c.href || undefined}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                  data-cursor={c.cursor}
                  className="flex min-h-12 items-center gap-2 rounded-full border border-white/25 px-7 text-sm font-bold tracking-[0.12em] text-bone transition hover:border-bone hover:bg-white/10"
                >
                  {c.label.toUpperCase()}
                  <span className="text-mist">↗</span>
                </a>
              )}
            </Magnetic>
          </motion.div>
        ))}
      </motion.div>

      <div className="relative mt-16 flex flex-wrap justify-center gap-6 text-xs font-semibold tracking-[0.24em] text-smoke">
        <button
          type="button"
          onClick={() => scrollTo(0, { offset: 0 })}
          className="hover:text-bone"
        >
          ↺ WATCH AGAIN
        </button>
        <button type="button" onClick={onReplay} className="hover:text-bone">
          ▶ REPLAY OPENING
        </button>
      </div>

      <footer className="absolute inset-x-0 bottom-0 px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center">
        <div className="mb-2 text-base">
          <SeriesMark />
        </div>
        <p className="text-[11px] leading-relaxed text-smoke">
          © {new Date().getFullYear()} {profile.displayName}. A personal,
          streaming-inspired portfolio — not affiliated with any streaming
          service.
        </p>
      </footer>

      {createPortal(
        <AnimatePresence>
          {showContact && (
            <motion.div
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowContact(false)}
            >
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="contact-popup-title"
                className="relative z-[10000] w-full max-w-md rounded-2xl border border-red-500 bg-[#181818] p-7 text-left text-white shadow-2xl sm:p-9"
                initial={{ opacity: 0, y: 24, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.96 }}
                transition={{ duration: 0.3, ease: EASE }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mb-5 flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] text-crimson-2">
                  <span className="text-xl">K</span> SERIES · CONTACT
                </div>

                <button
                  type="button"
                  aria-label="Close contact popup"
                  onClick={() => setShowContact(false)}
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-mist transition hover:bg-white/10 hover:text-bone"
                >
                  ✕
                </button>

                <h3
                  id="contact-popup-title"
                  className="font-display text-4xl leading-tight text-bone sm:text-5xl"
                >
                  LET'S BUILD SOMETHING.
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-mist">
                  Have a project, opportunity, or idea? Reach out and let's
                  talk.
                </p>

                <a
                  href="mailto:vkrishwar@gmail.com?subject=Let's%20build%20something"
                  className="mt-7 flex items-center justify-between rounded-xl border border-white/15 bg-white/[0.04] p-4 transition hover:border-crimson-2 hover:bg-white/[0.07]"
                >
                  <span>
                    <span className="block text-[10px] font-bold tracking-[0.2em] text-smoke">
                      EMAIL ME
                    </span>
                    <span className="mt-1 block break-all text-sm font-semibold text-bone">
                      vkrishwar@gmail.com
                    </span>
                  </span>
                  <span className="ml-3 text-xl text-crimson-2">↗</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/krishwar-v-605042319"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 flex items-center justify-between rounded-xl border border-white/15 p-4 transition hover:border-crimson-2 hover:bg-white/[0.04]"
                >
                  <span>
                    <span className="block text-[10px] font-bold tracking-[0.2em] text-smoke">
                      CONNECT PROFESSIONALLY
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-bone">
                      Find me on LinkedIn
                    </span>
                  </span>
                  <span className="ml-3 text-xl text-crimson-2">↗</span>
                </a>

                <p className="mt-6 text-center text-[10px] tracking-[0.2em] text-smoke">
                  KRISHWAR V · SOFTWARE DEVELOPER
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </section>
  );
}
