"use client";

import { useState } from "react";
import { Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "UX Design", "User Research"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 text-secondary justify-center">
              <Star className="w-5 h-5" />
              <span style={{ fontFamily: "var(--font-body)" }}>Portfolio</span>
            </div>
          </div>

          <h1 className="text-primary mb-6 relative inline-block">
            My Projects
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
      <section className="py-12 bg-card/50 sticky top-16 z-10 backdrop-blur-sm border-b-2 border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all shadow-sm ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "bg-card border-2 border-primary/30 text-foreground hover:bg-accent"
                }`}
                style={{
                  fontFamily: "var(--font-body)",
                  transform:
                    selectedCategory === category
                      ? "rotate(-1deg)"
                      : "rotate(0deg)",
                }}
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
                {/* 项目封面 */}
                <div className="relative overflow-hidden aspect-video bg-accent/40 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-6xl mb-3">
                      {project.category === "UX Design" ? "🎨" : "🔍"}
                    </div>
                    <p
                      className="text-primary text-lg"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {project.title}
                    </p>
                  </div>
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
                      {project.category}
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

      {/* Design Process Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary mb-4 relative inline-block">
              My Design Process
              <div
                className="absolute -bottom-2 left-0 w-full h-2 bg-primary/20"
                style={{ transform: "rotate(-1deg)" }}
              />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Research",
                description:
                  "Understanding users, competitors, and the problem space.",
                emoji: "🔍",
              },
              {
                number: "02",
                title: "Ideate",
                description:
                  "Brainstorming solutions and sketching initial concepts.",
                emoji: "💡",
              },
              {
                number: "03",
                title: "Design",
                description:
                  "Creating high-fidelity designs and interactive prototypes.",
                emoji: "🎨",
              },
              {
                number: "04",
                title: "Test",
                description:
                  "Validating designs through user testing and iteration.",
                emoji: "✅",
              },
            ].map((step, index) => (
              <div key={index} className="relative text-center">
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-primary/30 -z-10">
                    <ArrowRight className="absolute right-0 -top-2 w-5 h-5 text-primary/50" />
                  </div>
                )}

                <div
                  className="bg-card p-8 rounded-2xl shadow-md border-2 border-primary/10 hover:shadow-xl transition-all"
                  style={{
                    transform: `rotate(${index % 2 === 0 ? "-1deg" : "1deg"})`,
                  }}
                >
                  <div className="text-6xl mb-4">{step.emoji}</div>
                  <div
                    className="text-4xl text-primary mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {step.number}
                  </div>
                  <h4 className="text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
