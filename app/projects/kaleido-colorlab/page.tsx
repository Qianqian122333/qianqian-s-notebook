"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Play,
  Heart,
  ImageIcon,
  User,
  Clock,
  Users,
  Video,
  Maximize2,
  X,
  FileText,
  Star,
  ThumbsUp,
  Target,
  HelpCircle,
  Search,
  HeartCrack,
  Lightbulb,
  BarChart2,
  Code2,
  Trophy,
  Flag,
} from "lucide-react";

/* ─── Tech stack icons ─── */
const techStack = [
  { icon: "/figma.svg", label: "Figma" },
  { icon: "/nextjs.png", label: "Next.js" },
  { icon: "/html.svg", label: "HTML" },
  { icon: "/css.svg", label: "CSS" },
  { icon: "/tailwindcss.svg", label: "Tailwind CSS" },
  { icon: "/javascript.svg", label: "JavaScript" },
  { icon: "/typescript.svg", label: "TypeScript" },
  { icon: "/sql.svg", label: "SQL" },
];

/* ─── Story heading words ─── */
const storyWords = [
  "I",
  "discovered",
  "Real",
  "User",
  "Pain",
  "Points",
  "and",
  "used",
  "UX",
  "Design",
  "&",
  "Full-Stack",
  "Development",
  "to",
  "turn",
  "stakeholder",
  "skepticism",
  "into",
  "the",
  "company's",
  "#1",
  "priority",
  "project.",
];

/* ─── Story heading 2 words ─── */
const storyWords2 = [
  "Beta",
  "Test",
  "Version:",
  "I",
  "designed",
  "and",
  "developed",
  "four",
  "core",
  "features.",
];

