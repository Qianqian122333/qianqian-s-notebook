"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Award, ArrowUpRight } from "lucide-react";

const experiences: {
  year: string;
  role: string;
  company: string;
  link: string;
  logo: string;
  description?: string;
}[] = [
  {
    year: "2025.08 - Present",
    role: "UX Developer",
    company: "Gaahleri",
    link: "https://gaahleri.com",
    logo: "/about/gaahleri.jpg",
    // description:
    //   "Leading UX design for the Gaahleri e-commerce platform, creating seamless shopping experiences.",
  },
  {
    year: "2025.07 - 2025.08",
    role: "UX Designer",
    company: "YoloLiv",
    link: "https://www.yololiv.com",
    logo: "/about/yololiv.jpeg",
    // description:
    //   "Conducted in-depth user research to uncover streaming creators' pain points and workflow optimization needs.",
  },
  {
    year: "2023.10 - 2025.06",
    role: "UX Specialist",
    company: "ATG",
    link: "https://www.atgtickets.com/",
    logo: "/about/atg.jpg",
    // description:
    //   "Designed web and product interfaces for UV printing solutions, improving user workflows and business conversion.",
  },
  {
    year: "2023.03 - 2023.10",
    role: "UX Designer",
    company: "Scope",
    link: "https://www.scope.org.uk/",
    logo: "/about/scope.jpeg",
    // description:
    //   "Designed intuitive travel platform experiences, focusing on user-centered mobile-first design.",
  },
];

const funFacts = [
  {
    image: "/about/hanfu.webp",
    title: "🏮 Hanfu Enthusiast",
    description: "I love traditional Chinese clothing and cultural heritage.",
  },
  {
    image: "/about/morning.webp",
    title: "☀️ Morning Person",
    description: "Early mornings are my most creative and productive time.",
  },
  {
    image: "/about/animal.webp",
    title: "🐾 Animal Lover",
    description: "I adore animals and enjoy spending time with furry friends.",
  },
  {
    image: "/about/nature.webp",
    title: "🌿 Nature Explorer",
    description: "Hiking and exploring nature fuels my creativity and calm.",
  },
];

export default function AboutPage() {
  const heroImageRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    async function init() {
      try {
        const mod = await import("gsap");
        const gsap = mod.default || mod;
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
      } catch {
        if (waveRef.current) {
          const words =
            waveRef.current.querySelectorAll<HTMLElement>(".wave-word");
          words.forEach((w) => (w.style.opacity = "1"));
        }
      }
    }
    init();
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
        <div
          className="absolute top-20 left-20 w-40 h-40 border-4 border-primary/20 rounded-full"
          style={{ transform: "rotate(20deg)" }}
        />
        <div className="absolute bottom-20 right-20 text-9xl text-secondary/10">
          ★
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left – hero image */}
            <div className="relative order-2 lg:order-1">
              <div
                ref={heroImageRef}
                className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] max-w-[380px] cursor-pointer transition-transform duration-500 ease-out hover:-rotate-2"
                style={{ transform: "rotate(-2deg)" }}
              >
                <Image
                  src="/about/about-hero.webp"
                  alt="Qianqian Wei – About"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 border-4 border-white/50 rounded-2xl pointer-events-none" />
              </div>
            </div>

            {/* Right – content */}
            <div className="space-y-6 order-1 lg:order-2">
              <h1 ref={waveRef} className="text-primary relative inline-block">
                {["Nice", "to", "meet", "you!"].map((word, i) => (
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

              <p className="text-lg text-foreground leading-relaxed">
                I live and breathe design—because to me, life itself is one
                grand design.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                By day, I&apos;m a UX designer and frontend developer, crafting
                digital experiences that feel effortless, thoughtful, and human.
                By heart, I&apos;m a hanfu (traditional Chinese clothing) model.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether it&apos;s a user flow or a flowing sleeve, I believe
                every detail tells a story. I design with empathy, curiosity,
                and a little bit of magic—because the things we love should feel
                as beautiful as they work.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {["User-Centered", "Business Acumen", "Code Iterate"].map(
                  (trait, index) => (
                    <div
                      key={index}
                      className="transition-transform duration-200 hover:-translate-y-1"
                    >
                      <div
                        className="bg-card border-2 border-primary/30 px-4 py-2 rounded-full shadow-sm"
                        style={{
                          transform: `rotate(${index % 2 === 0 ? "-2deg" : "2deg"})`,
                        }}
                      >
                        <span
                          className="text-primary"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {trait}
                        </span>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience / Journey Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary mb-4 relative inline-block">
              My Journey
              <Award className="inline-block ml-3 text-secondary w-10 h-10" />
            </h2>
            <div
              className="w-32 h-1 bg-primary/40 mx-auto"
              style={{ transform: "rotate(-1deg)" }}
            />
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative bg-card p-6 md:p-8 rounded-3xl shadow-xl border-4 border-primary/20 backdrop-blur-sm transition-all duration-500 ease-out hover:shadow-2xl ${
                  index % 2 === 0
                    ? "-rotate-1 hover:rotate-1"
                    : "rotate-1 hover:-rotate-1"
                }`}
              >
                {/* Cute Corner Tape */}
                <div className="absolute -top-3 -right-3 w-12 h-6 bg-secondary/30 transform rotate-45 shadow-sm" />

                {/* Fun Icon Marker with Company Logo */}
                <div className="absolute -left-8 top-6 w-16 h-16 bg-card rounded-full border-[3px] border-primary/20 shadow-xl overflow-hidden flex items-center justify-center transform transition-all group-hover:scale-110 group-hover:-rotate-3 z-10">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                <div className="pl-6">
                  {/* Time and Company Line */}
                  <div className="flex flex-wrap items-center gap-3 mb-3 border-b-2 border-dashed border-primary/10 pb-3">
                    <span
                      className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {exp.year}
                    </span>
                    <span className="text-muted-foreground/50 hidden sm:inline">
                      •
                    </span>
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:text-secondary font-bold transition-colors underline decoration-wavy decoration-primary/30 underline-offset-4"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {exp.company}
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Role */}
                  <h3
                    className="text-2xl text-foreground mb-2 mt-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {exp.role}
                  </h3>

                  {/* Details (if any in future) */}
                  {exp.description && (
                    <p className="text-muted-foreground leading-relaxed mt-3 text-sm md:text-base">
                      {exp.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="absolute top-10 right-10 text-8xl text-primary/10 transform rotate-12">
          ♥
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">Fun Facts About Me</h2>
            <div
              className="w-32 h-1 bg-secondary/40 mx-auto"
              style={{ transform: "rotate(1deg)" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {funFacts.map((fact, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl shadow-md overflow-hidden border-2 border-primary/10 transition-all hover:shadow-xl hover:-translate-y-2"
                style={{
                  transform: `rotate(${index % 2 === 0 ? "-2deg" : "2deg"})`,
                }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={fact.image}
                    alt={fact.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4
                    className="text-foreground mb-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {fact.title}
                  </h4>
                  <p
                    className="text-sm text-muted-foreground"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {fact.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
