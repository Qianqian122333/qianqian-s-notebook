import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative">
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
        <div className="absolute top-20 right-20 text-9xl text-primary/10 transform -rotate-12">
          ★
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <span
              className="text-sm text-secondary"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {project.categories.join(" · ")}
            </span>
            <div className="w-8 h-0.5 bg-primary/40" />
          </div>

          <h1 className="text-primary mb-6 relative inline-block">
            {project.title}
            <div
              className="absolute -bottom-2 left-0 w-full h-2 bg-secondary/20"
              style={{
                transform: "rotate(-1deg)",
                clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 80%)",
              }}
            />
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm bg-accent text-primary px-4 py-2 rounded-full border border-primary/20"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="bg-card p-16 rounded-2xl shadow-md border-2 border-primary/10"
            style={{ transform: "rotate(-0.5deg)" }}
          >
            <div className="text-6xl mb-6">🚧</div>
            <h2 className="text-primary mb-4">Case Study Coming Soon</h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
              I&apos;m currently writing up the detailed case study for this
              project. Check back soon for the full story!
            </p>
            <svg
              className="w-48 h-6 mx-auto mt-6 text-primary/30"
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
        </div>
      </section>
    </div>
  );
}
