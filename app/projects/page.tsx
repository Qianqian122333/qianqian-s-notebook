"use client";

import { useState, useRef, useEffect } from "react";
import { Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

function ImageWithFallback({
  src,
  alt,
  fallbackEmoji,
}: {
  src: string;
  alt: string;
  fallbackEmoji: string;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-accent/40">
        <div className="text-center p-6">
          <div className="text-6xl mb-3">{fallbackEmoji}</div>
          <p
            className="text-primary text-lg"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {alt}
          </p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      onError={() => setError(true)}
    />
  );
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
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

  const categories = [
    "All",
    "UX Design",
    "Front-end Development",
    "Full-Stack Development",
    "User Research",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(selectedCategory),
        );

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute top-20 right-20 text-9xl text-primary/10 transform -rotate-12">
          ★
        </div>
        <div
          className="absolute bottom-10 left-10 w-32 h-32 border-4 border-secondary/20 rounded-full"
          style={{ transform: "rotate(-15deg)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 ref={waveRef} className="text-primary mb-6 relative inline-block">
            {["My", "Projects"].map((word, i) => (
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

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of projects where I&apos;ve helped create meaningful
            digital experiences through research, design, and collaboration.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-card/50 border-b-2 border-primary/10 sticky top-0 z-40 lg:static">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer px-6 py-3 rounded-full transition-colors shadow-sm ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card border-2 border-primary/30 text-foreground hover:bg-accent"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-primary/10 transform hover:-translate-y-2 block"
                style={{
                  transform: `rotate(${index % 3 === 1 ? "0deg" : index % 2 === 0 ? "-1deg" : "1deg"})`,
                }}
              >
                {/* Project Cover */}
                <div className="relative overflow-hidden aspect-video">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    fallbackEmoji={
                      project.categories.includes("UX Design")
                        ? "🎨"
                        : project.categories.includes("User Research")
                          ? "🔍"
                          : "💻"
                    }
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full shadow-lg transform rotate-6">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-current" />
                        <span style={{ fontFamily: "var(--font-body)" }}>
                          Featured
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* 项目信息 */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-sm text-secondary"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {project.categories.join(" · ")}
                    </span>
                    <div className="w-8 h-0.5 bg-primary/40" />
                  </div>

                  <h3 className="text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* 标签 */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-accent text-primary px-3 py-1 rounded-full border border-primary/20"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p
                className="text-2xl text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                No projects found in this category... yet! 🚀
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="absolute top-10 right-10 text-8xl text-secondary/10 transform rotate-12">
          ♥
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-primary mb-6">Like What You See?</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Let&apos;s work together to create something amazing for your users!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-5 rounded-lg hover:bg-secondary transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            style={{
              fontFamily: "var(--font-body)",
              transform: "rotate(-1deg)",
            }}
          >
            Start a Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
