import { Code, Lightbulb, Users, Award, BookOpen, Coffee } from "lucide-react";

const skills = [
  { name: "Figma", level: 95 },
  { name: "Adobe XD", level: 90 },
  { name: "Sketch", level: 85 },
  { name: "Prototyping", level: 92 },
  { name: "User Research", level: 88 },
  { name: "Wireframing", level: 93 },
];

const experiences = [
  {
    year: "2024 - Present",
    role: "Senior UX Designer",
    company: "Creative Studio",
    description:
      "Leading UX initiatives for enterprise clients, managing design systems, and mentoring junior designers.",
  },
  {
    year: "2022 - 2024",
    role: "UX/UI Designer",
    company: "Digital Agency",
    description:
      "Designed web and mobile applications for various clients across healthcare, finance, and e-commerce.",
  },
  {
    year: "2020 - 2022",
    role: "Junior UX Designer",
    company: "Tech Startup",
    description:
      "Conducted user research, created wireframes, and collaborated with developers to build user-centric products.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
        {/* 背景装饰 */}
        <div
          className="absolute top-20 left-20 w-40 h-40 border-4 border-primary/20 rounded-full"
          style={{ transform: "rotate(20deg)" }}
        />
        <div className="absolute bottom-20 right-20 text-9xl text-secondary/10">
          ★
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 左侧插画 */}
            <div className="relative order-2 lg:order-1">
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl bg-accent/60 aspect-[4/5] flex items-center justify-center"
                style={{ transform: "rotate(-2deg)" }}
              >
                <div className="text-center space-y-6 p-12">
                  <div className="text-9xl">👩‍🎨</div>
                  <p
                    className="text-xl text-primary"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Passionate about design
                  </p>
                  <svg
                    className="w-32 h-6 mx-auto text-primary/30"
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
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg transform rotate-12">
                <span style={{ fontFamily: "var(--font-body)" }}>
                  ✨ Creative
                </span>
              </div>
            </div>

            {/* 右侧内容 */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block">
                <div className="flex items-center gap-2 text-secondary mb-4">
                  <Coffee className="w-5 h-5" />
                  <span style={{ fontFamily: "var(--font-body)" }}>
                    About Me
                  </span>
                </div>
              </div>

              <h1 className="text-primary relative inline-block">
                Nice to meet you!
                <div
                  className="absolute -bottom-2 left-0 w-full h-2 bg-secondary/20"
                  style={{
                    transform: "rotate(-1deg)",
                    clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 80%)",
                  }}
                />
              </h1>

              <p className="text-lg text-foreground leading-relaxed">
                I&apos;m a passionate UX designer with 5+ years of experience
                creating user-centered digital experiences. My journey started
                with a love for art and psychology, which naturally led me to
                the world of UX design.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe great design is invisible – it just works. My approach
                combines empathy, data, and creativity to solve complex problems
                and create delightful experiences that users love.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  "User-Centered",
                  "Creative",
                  "Empathetic",
                  "Detail-Oriented",
                ].map((trait, index) => (
                  <div
                    key={index}
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary mb-4 relative inline-block">
              My Skills
              <Code className="inline-block ml-3 text-secondary w-10 h-10" />
            </h2>
            <div
              className="w-32 h-1 bg-primary/40 mx-auto"
              style={{ transform: "rotate(-1deg)" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span
                    className="text-lg text-foreground"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {skill.name}
                  </span>
                  <span
                    className="text-primary"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div
                  className="relative h-3 bg-accent rounded-full overflow-hidden"
                  style={{ transform: "rotate(-0.5deg)" }}
                >
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary mb-4 relative inline-block">
              What I Value
              <Lightbulb className="inline-block ml-3 text-secondary w-10 h-10" />
            </h2>
            <div
              className="w-32 h-1 bg-secondary/40 mx-auto"
              style={{ transform: "rotate(1deg)" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12 text-primary" />,
                title: "User Empathy",
                description:
                  "Understanding users deeply and designing with their needs at the forefront of every decision.",
              },
              {
                icon: <Lightbulb className="w-12 h-12 text-secondary" />,
                title: "Innovation",
                description:
                  "Pushing boundaries and exploring new ideas while staying grounded in user needs.",
              },
              {
                icon: <BookOpen className="w-12 h-12 text-primary" />,
                title: "Continuous Learning",
                description:
                  "Staying curious and always learning new tools, techniques, and industry trends.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border-2 border-primary/10 text-center"
                style={{
                  transform: `rotate(${index === 1 ? "0deg" : index % 2 === 0 ? "-1deg" : "1deg"})`,
                }}
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
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
                className="relative bg-card p-8 rounded-2xl shadow-md border-2 border-primary/10"
                style={{
                  transform: `rotate(${index % 2 === 0 ? "-0.5deg" : "0.5deg"})`,
                }}
              >
                {/* 时间线装饰 */}
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
                  <p
                    className="text-primary mb-3"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {exp.company}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
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
            {[
              { emoji: "☕", text: "Coffee enthusiast" },
              { emoji: "📚", text: "Bookworm" },
              { emoji: "🎨", text: "Sketch addict" },
              { emoji: "🌍", text: "Travel lover" },
            ].map((fact, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-md text-center border-2 border-primary/10"
                style={{
                  transform: `rotate(${index % 2 === 0 ? "-2deg" : "2deg"})`,
                }}
              >
                <div className="text-5xl mb-3">{fact.emoji}</div>
                <p
                  className="text-foreground"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {fact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
