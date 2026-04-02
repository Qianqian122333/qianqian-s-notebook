"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, Palette, Volume2 } from "lucide-react";

export default function Home() {
  const waveRef = useRef<HTMLHeadingElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    async function init() {
      try {
        const mod = await import("gsap");
        const gsap = mod.default || mod;

        if (waveRef.current) {
          const words = waveRef.current.querySelectorAll(".wave-word");

          // Word-by-word entrance, then stay
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
      } catch {
        // If GSAP fails, make words visible
        if (waveRef.current) {
          const words =
            waveRef.current.querySelectorAll<HTMLElement>(".wave-word");
          words.forEach((w) => (w.style.opacity = "1"));
        }
      }
    }

    init();
  }, []);

  const heroPart1 = ["Hi,", "I", "am"];
  const heroPart2 = ["A", "UX", "Designer", "and", "Front-end", "Developer."];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute top-20 left-10 w-32 h-32 border-4 border-primary rounded-full"
            style={{ transform: "rotate(15deg)" }}
          />
          <div
            className="absolute bottom-32 right-20 w-24 h-24 border-4 border-secondary"
            style={{ transform: "rotate(-12deg)" }}
          />
          <div className="absolute top-1/2 right-1/4 text-6xl text-primary/30">
            ★
          </div>
          <div className="absolute bottom-1/4 left-1/3 text-4xl text-secondary/30">
            ♥
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left text content */}
            <div className="space-y-6">
              <div className="inline-block">
                <div className="flex items-center gap-2 text-secondary mb-4">
                  <span
                    className="text-xl"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    ✨ Welcome to my notebook
                  </span>
                </div>
              </div>

              {/* Hero h1 – wave animation on all screen sizes */}
              <h1 ref={waveRef} className="text-primary relative block w-full">
                {heroPart1.map((word, i) => (
                  <span
                    key={`p1-${i}`}
                    className="wave-word inline-block mr-[0.3em]"
                    style={{ opacity: 0 }}
                  >
                    {word}
                  </span>
                ))}
                <button
                  type="button"
                  className="wave-word inline-flex items-center justify-center mx-1 cursor-pointer hover:text-secondary transition-colors"
                  style={{ opacity: 0, verticalAlign: "middle" }}
                  onClick={() => audioRef.current?.play()}
                  aria-label="Play pronunciation of Qianqian"
                >
                  <Volume2 className="w-6 h-6" />
                </button>
                <span
                  className="wave-word inline-block mr-[0.3em]"
                  style={{ opacity: 0 }}
                >
                  Qianqian.
                </span>
                {heroPart2.map((word, i) => (
                  <span
                    key={`p2-${i}`}
                    className="wave-word inline-block mr-[0.3em]"
                    style={{ opacity: 0 }}
                  >
                    {word}
                  </span>
                ))}
                <div
                  className="absolute -bottom-2 left-0 w-full h-2 bg-primary/20"
                  style={{
                    transform: "rotate(-1deg)",
                    clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 80%)",
                  }}
                />
              </h1>
              <audio ref={audioRef} src="/home/Qianqian.mp3" preload="auto" />

              <p className="text-xl text-muted-foreground leading-relaxed">
                3+ years in UX, expert in Figma, with skills in user research,
                SaaS/B2B, e‑commerce, and responsive design & development.
              </p>

              {/* Mobile hero image – between text and buttons */}
              <div className="block lg:hidden">
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
                  style={{ transform: "rotate(2deg)" }}
                >
                  <Image
                    src="/home/home-hero.webp"
                    alt="Qianqian Wei"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 border-4 border-white/30 rounded-2xl pointer-events-none" />
                </div>
                <div className="flex gap-3 justify-center mt-4"></div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-card border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-accent hover:-translate-y-1 hover:shadow-md transition-all"
                  style={{
                    fontFamily: "var(--font-body)",
                    transform: "rotate(1deg)",
                  }}
                >
                  Let&apos;s Chat
                  <Heart className="w-5 h-5" />
                </Link>

                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-secondary hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl"
                  style={{
                    fontFamily: "var(--font-body)",
                    transform: "rotate(-1deg)",
                  }}
                >
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="pt-8 flex items-center gap-3 text-muted-foreground">
                <div
                  className="w-16 h-0.5 bg-primary/40"
                  style={{ transform: "rotate(-2deg)" }}
                />
                <span style={{ fontFamily: "var(--font-body)" }}>
                  Scroll to explore
                </span>
              </div>
            </div>

            {/* Right – hero image (desktop only) */}
            <div className="relative hidden lg:block">
              <div
                className="relative cursor-pointer transition-transform duration-500 ease-out hover:rotate-2"
                style={{ transform: "rotate(2deg)" }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] max-w-[380px] ml-auto">
                  <Image
                    src="/home/home-hero.webp"
                    alt="Qianqian Wei"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 border-4 border-white/50 rounded-2xl pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary mb-4 relative inline-block">
              What I Do
              <Palette className="inline-block ml-3 text-secondary w-10 h-10" />
            </h2>
            <div
              className="w-32 h-1 bg-primary/40 mx-auto"
              style={{ transform: "rotate(-1deg)" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "User Research",
                description:
                  "Understanding user needs through interviews, surveys, and usability testing to inform design decisions.",
                icon: "🔍",
              },
              {
                title: "UX | UI Design",
                description:
                  "Creating beautiful, intuitive interfaces that delight users and solve real problems through user-centered design.",
                icon: "🎨",
              },
              {
                title: "Front-end / Full-stack Development",
                description:
                  "Building responsive, accessible web applications with modern frameworks and bringing designs to life with code.",
                icon: "💻",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border-2 border-primary/10"
                style={{
                  transform: `rotate(${index % 2 === 0 ? "-1deg" : "1deg"})`,
                }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div
                  className="mt-6 w-16 h-1 bg-primary/40"
                  style={{ transform: "rotate(-2deg)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="absolute top-10 right-10 text-8xl text-primary/10 transform -rotate-12">
          ★
        </div>
        <div className="absolute bottom-10 left-10 text-6xl text-secondary/10 transform rotate-12">
          ♥
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-primary mb-6">
            Let&apos;s Create Something Amazing Together!
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            I&apos;m always excited to collaborate on new projects and bring
            creative ideas to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-5 rounded-lg hover:bg-secondary transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            style={{
              fontFamily: "var(--font-body)",
              transform: "rotate(-1deg)",
            }}
          >
            Get In Touch
            <Heart className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
