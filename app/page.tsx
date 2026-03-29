import Link from "next/link";
import { ArrowRight, Sparkles, Heart, Palette } from "lucide-react";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* 背景装饰 */}
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 左侧文字内容 */}
            <div className="space-y-6">
              <div className="inline-block">
                <div className="flex items-center gap-2 text-secondary mb-4">
                  <Sparkles className="w-5 h-5" />
                  <span style={{ fontFamily: "var(--font-body)" }}>
                    Welcome to my world
                  </span>
                </div>
              </div>

              <h1 className="text-primary relative inline-block">
                Hey, I&apos;m a UX Designer!
                <div
                  className="absolute -bottom-2 left-0 w-full h-2 bg-primary/20"
                  style={{
                    transform: "rotate(-1deg)",
                    clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 80%)",
                  }}
                />
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                I create delightful digital experiences that put users first.
                Through empathy, research, and creative problem-solving, I
                transform complex challenges into intuitive designs.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-secondary transition-all shadow-lg hover:shadow-xl"
                  style={{
                    fontFamily: "var(--font-body)",
                    transform: "rotate(-1deg)",
                  }}
                >
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-card border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-accent transition-all"
                  style={{
                    fontFamily: "var(--font-body)",
                    transform: "rotate(1deg)",
                  }}
                >
                  Let&apos;s Chat
                  <Heart className="w-5 h-5" />
                </Link>
              </div>

              {/* 手绘箭头装饰 */}
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

            {/* 右侧插画装饰 */}
            <div className="relative hidden lg:block">
              <div className="relative">
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl bg-accent/50 aspect-square flex items-center justify-center"
                  style={{ transform: "rotate(2deg)" }}
                >
                  <div className="text-center space-y-4 p-12">
                    <div className="text-8xl">🎨</div>
                    <p
                      className="text-2xl text-primary"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Design with Heart
                    </p>
                    {/* 手绘波浪装饰 */}
                    <svg
                      className="w-48 h-6 mx-auto text-primary/30"
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

                  <div className="absolute inset-0 border-4 border-white/50 rounded-2xl pointer-events-none" />
                </div>

                {/* 装饰标签 */}
                <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-6 py-3 rounded-full shadow-lg transform rotate-12">
                  <span style={{ fontFamily: "var(--font-body)" }}>UX/UI</span>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg transform -rotate-6">
                  <span style={{ fontFamily: "var(--font-body)" }}>
                    Designer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Intro Section */}
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
                title: "Interface Design",
                description:
                  "Creating beautiful, intuitive interfaces that delight users and solve real problems.",
                icon: "🎨",
              },
              {
                title: "Prototyping",
                description:
                  "Building interactive prototypes to validate ideas and iterate quickly based on feedback.",
                icon: "✨",
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
