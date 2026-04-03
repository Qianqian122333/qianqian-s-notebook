"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  User,
  Clock,
  Users,
  Maximize2,
  X,
  ClipboardList,
  HelpCircle,
  Search,
  FolderOpen,
  LayoutTemplate,
  Target,
  Wrench,
  Palette,
  Sparkles,
  Code2,
  Handshake,
  Flag,
  TrendingUp,
} from "lucide-react";

/* ─── Tech stack icons ─── */
const techStack = [
  { icon: "/figma.svg", label: "Figma" },
  { icon: "/html.svg", label: "HTML" },
  { icon: "/css.svg", label: "CSS" },
  { icon: "/javascript.svg", label: "JavaScript" },
  { icon: "/shopify.svg", label: "Shopify" },
];

/* ─── Story heading words ─── */
const storyWords = ["Marketing", "Wanted", "Everything."];

const storyWords2 = ["I", "Made", "Users", "Find", "What", "Matters."];

const storyWords3 = ["Design", "under", "technical", "constraints"];

const storyWords4 = ["Elevate", "the", "Customization", "Experience"];

export default function AventusAirbrushPage() {
  const waveRef = useRef<HTMLHeadingElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const storyRef2 = useRef<HTMLDivElement>(null);
  const storyRef3 = useRef<HTMLDivElement>(null);
  const storyRef4 = useRef<HTMLDivElement>(null);
  const brandVideoRef = useRef<HTMLVideoElement>(null);
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

        /* ─ Title wave animation ─ */
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

        /* ─ Story heading animation ─ */
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

        /* ─ Story heading 2 animation ─ */
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

        /* ─ Challenge 3 heading animation ─ */
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

        /* ─ Challenge 4 heading animation ─ */
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
          waveRef.current
            .querySelectorAll<HTMLElement>(".wave-word")
            .forEach((w) => (w.style.opacity = "1"));
        }
        [storyRef, storyRef2, storyRef3, storyRef4].forEach((ref) => {
          if (ref.current) {
            ref.current
              .querySelectorAll<HTMLElement>(".story-word")
              .forEach((w) => (w.style.opacity = "1"));
          }
        });
      }
    }

    init();
    if (brandVideoRef.current) {
      brandVideoRef.current.playbackRate = 0.5;
    }
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
          HERO SECTION
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

          {/* Category tags */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span
              className="text-sm text-secondary"
              style={{ fontFamily: "var(--font-body)" }}
            >
              UX Design · Front-end Development
            </span>
            <div className="w-8 h-0.5 bg-primary/40" />
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 ref={waveRef} className="text-primary relative inline-block">
              {["Aventus", "Airbrush"].map((word, i) => (
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

          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            Aventus Airbrush offers high-quality airbrush makeup systems for
            professionals and enthusiasts. The brand focuses on precision, ease
            of use, and modern aesthetics — bridging the gap between pro tools
            and at-home accessibility.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          OVERVIEW — Full-width hero + meta info
          ═══════════════════════════════════════════════════════ */}
      <section id="overview" className="w-full">
        {/* Full-width hero image */}
        <div className="relative w-full">
          <Image
            src="/aventus/aventus-hero.webp"
            alt="Aventus Airbrush Hero"
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
            I bridge the gap between conflict and delivery
          </p>

          {/* Role / Duration / Collaboration */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-16 text-center">
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
                Front-end Developer
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
                Oct 2025 – Nov 2025
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
                Marketing Team
              </p>
              <p
                className="text-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Product Team
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
              href="https://www.gaahleri.com/pages/ace-series-aventus-tailor-made"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-secondary transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Explore Aventus Airbrush
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          STORY BANNER — animated heading
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
            className="text-orange-500 font-bold leading-relaxed"
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
            ref={storyRef2}
            className="text-orange-500 font-bold leading-relaxed mt-4"
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
          CHALLENGE 1: Marketing IA Restructuring
          ═══════════════════════════════════════════════════════ */}
      <section id="challenge1" className="w-full py-24 bg-card/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-primary mb-4 relative inline-block">
            Marketing Wanted Everything.
            <div
              className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30"
              style={{ transform: "rotate(-1deg)" }}
            />
          </h2>

          {/* Task — plain text above market need image */}
          <div className="mb-6 mt-16">
            <div className="flex items-start gap-3 mb-3">
              <ClipboardList className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <h3 className="text-primary">Task</h3>
            </div>
          </div>

          {/* Market Need image */}
          <div className="mb-12">
            <Image
              src="/aventus/aventus-need.webp"
              alt="Marketing Team Needs"
              width={1200}
              height={675}
              className="w-full h-auto rounded-2xl"
            />
            <p className="mt-4 text-foreground leading-relaxed text-center">
              Design introduction pages and a purchase page for Aventus
              Airbrush.
            </p>
          </div>

          {/* Stakeholder's Needs */}
          <div className="mb-16">
            <div className="flex items-start gap-3 mb-6">
              <Flag className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <h3 className="text-primary">Marketing Team&apos;s Needs</h3>
            </div>

            {/* Stakeholder vs My Thinking */}
            <div className="grid gap-8 md:grid-cols-2">
              {/* Left: Marketing Team */}
              <div className="bg-card rounded-2xl border-2 border-primary/10 p-8 space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <p
                    className="font-bold text-foreground"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Marketing Team
                  </p>
                  <span
                    className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full border border-border"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Product-centric
                  </span>
                </div>
                <h4 className="text-foreground mb-4">
                  Detailed Product Promotion Website
                </h4>
                <ul className="space-y-3 list-disc list-inside text-foreground leading-relaxed">
                  <li>
                    <span className="font-bold">Their Thinking: </span> The more
                    product advantages we highlight, the stronger users&apos;
                    purchase intent will be.
                  </li>
                  <li>
                    <span className="font-bold">What They Want:</span> A website
                    that clearly presents all 11 selling points.
                  </li>
                </ul>
              </div>

              {/* Right: Me */}
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
                <h4 className="text-foreground mb-4">User Cognitive Load</h4>
                <ul className="space-y-3 list-disc list-inside text-foreground leading-relaxed">
                  <li>
                    <span className="font-bold text-orange-500">
                      My Question:
                    </span>{" "}
                    Information overload hides what&apos;s truly important.
                  </li>
                  <li>
                    <span className="font-bold text-orange-500">
                      What I Wanted to Know:
                    </span>{" "}
                    Who are our users, what do they prioritize, and where do we
                    stand out?
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* My Findings */}
          <div className="mb-16">
            <div className="flex items-start gap-3 mb-6">
              <Search className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <h3 className="text-primary">My Findings</h3>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 ml-0 mb-8">
              {/* Card 1: Pricing */}
              <div className="bg-card rounded-2xl border-2 border-primary/10 overflow-hidden flex flex-col items-center">
                <Image
                  src="/aventus/aventus-expensive.webp"
                  alt="Pricing Insight"
                  width={800}
                  height={450}
                  className="object-contain w-full bg-black/5"
                  style={{ background: "#f8fafc" }}
                />
                <div className="p-6 w-full text-center">
                  <h4 className="text-primary mb-2">Pricing Insight</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    At $291.49, priced significantly higher than our previous
                    $67.29 offering — placing it at the{" "}
                    <span className="text-orange-500 font-bold">
                      premium end of the market
                    </span>
                    .
                  </p>
                </div>
              </div>
              {/* Card 2: User Targeting */}
              <div className="bg-card rounded-2xl border-2 border-primary/10 overflow-hidden flex flex-col items-center">
                <Image
                  src="/aventus/aventus-explain.webp"
                  alt="User Targeting"
                  width={800}
                  height={450}
                  className="object-contain w-full bg-black/5"
                  style={{ background: "#f8fafc" }}
                />
                <div className="p-6 w-full text-center">
                  <h4 className="text-primary mb-2">Target Users</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Not for beginners. Experienced users already understand
                    material and performance differences —{" "}
                    <span className="text-orange-500 font-bold">
                      they don&apos;t need extensive explanation
                    </span>
                    .
                  </p>
                </div>
              </div>
              {/* Card 3: Core User Profile */}
              <div className="bg-card rounded-2xl border-2 border-primary/10 overflow-hidden flex flex-col items-center">
                <Image
                  src="/aventus/aventus-person.webp"
                  alt="Core User Profile"
                  width={800}
                  height={450}
                  className="object-contain w-full bg-black/5"
                  style={{ background: "#f8fafc" }}
                />
                <div className="p-6 w-full text-center">
                  <h4 className="text-primary mb-2">User Preference</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Deeply passionate model-making enthusiasts.{" "}
                    <span className="text-orange-500 font-bold">
                      They value hands-on craftsmanship, personalization, and
                      the freedom to design.
                    </span>
                  </p>
                </div>
              </div>
              {/* Card 4: Competitor Landscape */}
              <div className="bg-card rounded-2xl border-2 border-primary/10 overflow-hidden flex flex-col items-center">
                <Image
                  src="/aventus/aventus-color.webp"
                  alt="Competitor Landscape"
                  width={800}
                  height={450}
                  className="object-contain w-full bg-black/5"
                  style={{ background: "#f8fafc" }}
                />
                <div className="p-6 w-full text-center">
                  <h4 className="text-primary mb-2">Competitive Advantage</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Competitors emphasize quality, but our key differentiator is{" "}
                    <span className="text-orange-500 font-bold">
                      deep customization
                    </span>{" "}
                    —{" "}
                    <span className="text-orange-500 font-bold">
                      users can customize colors, add engravings, and design
                      their own tools
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border-l-4 border-primary rounded-r-2xl p-6">
              <span
                className="inline-block text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Design Strategy
              </span>
              <p className="text-lg text-foreground leading-relaxed font-bold">
                Prioritize{" "}
                <span className="text-orange-500">
                  showcasing our customization capabilities
                </span>{" "}
                as the core competitive advantage.
              </p>
            </div>
          </div>

          <h2 className="text-primary mb-12 relative inline-block mt-16">
            I Made Users Find What Matters.
            <div
              className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30"
              style={{ transform: "rotate(-1deg)" }}
            />
          </h2>

          {/* Sub-heading: I Restructured IA */}
          <div className="flex items-start gap-3 mb-6 mt-8">
            <FolderOpen className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <h3 className="text-primary m-0">
              Restructured IA for Scanability
            </h3>
          </div>

          {/* IA Restructure — image + text side by side */}
          <div className="flex flex-col items-center gap-8 md:flex-row mb-12">
            <div className="w-full md:w-1/2">
              <div
                className="relative rounded-2xl overflow-hidden cursor-zoom-in group border-2 border-primary/10"
                onClick={() => setZoomedImage("/aventus/aventus-ia.webp")}
              >
                <Image
                  src="/aventus/aventus-ia.webp"
                  alt="Restructured Information Architecture"
                  width={600}
                  height={400}
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
                Information Architecture
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <ul className="space-y-3 text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold shrink-0">•</span>
                  <span>
                    Restructured IA into{" "}
                    <span className="font-bold text-primary">
                      2 main pages + 6 sub-pages
                    </span>{" "}
                    after stakeholder alignment
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold shrink-0">•</span>
                  <span>
                    Dedicated a full page to{" "}
                    <span className="font-bold text-primary">
                      customization
                    </span>{" "}
                    as our core competitive advantage
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold shrink-0">•</span>
                  <span>
                    <span className="text-orange-500 font-bold">
                      Other benefits hidden behind a subpage
                    </span>{" "}
                    — only visible if users opt in
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold shrink-0">•</span>
                  <span>
                    Result:{" "}
                    <span className="text-orange-500 font-bold">
                      cleaner hierarchy, faster scanning, reduced cognitive load
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Outcome */}
          {/* Outcome 移动到General Page下方 */}

          {/* Sub-heading: 2 Main Pages Final UI */}
          <div className="flex items-start gap-3 mb-6">
            <LayoutTemplate className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <h3 className="text-primary m-0">Final Main Pages’ UI</h3>
          </div>

          {/* Tailor-Made Page — full width */}
          <div className="mb-12">
            <div className="rounded-2xl overflow-hidden border-2 border-primary/10 shadow-lg bg-black">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-video object-cover"
              >
                <source src="/aventus/aventus-tailor.webm" type="video/webm" />
                <source src="/aventus/aventus-tailor.mp4" type="video/mp4" />
              </video>
            </div>
            <p
              className="mt-3 text-center text-sm text-muted-foreground"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Tailor-Made Page
            </p>
            <div className="mt-3 flex flex-col items-center gap-4 text-center">
              <p
                className="text-muted-foreground leading-relaxed max-w-xl"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Dedicated page for personalization;{" "}
                <span className="text-orange-500 font-bold">
                  users explore full customization options
                </span>{" "}
                including colors, engravings, and component choices.
              </p>
              <a
                href="https://www.gaahleri.com/pages/ace-series-aventus-tailor-made"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-secondary transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                style={{ fontFamily: "var(--font-body)" }}
              >
                View Page
              </a>
            </div>
          </div>

          {/* General Page — full width */}
          <div className="mb-4">
            <div className="rounded-2xl overflow-hidden border-2 border-primary/10 shadow-lg bg-black">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-video object-cover"
              >
                <source src="/aventus/aventus-general.webm" type="video/webm" />
                <source src="/aventus/aventus-general.mp4" type="video/mp4" />
              </video>
            </div>
            <p
              className="mt-3 text-center text-sm text-muted-foreground"
              style={{ fontFamily: "var(--font-body)" }}
            >
              General Page
            </p>
            <div className="mt-3 flex flex-col items-center gap-4 text-center">
              <p
                className="text-muted-foreground leading-relaxed max-w-xl"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Consolidated{" "}
                <span className="text-orange-500 font-bold">
                  overview of all key product features
                </span>
                ; secondary details available only in the sub-page detail view.
              </p>
              <a
                href="https://www.gaahleri.com/pages/ace-series-aventus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-secondary transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                style={{ fontFamily: "var(--font-body)" }}
              >
                View Page
              </a>
            </div>
            {/* Outcome highlight */}
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-2xl p-6 mt-4">
              <span
                className="inline-block text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Outcome
              </span>
              <p className="text-lg text-foreground leading-relaxed font-bold">
                <span className="text-orange-500">
                  Highlighting core value while reducing cognitive load
                </span>
                <span className="text-foreground">:</span>{" "}
                <span className="text-foreground">
                  A dedicated page for personalization details; other features
                  consolidated into one page. Secondary info appears only in the
                  detail view.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          STORY BANNER 2 — Design under technical constraints
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
            ref={storyRef3}
            className="text-orange-500 font-bold leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
              lineHeight: 1.5,
            }}
          >
            {storyWords3.map((word, i) => (
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
          CHALLENGE 2: Plugin UX Redesign
          ═══════════════════════════════════════════════════════ */}
      <section id="challenge2" className="w-full py-24 bg-card/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Animated section heading */}
          <div
            ref={storyRef4}
            className="text-primary font-bold leading-relaxed mb-3"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
              lineHeight: 1.5,
            }}
          >
            {storyWords4.map((word, i) => (
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
            className="w-full h-1 bg-primary/30 mb-12"
            style={{ transform: "rotate(-1deg)" }}
          />

          {/* Shopify plugin section */}
          <div className="mt-10 mb-12">
            <div className="flex items-start gap-3 mb-4">
              <Target className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <h3 className="text-primary">
                Shopify plugin conflicted with our store
              </h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed ml-10">
              The stakeholders mandated a Shopify plugin for customization,
              ensuring that non-technical staff could handle future product
              updates independently. But...
            </p>
          </div>

          {/* UI Issue Image */}
          <div className="mb-12">
            <Image
              src="/aventus/aventus-uiissue.webp"
              alt="Shopify Plugin UI Issues"
              width={1200}
              height={675}
              className="w-full h-auto rounded-2xl"
            />
            <p
              className="mt-3 text-center text-sm text-muted-foreground"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Plugin&apos;s Problem
            </p>
            <div className="mt-4 ml-6 space-y-3">
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                <span className="font-bold text-primary">Problem 1:</span> Users
                can only see option images,{" "}
                <span className="text-orange-500 font-bold">
                  not option names
                </span>
                .
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                <span className="font-bold text-primary">Problem 2:</span> The
                Shopify plugin is{" "}
                <span className="text-orange-500 font-bold">
                  incompatible with our store&apos;s theme
                </span>{" "}
                template.
              </p>
            </div>
          </div>

          {/* CSS Fix — heading + text + image */}
          <div className="flex items-start gap-3 mb-6">
            <Wrench className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <h3 className="text-primary m-0">
              Redesigned &amp; Developed the Purchase UI to Improve User
              Experience
            </h3>
          </div>

          <div className="flex flex-col items-center gap-8 md:flex-row mb-8">
            <div className="w-full md:w-1/2">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I wrote CSS to resolve the Shopify plugin conflict.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div
                className="relative w-full rounded-2xl overflow-hidden cursor-zoom-in group border-2 border-primary/10"
                onClick={() => setZoomedImage("/aventus/aventus-mycss.webp")}
              >
                <Image
                  src="/aventus/aventus-mycss.webp"
                  alt="Custom CSS Solution"
                  width={600}
                  height={400}
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
                My CSS
              </p>
            </div>
          </div>
          {/* UI Update Video — full width */}
          <div className="mb-12">
            <div className="rounded-2xl overflow-hidden border-2 border-primary/10 shadow-lg bg-black">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-video object-cover"
              >
                <source
                  src="/aventus/aventus-uiupdate.webm"
                  type="video/webm"
                />
                <source src="/aventus/aventus-uiupdate.mp4" type="video/mp4" />
              </video>
            </div>
            <p
              className="mt-2 text-center text-sm text-muted-foreground"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Purchase Page UI
            </p>
            <p
              className="mt-4 text-lg text-muted-foreground leading-relaxed font-medium text-center"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The redesigned UI allows users to see both option images and names
              simultaneously.
            </p>
            <div className="mt-4 flex justify-center">
              <a
                href="https://www.gaahleri.com/products/pen-customization"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-secondary transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                style={{ fontFamily: "var(--font-body)" }}
              >
                View Page
              </a>
            </div>
          </div>

          {/* ── Brand Consistency ── */}
          <div className="flex items-start gap-3 mt-10 mb-6">
            <Palette className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <h3 className="text-primary m-0">
              The plugin conflicted with our brand&apos;s black theme.
            </h3>
          </div>

          {/* Two images side by side */}
          <div className="grid gap-6 md:grid-cols-2 mt-6 mb-6">
            <div>
              <div
                className="relative rounded-2xl overflow-hidden cursor-zoom-in group border-2 border-primary/10"
                onClick={() =>
                  setZoomedImage("/aventus/aventus-blacktheme.webp")
                }
              >
                <div className="relative w-full aspect-3/2 overflow-hidden">
                  <Image
                    src="/aventus/aventus-blacktheme.webp"
                    alt="Black Theme"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute bottom-3 right-3 bg-white/85 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <Maximize2 className="w-4 h-4 text-foreground" />
                </div>
              </div>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                Black Theme
              </p>
            </div>
            <div>
              <div
                className="relative rounded-2xl overflow-hidden cursor-zoom-in group border-2 border-primary/10 bg-white"
                onClick={() => setZoomedImage("/aventus/aventus-whitebg.webp")}
              >
                <div className="relative w-full aspect-3/2 overflow-hidden">
                  <Image
                    src="/aventus/aventus-whitebg.webp"
                    alt="White Background (Unchangeable)"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute bottom-3 right-3 bg-white/85 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <Maximize2 className="w-4 h-4 text-foreground" />
                </div>
              </div>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                White Background (Unchangeable)
              </p>
            </div>
          </div>

          {/* Brand Consistency heading + Video */}
          <div className="flex items-start gap-3 mb-6 mt-8">
            <Sparkles className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <h3 className="text-primary m-0">
              I Protected Brand Consistency Through Design
            </h3>
          </div>

          <div className="mb-4">
            <div className="rounded-2xl overflow-hidden border-2 border-primary/10 shadow-lg bg-black">
              <video
                ref={brandVideoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-video object-cover"
              >
                <source
                  src="/aventus/aventus-blackwhite.webm"
                  type="video/webm"
                />
                <source
                  src="/aventus/aventus-blackwhite.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Black-White Alternating Design
            </p>
          </div>

          <p className="text-base text-muted-foreground leading-relaxed mb-8 text-center">
            I designed a black-white alternating layout that frames the white
            plugin as a feature, not a bug. The purchase flow now feels seamless
            and brand-consistent.
          </p>

          {/* Outcome */}
          <div className="bg-primary/5 border-l-4 border-primary rounded-r-2xl p-6">
            <span
              className="inline-block text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full mb-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Outcome
            </span>
            <p className="text-lg text-foreground leading-relaxed font-bold">
              <span className="text-orange-500">
                Turning constraints into consistency.
              </span>{" "}
              Custom CSS reframes the white plugin as a deliberate accent within
              our black theme — seamless, intentional, and brand-aligned.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          THE ACHIEVEMENT
          ═══════════════════════════════════════════════════════ */}
      <section className="w-full py-24 bg-primary/5 relative overflow-hidden">
        <div className="absolute top-8 right-12 text-8xl text-primary/10 transform -rotate-12">
          ★
        </div>
        <div className="absolute bottom-8 left-12 text-6xl text-secondary/10 transform rotate-12">
          {"♥︎"}
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-sm uppercase tracking-wider text-secondary mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              ── Results ──
            </p>
            <h2 className="text-primary mb-4 relative inline-block">
              November Launch Outcome
              <div
                className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30"
                style={{ transform: "rotate(-1deg)" }}
              />
            </h2>
          </div>

          {/* Results card */}
          <div className="bg-card rounded-2xl border-2 border-primary/10 shadow-lg overflow-hidden mb-10">
            <Image
              src="/aventus/aventus-result.webp"
              alt="Gaahleri's November Sales Year-over-Year"
              width={1200}
              height={675}
              className="w-full h-auto block"
            />
            <div className="px-8 py-4 border-t border-primary/10 text-center">
              <p
                className="text-sm text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Increased revenue
              </p>
            </div>
            <div className="px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-primary/10">
              <div>
                <div
                  className="text-4xl font-bold text-primary"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  $362,302
                </div>
                <p
                  className="text-muted-foreground text-sm mt-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  First-month revenue · November launch
                </p>
              </div>
              <div className="sm:text-right">
                <p className="text-sm font-semibold text-foreground">
                  Gaahleri&apos;s November Sales Year-over-Year
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Key figures have been blurred for confidentiality.
                </p>
              </div>
            </div>
          </div>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto text-center">
            After the Aventus Airbrush website launched, Gaahleri&apos;s
            November sales saw significant year-over-year growth — validating
            that a well-structured, brand-consistent product page directly
            supports conversion.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          REFLECTIONS
          ═══════════════════════════════════════════════════════ */}
      <section className="w-full py-24 bg-card/50 relative overflow-hidden">
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
              Designing Where Design Meets Engineering
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                Icon: Handshake,
                title: "Stakeholder Navigation",
                body: "Good design isn't just about users — it's about aligning competing priorities. I turned an 11-point wish list into a focused, conversion-driven experience.",
              },
              {
                Icon: Code2,
                title: "Code as a Design Tool",
                body: "When the Shopify plugin broke our theme, writing custom CSS wasn't a workaround — it was the design decision that made the whole experience possible.",
              },
              {
                Icon: Target,
                title: "Constraints Breed Creativity",
                body: "Technical and business constraints forced smarter solutions. The black-white alternating layout turned a visual clash into a brand-consistent feature.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card p-8 rounded-2xl shadow-md border-2 border-primary/10 transition-all hover:shadow-xl hover:-translate-y-2 text-center flex flex-col items-center"
              >
                <div className="mb-4">
                  <item.Icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-foreground mb-3">{item.title}</h4>
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
          <h2 className="text-primary mb-6">
            Bridging Design, Production &amp; Marketing
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            See how Aventus Airbrush went from zero assets to a live flagship
            product page in just 4 weeks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-card border-2 border-primary/30 text-primary px-10 py-5 rounded-lg hover:bg-accent transition-all transform hover:-translate-y-1"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Contact Me
              <Heart className="w-5 h-5" />
            </Link>
            <a
              href="https://www.gaahleri.com/pages/ace-series-aventus-tailor-made"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-5 rounded-lg hover:bg-secondary transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Explore Aventus Airbrush
              <ArrowRight className="w-5 h-5" />
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