/* ─── Placeholder for missing video/image ─── */
function MediaPlaceholder({
  label,
  type = "video",
  aspect = "video",
  className = "",
}: {
  label: string;
  type?: "video" | "image";
  aspect?: "video" | "square" | "phone";
  className?: string;
}) {
  const aspectCls =
    aspect === "phone"
      ? "aspect-[9/16]"
      : aspect === "square"
        ? "aspect-square"
        : "aspect-video";

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-primary/30 bg-accent/30 ${aspectCls} ${className}`}
      style={{ transform: "rotate(-0.5deg)" }}
    >
      <div className="text-center p-6 space-y-3">
        {type === "video" ? (
          <div className="mx-auto w-16 h-16 rounded-full border-2 border-primary/40 flex items-center justify-center bg-primary/10">
            <Play className="w-7 h-7 text-primary ml-1" />
          </div>
        ) : (
          <div className="mx-auto w-14 h-14 rounded-xl border-2 border-primary/30 flex items-center justify-center bg-primary/5">
            <ImageIcon className="w-6 h-6 text-primary/40" />
          </div>
        )}
        <p
          className="text-sm text-muted-foreground"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {label}
        </p>
      </div>
      {/* Decorative corner doodles */}
      <div className="absolute top-3 left-3 text-primary/20 text-lg">✦</div>
      <div className="absolute bottom-3 right-3 text-secondary/20 text-lg">
        ✦
      </div>
    </div>
  );
}

/* ─── Phone-frame video placeholder ─── */
function PhonePlaceholder({ label }: { label: string }) {
  return (
    <div className="mx-auto flex w-full max-w-70 sm:max-w-80 flex-col items-center">
      <div className="w-full overflow-hidden rounded-3xl border-4 border-primary/20 shadow-xl">
        <MediaPlaceholder
          label={label}
          type="video"
          aspect="phone"
          className="border-0 rounded-none"
        />
      </div>
    </div>
  );
}

/* ─── Desktop-frame video placeholder ─── */
function DesktopPlaceholder({ label }: { label: string }) {
  return (
    <div className="mx-auto flex w-full max-w-137.5 flex-col overflow-hidden rounded-xl border-2 border-primary/10 shadow-2xl bg-card">
      <div className="flex h-8 w-full items-center gap-2 border-b-2 border-primary/10 bg-muted/50 px-3 shrink-0">
        <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
      </div>
      <MediaPlaceholder
        label={label}
        type="video"
        className="border-0 rounded-none"
      />
    </div>
  );
}

export default function KaleidoColorLabPage() {
  const waveRef = useRef<HTMLHeadingElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const storyRef2 = useRef<HTMLDivElement>(null);
  const storyRef3 = useRef<HTMLDivElement>(null);
  const storyRef4 = useRef<HTMLDivElement>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  useEffect(() => {
    let observerInstance: IntersectionObserver | null = null;
    let observer2Instance: IntersectionObserver | null = null;
    let observer3Instance: IntersectionObserver | null = null;
    let observer4Instance: IntersectionObserver | null = null;

    async function init() {
      try {
        const mod = await import("gsap");
        const gsap = mod.default || mod;

        /* ─ Title wave animation (on mount) ─ */
        if (waveRef.current) {
          const words = waveRef.current.querySelectorAll(".wave-word");
          gsap.fromTo(
            words,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.12,
              ease: "back.out(1.7)",
            },
          );
        }

        /* ─ Story heading animation (IntersectionObserver) ─ */
        if (storyRef.current) {
          const el = storyRef.current;
          const words = el.querySelectorAll<HTMLElement>(".story-word");

          observerInstance = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  gsap.fromTo(
                    words,
                    { y: 20, opacity: 0 },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 0.5,
                      stagger: 0.06,
                      ease: "back.out(1.7)",
                    },
                  );
                  observerInstance?.disconnect();
                }
              });
            },
            { threshold: 0.15 },
          );

          observerInstance.observe(el);
        }

        /* ─ Story heading 2 animation (IntersectionObserver) ─ */
        if (storyRef2.current) {
          const el2 = storyRef2.current;
          const words2 = el2.querySelectorAll<HTMLElement>(".story-word");

          observer2Instance = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  gsap.fromTo(
                    words2,
                    { y: 20, opacity: 0 },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 0.5,
                      stagger: 0.06,
                      ease: "back.out(1.7)",
                    },
                  );
                  observer2Instance?.disconnect();
                }
              });
            },
            { threshold: 0.15 },
          );

          observer2Instance.observe(el2);
        }

        /* ─ Achievement heading animation (IntersectionObserver) ─ */
        if (storyRef3.current) {
          const el3 = storyRef3.current;
          const words3 = el3.querySelectorAll<HTMLElement>(".story-word");

          observer3Instance = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  gsap.fromTo(
                    words3,
                    { y: 20, opacity: 0 },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 0.5,
                      stagger: 0.06,
                      ease: "back.out(1.7)",
                    },
                  );
                  observer3Instance?.disconnect();
                }
              });
            },
            { threshold: 0.15 },
          );

          observer3Instance.observe(el3);
        }

        /* ─ Reflections heading animation (IntersectionObserver) ─ */
        if (storyRef4.current) {
          const el4 = storyRef4.current;
          const words4 = el4.querySelectorAll<HTMLElement>(".story-word");

          observer4Instance = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  gsap.fromTo(
                    words4,
                    { y: 20, opacity: 0 },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 0.5,
                      stagger: 0.06,
                      ease: "back.out(1.7)",
                    },
                  );
                  observer4Instance?.disconnect();
                }
              });
            },
            { threshold: 0.15 },
          );

          observer4Instance.observe(el4);
        }
      } catch {
        if (waveRef.current) {
          const words =
            waveRef.current.querySelectorAll<HTMLElement>(".wave-word");
          words.forEach((w) => (w.style.opacity = "1"));
        }
        if (storyRef.current) {
          const words =
            storyRef.current.querySelectorAll<HTMLElement>(".story-word");
          words.forEach((w) => (w.style.opacity = "1"));
        }
        if (storyRef2.current) {
          const words =
            storyRef2.current.querySelectorAll<HTMLElement>(".story-word");
          words.forEach((w) => (w.style.opacity = "1"));
        }
        if (storyRef3.current) {
          const words =
            storyRef3.current.querySelectorAll<HTMLElement>(".story-word");
          words.forEach((w) => (w.style.opacity = "1"));
        }
        if (storyRef4.current) {
          const words =
            storyRef4.current.querySelectorAll<HTMLElement>(".story-word");
          words.forEach((w) => (w.style.opacity = "1"));
        }
      }
    }

    init();
    return () => {
      observerInstance?.disconnect();
      observer2Instance?.disconnect();
      observer3Instance?.disconnect();
      observer4Instance?.disconnect();
    };
  }, []);

  return (
    <div className="relative">
      {/* ── Lightbox ── */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setZoomedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            onClick={() => setZoomedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="relative max-w-5xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={zoomedImage}
              alt="Enlarged view"
              width={1400}
              height={1050}
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-xl mx-auto"
            />
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════════════════
          HERO SECTION — centered
          ═══════════════════════════════════════════════════════ */}
      <section className="relative py-20 bg-linear-to-br from-primary/5 to-secondary/5 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 right-20 text-9xl text-primary/10 transform -rotate-12">
          ★
        </div>
        <div
          className="absolute bottom-10 left-10 w-32 h-32 border-4 border-secondary/20 rounded-full"
          style={{ transform: "rotate(-15deg)" }}
        />
        <div className="absolute bottom-1/4 right-1/4 text-6xl text-secondary/10">
          {"♥︎"}
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back nav */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-10"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          {/* Category tags — centered */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span
              className="text-sm text-secondary"
              style={{ fontFamily: "var(--font-body)" }}
            >
              UX Design · Full-Stack Development
            </span>
            <div className="w-8 h-0.5 bg-primary/40" />
          </div>

          {/* Title — centered, word-by-word wave animation */}
          <div className="text-center mb-8">
            <h1 ref={waveRef} className="text-primary relative inline-block">
              {["Kaleido", "ColorLab"].map((word, i) => (
                <span
                  key={i}
                  className="wave-word inline-block mr-[0.3em]"
                  style={{ opacity: 0 }}
                >
                  {word}
                </span>
              ))}
              <div
                className="absolute -bottom-2 left-0 w-full h-2 bg-secondary/20"
                style={{
                  transform: "rotate(-1deg)",
                  clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 80%)",
                }}
              />
            </h1>
          </div>

          {/* Description — centered, updated copy */}
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            Kaleido ColorLab bridges the gap between inspiration and purchase.
            Users extract colors from photos to create custom palettes, while
            admins gain insights into user preferences and buying behavior to
            optimize inventory.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 1: PROJECT OVERVIEW
          Hero image fills full width; cards directly below.
          ═══════════════════════════════════════════════════════ */}
      <section id="overview" className="w-full">
        {/* Full-width hero image — no heading above it */}
        <div className="relative w-full">
          <Image
            src="/colorlab/colorlab-heropic.webp"
            alt="Kaleido ColorLab Hero"
            width={1920}
            height={1080}
            className="h-auto w-full"
            priority
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Bridge statement */}
          <p
            className="text-center text-4xl text-primary font-bold mb-16"
            style={{ fontFamily: "var(--font-body)" }}
          >
            I Built What I Design
          </p>

          {/* Role / Duration / Collaboration — 3 columns */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 mb-16 text-center">
            <div className="space-y-1">
              <div className="flex justify-center mb-3">
                <User className="w-7 h-7 text-primary" />
              </div>
              <p
                className="font-bold text-foreground mb-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Role
              </p>
              <p
                className="text-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                UX Designer
              </p>
              <p
                className="text-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Full-stack Developer
              </p>
            </div>
            <div className="space-y-1">
              <div className="flex justify-center mb-3">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <p
                className="font-bold text-foreground mb-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Duration
              </p>
              <p
                className="text-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Nov 2025 – Present
              </p>
            </div>
            <div className="space-y-1">
              <div className="flex justify-center mb-3">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <p
                className="font-bold text-foreground mb-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Collaboration
              </p>
              <p
                className="text-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Backend Developer
              </p>
              <p
                className="text-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Marketing Team
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="text-center mb-12">
            <div className="flex flex-wrap items-center justify-center gap-8">
              {techStack.map((tech) => (
                <div
                  key={tech.label}
                  className="flex flex-col items-center gap-3 transition-transform hover:-translate-y-1"
                >
                  <Image
                    src={tech.icon}
                    alt={tech.label}
                    width={32}
                    height={32}
                    className="h-8 w-auto"
                  />
                  <span
                    className="text-xs font-bold tracking-wide text-muted-foreground"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {tech.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center justify-center gap-6">
            <a
              href="https://kaleidocolorlab.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-secondary transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Explore Kaleido ColorLab
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          STORY BANNER — animated heading grouping sections 2-4
          ═══════════════════════════════════════════════════════ */}
      <section className="w-full py-24 bg-primary/5 relative overflow-hidden">
        <div className="absolute top-8 right-12 text-8xl text-primary/10 transform -rotate-12">
          ★
        </div>
        <div className="absolute bottom-8 left-12 text-6xl text-secondary/10 transform rotate-12">
          {"♥︎"}
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            ref={storyRef}
            className="text-primary font-bold leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
              lineHeight: 1.5,
            }}
          >
            {storyWords.map((word, i) => (
              <span
                key={i}
                className="story-word inline-block mr-[0.3em]"
                style={{ opacity: 0 }}
              >
                {word}
              </span>
            ))}
          </div>
          <div
            className="w-32 h-1 bg-primary/30 mx-auto mt-8"
            style={{ transform: "rotate(-1deg)" }}
          />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 2: I DISCOVERED THE REAL USER PAIN POINTS
          ═══════════════════════════════════════════════════════ */}
      <section id="insight" className="w-full py-24 bg-card/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-primary mb-4 relative inline-block">
            I Discovered the Real User Pain Points
            <div
              className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30"
              style={{ transform: "rotate(-1deg)" }}
            />
          </h2>

          {/* Challenge */}
          <div className="mt-10 mb-16">
            <div className="flex items-start gap-3 mb-2">
              <Target className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <h3 className="text-primary">The Challenge</h3>
            </div>
            <ul className="ml-10 mt-3 space-y-2 list-disc list-inside">
              <li className="text-lg text-muted-foreground leading-relaxed">
                KaleidoColor didn&apos;t meet expected sales.
              </li>
              <li className="text-lg text-muted-foreground leading-relaxed">
                Stakeholders wanted to{" "}
                <span className="text-orange-500 font-bold">
                  boost KaleidoColor&apos;s revenue.
                </span>
              </li>
            </ul>
          </div>

          {/* Stakeholder's Needs — image + comparison */}
          <div className="mb-16">
            <div className="flex items-start gap-3 mb-6">
              <Flag className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <h3 className="text-primary">Stakeholder&apos;s Needs</h3>
            </div>

            <Image
              src="/colorlab/stakeholder-thinking.webp"
              alt="Stakeholder Hypothesis"
              width={1200}
              height={675}
              className="w-full h-auto rounded-2xl mb-3"
            />
            <p
              className="text-center text-sm text-muted-foreground mb-10"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Build a more detailed product website to boost revenue
            </p>

            {/* Stakeholder vs My Thinking — side by side */}
            <div className="grid gap-8 md:grid-cols-2">
              {/* Left: Stakeholder */}
              <div className="bg-card rounded-2xl border-2 border-primary/10 p-8 space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <p
                    className="font-bold text-foreground"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Stakeholders
                  </p>
                  <span
                    className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full border border-border"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Product-centric
                  </span>
                </div>

                <div>
                  <p className="text-foreground leading-relaxed">
                    <span className="font-bold">
                      Stakeholders&apos; Thinking:
                    </span>{" "}
                    Users don&apos;t know our product&apos;s advantages.
                  </p>
                </div>
                <div>
                  <p className="text-foreground leading-relaxed">
                    <span className="font-bold">What They Want:</span> A more
                    detailed Product website.
                  </p>
                </div>
              </div>

              {/* Right: My Thinking */}
              <div className="bg-card rounded-2xl border-2 border-secondary/20 p-8 space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <p
                    className="font-bold text-foreground"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Me
                  </p>
                  <span
                    className="text-xs bg-secondary text-primary-foreground px-3 py-1 rounded-full"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    User-centric
                  </span>
                </div>
                <div>
                  <p className="text-foreground leading-relaxed">
                    <span className="font-bold text-orange-500">
                      My Question:
                    </span>{" "}
                    All competitors claim greatness. Why would users notice us?
                  </p>
                </div>
                <div>
                  <p className="text-foreground leading-relaxed">
                    <span className="font-bold text-orange-500">
                      What I Wanted to Know:
                    </span>{" "}
                    In what scenario do users decide to purchase our product?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* My Findings: User Pain Points */}
          <div className="mb-10">
            <div className="flex items-start gap-3 mb-6">
              <Search className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <h3 className="text-primary">My Findings: User Pain Points</h3>
            </div>

            {/* Big user pain point image first */}
            <div className="mb-8">
              <Image
                src="/colorlab/user-painpoint.webp"
                alt="User Pain Point Analysis"
                width={1200}
                height={675}
                className="w-full h-auto rounded-2xl"
              />
              <p
                className="mt-3 text-center text-sm text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                User Journey Map
              </p>
            </div>

            {/* User Pain Points summary */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <HeartCrack className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <h4
                  className="font-bold text-foreground text-lg"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  User Pain Points
                </h4>
              </div>
              <div className="space-y-3 ml-11">
                <p className="text-muted-foreground leading-relaxed">
                  1. Users see a color in the real world but
                  <span className="text-orange-500 font-bold">
                    {" "}
                    don&apos;t know how to replicate and mix it
                  </span>
                  .
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  2. Users{" "}
                  <span className="text-orange-500 font-bold">
                    worry about wasting
                  </span>{" "}
                  money on paints that won&apos;t produce the color they want.
                </p>
              </div>
            </div>
          </div>

          {/* My Ideation */}
          <div>
            <div className="flex items-start gap-3 mb-6">
              <Lightbulb className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <h3 className="text-primary">My Ideation</h3>
            </div>
            <Image
              src="/colorlab/Ideate.jpg"
              alt="Ideation Sketches"
              width={1200}
              height={675}
              className="w-full h-auto rounded-2xl mb-3"
            />
            <p
              className="text-center text-sm text-muted-foreground mb-8"
              style={{ fontFamily: "var(--font-body)" }}
            >
              My Ideation: a color APP
            </p>
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-2xl p-6">
              <span
                className="inline-block text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                User-Centered
              </span>
              <p className="text-lg text-foreground leading-relaxed font-bold">
                <span className="text-primary">Problem Statement: </span> Users
                don&apos;t know which paint to buy.
              </p>
              <p className="text-lg text-foreground leading-relaxed font-bold mt-2">
                <span className="text-primary">Solution:</span> Build an app
                that helps users identify which colors they truly need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 3: CONVINCE STAKEHOLDER WITH COMPETITIVE ANALYSIS & CODE
          ═══════════════════════════════════════════════════════ */}
      <section id="leadership" className="w-full py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-primary mb-12 relative inline-block">
            Used Competitive Analysis &amp; Design+Code to Convince Stakeholders
            <div
              className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30"
              style={{ transform: "rotate(-1deg)" }}
            />
          </h2>

          {/* Stakeholder's Answer */}
          <div className="mb-6 text-center">
            <p
              className="text-xl text-foreground"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Stakeholder&apos;s Answer:{" "}
              <span className="text-primary font-bold">Good idea!</span>
            </p>
          </div>

          {/* BUT — big rejection */}
          <div className="mb-12 bg-destructive/5 border-2 border-destructive/20 rounded-2xl p-10 text-center">
            <p
              className="text-4xl font-bold text-destructive mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              BUT
            </p>
            <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
              Designing and developing an app is{" "}
              <span className="font-bold text-destructive underline underline-offset-4">
                too difficult
              </span>
              .
            </p>
            <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto mt-4">
              They wanted something{" "}
              <span className="font-bold text-primary underline underline-offset-4">
                simple
              </span>
              .
            </p>
          </div>

          {/* My Solution 1: Competitive Analysis */}
          <div className="mb-12">
            <div className="flex items-start gap-3 mb-6">
              <BarChart2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <h3 className="text-primary">
                My Solution 1: Competitive Analysis
              </h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-card rounded-xl border-2 border-primary/10 overflow-hidden">
                <div className="relative w-full aspect-video">
                  <Image
                    src="/colorlab/color-app.webp"
                    alt="Color mixing app on market"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-primary mb-3">
                    It&apos;s not difficult.
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Color-mixing apps already exist on the market. The
                    technology is proven — we&apos;re{" "}
                    <span className="font-bold text-primary">
                      not starting from zero
                    </span>
                    .
                  </p>
                </div>
              </div>
              <div className="bg-card rounded-xl border-2 border-primary/10 overflow-hidden">
                <div className="relative w-full aspect-video">
                  <Image
                    src="/colorlab/product-app.webp"
                    alt="Blue ocean opportunity"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-primary mb-3">
                    If we do, we lead the industry.
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    No competitor at our level has built something similar —
                    this is a{" "}
                    <span className="font-bold text-primary">blue ocean</span>.
                    Being first means{" "}
                    <span className="font-bold text-primary">
                      industry leadership
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* My Solution 2: Code MVP */}
          <div className="mb-12">
            <div className="flex items-start gap-3 mb-4">
              <Code2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <h3 className="text-primary">
                My Solution 2: I can quickly code the core features.
              </h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed ml-10 mb-8">
              I negotiated for{" "}
              <span className="text-orange-500 font-bold">
                2 weeks to build a functional MVP with code
              </span>
              . Although it wouldn&apos;t be the final product, it would prove
              the technical feasibility.
            </p>

            {/* Code image (1/3) + MVP video (2/3) */}
            <div className="flex gap-4 mb-8 items-stretch">
              {/* Code screenshot — 1/3 */}
              <div className="flex flex-col flex-1 gap-2">
                <div className="relative rounded-2xl overflow-hidden flex-1">
                  <Image
                    src="/colorlab/colorlab-coding.webp"
                    alt="Code Architecture Overview"
                    fill
                    className="object-cover"
                  />
                </div>
                <p
                  className="text-center text-sm text-muted-foreground"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  I can code
                </p>
              </div>
              {/* Video — 2/3 */}
              <div className="flex flex-col gap-2" style={{ flex: "2 2 0%" }}>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black flex-1">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                  >
                    <source
                      src="/colorlab/colorlab-prototype.webm"
                      type="video/webm"
                    />
                    <source
                      src="/colorlab/colorlab-prototype.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <p
                  className="text-center text-sm text-muted-foreground"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Build a MVP
                </p>
              </div>
            </div>
          </div>

          {/* Turning Point */}
          <div
            className="bg-secondary/10 border-2 border-secondary/20 rounded-2xl p-8 mb-8"
            style={{ transform: "rotate(0.3deg)" }}
          >
            <p className="text-foreground leading-relaxed text-lg">
              <span className="font-bold text-orange-500">
                🎯 The Turning Point:
              </span>{" "}
              During the demo, I sampled the color of a dog and generated a
              real-time mixing recipe on my phone.{" "}
              <span className="text-orange-500 font-bold">
                This tangible functionality was more persuasive than any deck
              </span>
              .
            </p>
          </div>

          {/* Outcome highlight */}
          <div className="bg-primary/5 border-l-4 border-primary rounded-r-2xl p-6">
            <span
              className="inline-block text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full mb-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Outcome
            </span>
            <p className="text-lg text-foreground leading-relaxed font-bold">
              Through my MVP, stakeholders realized that{" "}
              <span className="text-primary">
                designing and developing an app wasn&apos;t as difficult as they
                had imagined.
              </span>{" "}
              <span className="text-primary">
                The project was officially greenlit at the company.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 4: USER FEEDBACK PROVED OUR DIRECTION
          ═══════════════════════════════════════════════════════ */}
      <section id="validation" className="w-full py-24 bg-card/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-primary mb-12 relative inline-block">
            User Feedback Proved Our Direction Was Right
            <div
              className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30"
              style={{ transform: "rotate(-1deg)" }}
            />
          </h2>

          {/* Concept Video Testing */}
          <div className="mb-12">
            <div className="flex items-start gap-3 mb-4">
              <Video className="w-7 h-7 text-primary shrink-0 mt-0.5" />
              <h3 className="text-primary">User Video Testing</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed ml-10 mb-4">
              Before prioritizing the project, we released a{" "}
              <span className="text-orange-500 font-bold">
                &apos;Let&apos;s Talk&apos; video
              </span>{" "}
              to{" "}
              <span className="text-orange-500 font-bold">
                test users&apos; feedback
              </span>{" "}
              for a color mixer.
            </p>
            <div className="ml-10">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/CuCBGLtvFPw"
                  title="KaleidoColorLab User Video"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <p
                className="mt-3 text-center text-sm text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Watch the Video (from 5:40)
              </p>
            </div>
          </div>

          {/* User's Positive Feedback heading */}
          <div className="mb-12">
            <div className="flex items-start gap-3 mb-4">
              <Trophy className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <h3 className="text-primary">Users&apos; Positive Feedback</h3>
            </div>
          </div>

          {/* User Positive Feedback — three comment images */}
          <div className="mb-12">
            <h4
              className="font-bold text-foreground mb-6 text-center"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <span className="text-orange-500 font-bold">
                Users are excited about the upcoming Color Mixer app
              </span>
            </h4>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                "/colorlab/colorlab-1.webp",
                "/colorlab/colorlab-2.webp",
                "/colorlab/colorlab-3.webp",
              ].map((src, i) => (
                <div
                  key={src}
                  className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-primary/10 bg-white"
                  onClick={() => setZoomedImage(src)}
                >
                  <Image
                    src={src}
                    alt={`User Comment ${i + 1}`}
                    width={600}
                    height={600}
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/85 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-4 h-4 text-foreground" />
                  </div>
                </div>
              ))}
            </div>
            <p
              className="mt-3 text-center text-sm text-muted-foreground"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Users&apos; Positive Feedback
            </p>
          </div>

          {/* Outcome */}
          <div className="bg-primary/5 border-l-4 border-primary rounded-r-2xl p-6">
            <span
              className="inline-block text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full mb-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Outcome
            </span>
            <p className="text-lg text-foreground leading-relaxed font-bold">
              <span className="text-primary font-bold">
                ColorLab was officially upgraded to the company&apos;s Top 1
                Priority project.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          STORY BANNER 2
          ═══════════════════════════════════════════════════════ */}
      <section className="w-full py-24 bg-primary/5 relative overflow-hidden">
        <div className="absolute top-8 right-12 text-8xl text-primary/10 transform -rotate-12">
          ★
        </div>
        <div className="absolute bottom-8 left-12 text-6xl text-secondary/10 transform rotate-12">
          {"♥︎"}
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            ref={storyRef2}
            className="text-primary font-bold leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
              lineHeight: 1.5,
            }}
          >
            {storyWords2.map((word, i) => (
              <span
                key={i}
                className="story-word inline-block mr-[0.3em]"
                style={{ opacity: 0 }}
              >
                {word}
              </span>
            ))}
          </div>
          <div
            className="w-32 h-1 bg-primary/30 mx-auto mt-8"
            style={{ transform: "rotate(-1deg)" }}
          />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 5: CORE SOLUTIONS (3 Features)
          ═══════════════════════════════════════════════════════ */}
      <section id="solutions" className="w-full py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {/* ─── Feature 1: Image Color Picker ─── */}
            <div className="flex flex-col items-center gap-12 md:flex-row">
              <div className="w-full md:w-1/2 flex flex-col items-center">
                <div className="mx-auto flex w-full max-w-70 sm:max-w-80 flex-col items-center">
                  <div className="w-full overflow-hidden rounded-3xl border-4 border-primary/20 shadow-xl bg-black">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full aspect-[9/16] object-cover"
                    >
                      <source
                        src="/colorlab/colorlab-picker.webm"
                        type="video/webm"
                      />
                      <source
                        src="/colorlab/colorlab-picker.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
                <p
                  className="mt-4 text-center text-sm text-muted-foreground"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Feature 1 · Image Color Picker
                </p>
              </div>
              <div className="w-full space-y-6 md:w-1/2">
                <h3 className="text-primary">
                  Feature 1 · Image Color Picker：From Pain Point to Profit
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-bold text-primary">Pain Point:</span>{" "}
                  Real-world inspiration doesn&apos;t map to our product.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-bold text-primary">Solution:</span>{" "}
                  Instant color extraction that recommends the closest matching
                  paint or a custom mixing recipe.
                </p>
              </div>
            </div>

            {/* ─── Feature 2: Digital Color Lab ─── */}
            <div className="flex flex-col items-center gap-12 md:flex-row-reverse">
              <div className="w-full md:w-1/2 flex flex-col items-center">
                <div className="mx-auto flex w-full max-w-70 sm:max-w-80 flex-col items-center">
                  <div className="w-full overflow-hidden rounded-3xl border-4 border-primary/20 shadow-xl bg-black">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full aspect-[9/16] object-cover"
                    >
                      <source
                        src="/colorlab/colorlab-colormix.webm"
                        type="video/webm"
                      />
                      <source
                        src="/colorlab/colorlab-colormix.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
                <p
                  className="mt-4 text-center text-sm text-muted-foreground"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Feature 2 · Digital Color Lab
                </p>
              </div>
              <div className="w-full space-y-6 md:w-1/2">
                <h3 className="text-primary">
                  Feature 2 · Digital Color Lab：From Fear to Fearless
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-bold text-primary">Pain Point:</span>{" "}
                  Fear of wasting expensive material on failed mixing attempts.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-bold text-primary">Solution:</span> A
                  digital sandbox to test ratios before physical execution.
                  Users combine colors, adjust ratios in real-time, and preview
                  results.
                </p>
              </div>
            </div>

            {/* ─── Feature 3: Data-Driven Dashboard ─── */}
            <div className="flex flex-col gap-8">
              <div className="w-full">
                <div className="flex w-full flex-col overflow-hidden rounded-xl border-2 border-primary/10 shadow-2xl bg-card">
                  <div className="flex h-8 w-full items-center gap-2 border-b-2 border-primary/10 bg-muted/50 px-3 shrink-0">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full aspect-video object-cover"
                  >
                    <source
                      src="/colorlab/colorlab-dashboard.webm"
                      type="video/webm"
                    />
                    <source
                      src="/colorlab/colorlab-dashboard.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <p
                  className="mt-4 text-center text-sm text-muted-foreground"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Feature 3 · Data-Driven Dashboard
                </p>
              </div>
              <div className="w-full space-y-6 text-center">
                <h3 className="text-primary">
                  Feature 3 · Data-Driven Dashboard：From Blind to Bold
                </h3>
                <p className="text-center text-muted-foreground leading-relaxed">
                  <span className="font-bold text-primary">Pain Point:</span>{" "}
                  Marketing lacked visibility into regional color trends.
                </p>
                <p className="text-center text-muted-foreground leading-relaxed">
                  <span className="font-bold text-primary">Solution:</span> An
                  admin dashboard tracking saved user color preferences by
                  region, enabling data-driven decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 6: ADAPTIVE PROBLEM SOLVING
          ═══════════════════════════════════════════════════════ */}
      <section
        id="adaptive"
        className="w-full py-24 bg-card/50 relative overflow-hidden"
      >
        <div className="absolute top-10 right-10 text-8xl text-primary/10 transform rotate-12">
          ★
        </div>
        <div className="absolute bottom-20 left-20 text-6xl text-secondary/10">
          {"♥︎"}
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-sm uppercase tracking-wider text-secondary mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              ── Most Memorable Feature Moment ──
            </p>
            <h2 className="text-primary mb-4 relative inline-block">
              When Tech Falls Short, Design Steps In
              <div
                className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30"
                style={{ transform: "rotate(-1deg)" }}
              />
            </h2>
            <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
              Turning Hardware Limits into &quot;Color Notes&quot;
            </p>
          </div>

          {/* Challenge → Pivot layout */}
          <div className="space-y-16">
            {/* The Challenge */}
            <div className="flex flex-col items-center gap-12 md:flex-row">
              <div className="w-full md:w-5/12 flex flex-col items-center">
                <div
                  className="relative w-full max-w-[220px] aspect-square rounded-2xl overflow-hidden cursor-zoom-in group"
                  onClick={() =>
                    setZoomedImage("/colorlab/colorlab-memorymoment.webp")
                  }
                >
                  <Image
                    src="/colorlab/colorlab-memorymoment.webp"
                    alt="Beta Tester Feedback"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/85 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-4 h-4 text-foreground" />
                  </div>
                </div>
                <p
                  className="mt-3 text-center text-sm text-muted-foreground"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  User skepticism
                </p>
              </div>
              <div className="w-full md:w-7/12">
                <div className="bg-card p-8 rounded-2xl shadow-md border-2 border-primary/10">
                  <h4 className="text-primary mb-4">
                    a hardware limitation we couldn&apos;t control.
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Video Testing reported that screen color variance made
                    digital matching 100% accuracy impossible.
                  </p>
                </div>
              </div>
            </div>

            {/* The UX Pivot（Feature 4） */}
            <div className="flex flex-col gap-8">
              <div className="w-full">
                <div className="flex w-full flex-col overflow-hidden rounded-xl border-2 border-primary/10 shadow-2xl bg-card">
                  <div className="flex h-8 w-full items-center gap-2 border-b-2 border-primary/10 bg-muted/50 px-3 shrink-0">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full aspect-video object-cover"
                  >
                    <source
                      src="/colorlab/colorlab-note.webm"
                      type="video/webm"
                    />
                    <source
                      src="/colorlab/colorlab-note.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <p
                  className="mt-4 text-center text-sm text-muted-foreground"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Feature 4 · Color Note
                </p>
              </div>
              <div className="w-full space-y-6 text-center">
                <h3 className="text-primary">
                  Feature 4 · Color Note：From Flaw to Feature
                </h3>
                <p className="text-center text-muted-foreground leading-relaxed">
                  I designed a personal color note feature that lets users
                  document real-world mixing ratios and techniques, turning a
                  screen accuracy limitation into a user personal color library.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          BETA USABILITY TEST
          ═══════════════════════════════════════════════════════ */}
      <section id="usability-test" className="w-full py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-sm uppercase tracking-wider text-secondary mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              ── Beta Usability Test ──
            </p>
            <h2 className="text-primary mb-4 relative inline-block">
              Real Users. Real Feedback.
              <div
                className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30"
                style={{ transform: "rotate(-1deg)" }}
              />
            </h2>
            <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto leading-relaxed">
              We invited real users to test the beta version and collected
              structured feedback to validate our design decisions.
            </p>
          </div>

          {/* Test images */}
          <div className="grid gap-6 mb-14">
            <div>
              <div
                className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-primary/10"
                onClick={() => setZoomedImage("/colorlab/test1.webp")}
              >
                <Image
                  src="/colorlab/test1.webp"
                  alt="Beta Usability Test 1"
                  width={900}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-3 right-3 bg-white/85 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <Maximize2 className="w-4 h-4 text-foreground" />
                </div>
              </div>
              <p
                className="mt-3 text-center text-sm text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Average rating (4.03)
              </p>
            </div>
            <div>
              <div
                className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-primary/10 bg-white"
                onClick={() => setZoomedImage("/colorlab/test2.webp")}
              >
                <Image
                  src="/colorlab/test2.webp"
                  alt="Beta Usability Test 2"
                  width={900}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-3 right-3 bg-white/85 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <Maximize2 className="w-4 h-4 text-foreground" />
                </div>
              </div>
              <p
                className="mt-3 text-center text-sm text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                77.3% of users rated the site easy to use
              </p>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
            {[
              { stat: "4,000+", label: "Participants", Icon: Users },
              {
                stat: "66",
                label: "Detailed Questionnaire Responses",
                Icon: FileText,
              },
              { stat: "4.03 / 5", label: "Average Rating", Icon: Star },
              {
                stat: "77.3%",
                label: "Found the Website Easy to Use",
                Icon: ThumbsUp,
              },
            ].map((item) => (
              <div key={item.label} className="p-6 text-center">
                <div className="flex justify-center mb-3">
                  <item.Icon className="w-6 h-6 text-muted-foreground" />
                </div>
                <div
                  className="text-4xl font-bold text-primary mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.stat}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Report button */}
          <div className="flex justify-center">
            <a
              href="/colorlab/Kaleido%20ColorLab%20Usability%20Test%20Analysis%20Report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-secondary transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              style={{ fontFamily: "var(--font-body)" }}
            >
              View research summary (desensitized)
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 7: REFLECTIONS
          ═══════════════════════════════════════════════════════ */}
      <section
        id="reflections"
        className="w-full py-24 bg-card/50 relative overflow-hidden"
      >
        <div className="absolute top-20 left-20 text-9xl text-secondary/10 transform rotate-12">
          ★
        </div>
        <div className="absolute bottom-10 right-10 text-6xl text-primary/10">
          {"♥︎"}
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary mb-4 relative inline-block">
              Reflections
              <div
                className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30"
                style={{ transform: "rotate(-1deg)" }}
              />
            </h2>
            <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
              The Hybrid Edge of a Design Engineer
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                Icon: Code2,
                title: "Coding Mindset",
                body: "Great designers aren't limited by tools. Code is my medium; AI is my efficiency multiplier.",
              },
              {
                Icon: Target,
                title: "User-Centered",
                body: "UX balances user needs with business viability. By uncovering real user needs, I created a new revenue engine.",
              },
              {
                Icon: BarChart2,
                title: "Business Acumen",
                body: "It's not just about executing requirements — it's about aligning with stakeholders to ensure we're always investing in the right direction.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card p-8 rounded-2xl shadow-md border-2 border-primary/10 transition-all hover:shadow-xl hover:-translate-y-2 text-center flex flex-col items-center"
              >
                <div className="mb-4">
                  <item.Icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-foreground mb-3 whitespace-nowrap">
                  {item.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
                <div className="mt-6 w-16 h-1 bg-primary/40" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          BOTTOM CTA
          ═══════════════════════════════════════════════════════ */}
      <section className="w-full py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-secondary/5" />
        <div className="absolute top-10 right-10 text-8xl text-primary/10 transform -rotate-12">
          ★
        </div>
        <div className="absolute bottom-10 left-10 text-6xl text-secondary/10 transform rotate-12">
          {"♥︎"}
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-sm uppercase tracking-wider text-secondary mb-6"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Contact me for the beta access password
          </p>
          <h2 className="text-primary mb-6">
            Not just a design, but a deployable business solution.
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            See how ColorLab bridges the gap between user inspiration and
            product purchase.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-card border-2 border-primary/30 text-primary px-10 py-5 rounded-lg hover:bg-accent transition-all transform hover:-translate-y-1"
              style={{
                fontFamily: "var(--font-body)",
              }}
            >
              Contact Me
              <Heart className="w-5 h-5" />
            </Link>
            <a
              href="https://gaahleri-color.cleme.store/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-5 rounded-lg hover:bg-secondary transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              style={{
                fontFamily: "var(--font-body)",
              }}
            >
              Explore ColorLab
            </a>
          </div>

          <svg
            className="w-48 h-6 mx-auto mt-10 text-primary/30"
            viewBox="0 0 200 24"
          >
            <path
              d="M0 12 Q25 2, 50 12 Q75 22, 100 12 Q125 2, 150 12 Q175 22, 200 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
      </section>
    </div>
  );
}
