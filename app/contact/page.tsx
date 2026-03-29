"use client";

import { useState } from "react";
import { Mail, MapPin, Send, Heart, ExternalLink } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute top-20 left-20 text-9xl text-secondary/10 transform rotate-12">
          ★
        </div>
        <div
          className="absolute bottom-20 right-20 w-40 h-40 border-4 border-primary/20"
          style={{ transform: "rotate(-20deg)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 text-secondary justify-center">
              <Heart className="w-5 h-5" />
              <span style={{ fontFamily: "var(--font-body)" }}>
                Get In Touch
              </span>
            </div>
          </div>

          <h1 className="text-primary mb-6 relative inline-block">
            Let&apos;s Connect!
            <div
              className="absolute -bottom-2 left-0 w-full h-2 bg-secondary/20"
              style={{
                transform: "rotate(-1deg)",
                clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 80%)",
              }}
            />
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Want to collaborate? Or just want to say hi?
            I&apos;d love to hear from you! Drop me a message below.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 联系表单 */}
            <div className="relative">
              <div className="bg-card p-8 md:p-10 rounded-2xl shadow-xl border-2 border-primary/10 transform -rotate-1">
                <h2 className="text-primary mb-6">Send Me a Message</h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">✉️</div>
                    <h3
                      className="text-secondary mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Message Sent!
                    </h3>
                    <p
                      className="text-muted-foreground"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Thanks for reaching out! I&apos;ll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-foreground mb-2"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input-background border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors"
                        placeholder="What should I call you?"
                        style={{ fontFamily: "var(--font-body)" }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-foreground mb-2"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input-background border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors"
                        placeholder="your.email@example.com"
                        style={{ fontFamily: "var(--font-body)" }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-foreground mb-2"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input-background border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors"
                        placeholder="What's this about?"
                        style={{ fontFamily: "var(--font-body)" }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-foreground mb-2"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-input-background border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                        placeholder="Tell me more about your project or just say hi! 👋"
                        style={{ fontFamily: "var(--font-body)" }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-secondary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      style={{
                        fontFamily: "var(--font-body)",
                        transform: "rotate(-1deg)",
                      }}
                    >
                      Send Message
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                )}

                {/* 装饰元素 */}
                <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-6 py-3 rounded-full shadow-lg transform rotate-12">
                  <span style={{ fontFamily: "var(--font-body)" }}>✨</span>
                </div>
              </div>
            </div>

            {/* 联系信息 */}
            <div className="space-y-8">
              {/* 联系方式卡片 */}
              <div className="bg-card p-8 rounded-2xl shadow-md border-2 border-primary/10 transform rotate-1">
                <h3 className="text-primary mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-foreground mb-1">Email</h4>
                      <a
                        href="mailto:hello@qianqianwei.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        hello@qianqianwei.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-foreground mb-1">Location</h4>
                      <p className="text-muted-foreground">
                        Available Worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 社交媒体 */}
              <div className="bg-card p-8 rounded-2xl shadow-md border-2 border-primary/10 transform -rotate-1">
                <h3 className="text-primary mb-6">Follow Me</h3>

                <div className="flex flex-wrap gap-4">
                  {[
                    {
                      icon: <ExternalLink className="w-6 h-6" />,
                      name: "LinkedIn",
                      link: "#",
                    },
                    {
                      icon: <ExternalLink className="w-6 h-6" />,
                      name: "GitHub",
                      link: "#",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="group flex items-center gap-3 bg-accent hover:bg-primary text-foreground hover:text-primary-foreground px-6 py-3 rounded-full border-2 border-primary/20 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-1"
                      style={{
                        transform: `rotate(${index % 2 === 0 ? "-2deg" : "2deg"})`,
                      }}
                    >
                      <div className="group-hover:scale-110 transition-transform">
                        {social.icon}
                      </div>
                      <span style={{ fontFamily: "var(--font-body)" }}>
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* 工作状态 */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl border-2 border-primary/10">
                <h3 className="text-primary mb-4">Availability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m currently available for freelance projects and
                  collaborations. I typically respond within 24-48 hours.
                  Let&apos;s create something amazing together! ✨
                </p>
                <div className="mt-4 inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full">
                  <span style={{ fontFamily: "var(--font-body)" }}>
                    ● Open for opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4 relative inline-block">
              Frequently Asked Questions
              <div
                className="absolute -bottom-2 left-0 w-full h-2 bg-primary/20"
                style={{ transform: "rotate(-1deg)" }}
              />
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What's your typical project timeline?",
                answer:
                  "It depends on the project scope, but most projects take 2-8 weeks from research to final delivery.",
              },
              {
                question: "Do you work remotely?",
                answer:
                  "Yes! I work with clients worldwide and am comfortable with remote collaboration using tools like Zoom, Slack, and Figma.",
              },
              {
                question: "What's your design process?",
                answer:
                  "I follow a user-centered design process: Research → Ideate → Design → Test → Iterate. Each project is tailored to specific needs.",
              },
              {
                question: "Do you offer revisions?",
                answer:
                  "Absolutely! I include 2-3 rounds of revisions in my projects to ensure you're completely satisfied with the final design.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-sm border-2 border-primary/10"
                style={{
                  transform: `rotate(${index % 2 === 0 ? "-0.5deg" : "0.5deg"})`,
                }}
              >
                <h4 className="text-foreground mb-2">{faq.question}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="absolute bottom-10 right-10 text-8xl text-primary/10 transform -rotate-12">
          ♥
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card p-4 rounded-2xl shadow-xl border-2 border-primary/10 transform rotate-1">
            <div className="bg-accent rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3
                  className="text-primary mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Working Remotely
                </h3>
                <p
                  className="text-muted-foreground"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Available worldwide for collaboration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
