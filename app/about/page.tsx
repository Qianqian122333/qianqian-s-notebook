"use client";

import { useRef } from "react";
import Image from "next/image";
import { Award, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    year: "2025.08 - Present",
    role: "UX Designer",
    company: "Gaahleri",
    link: "https://gaahleri.com",
    description:
      "Leading UX design for the Gaahleri e-commerce platform, creating seamless shopping experiences.",
  },
  {
    year: "2025.07 - 2025.08",
    role: "UX Researcher",
    company: "YoloLiv",
    link: "https://www.yololiv.com",
    description:
      "Conducted in-depth user research to uncover streaming creators' pain points and workflow optimization needs.",
  },
  {
    year: "2023.10 - 2025.06",
    role: "UX/UI Designer",
    company: "ATG - UV Printing & Packaging Solutions",
    link: "https://www.atguvprinter.com",
    description:
      "Designed web and product interfaces for UV printing solutions, improving user workflows and business conversion.",
  },
  {
    year: "2023.03 - 2023.10",
    role: "UX/UI Designer",
    company: "Scope",
    link: "https://scope.travel",
    description:
      "Designed intuitive travel platform experiences, focusing on user-centered mobile-first design.",
  },
];

const funFacts = [
  {
    image: "/about/hanfu.webp",
    title: "👘 Hanfu Enthusiast",
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
              <h1 className="text-primary relative inline-block">
                <span className="block">Nice to meet you!</span>
                <div
                  className="absolute -bottom-2 left-0 w-full h-2 bg-secondary/20"
                  style={{
                    transform: "rotate(-1deg)",
                    clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 80%)",
                  }}
                />
              </h1>

              <p className="text-lg text-foreground leading-relaxed">
                I&apos;m a passionate UX designer with experience creating
                user-centered digital experiences. My journey started with a
                love for art and psychology, which naturally led me to the world
                of UX design and front-end development.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe great design is invisible – it just works. My approach
                combines empathy, data, and creativity to solve complex problems
                and create delightful experiences that users love.
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
                className={`relative bg-card p-8 rounded-2xl shadow-md border-2 border-primary/10 transition-transform duration-500 ease-out ${index % 2 === 0 ? "-rotate-[0.5deg] hover:rotate-2" : "rotate-[0.5deg] hover:-rotate-2"}`}
              >
                <div className="absolute -left-4 top-8 w-8 h-8 bg-secondary rounded-full border-4 border-background shadow-md" />

                <div className="pl-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-secondary"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {exp.year}
                    </span>
                    <div className="w-12 h-0.5 bg-primary/40" />
                  </div>
                  <h3 className="text-foreground mb-1">{exp.role}</h3>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:text-secondary transition-colors underline underline-offset-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {exp.company}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    {exp.description}
                  </p>
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
