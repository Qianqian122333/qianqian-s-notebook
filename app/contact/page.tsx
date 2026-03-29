"use client";

import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        setSending(false);
        return;
      }

      setSubmitted(true);
      setSending(false);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 4000);
    } catch {
      setError("Network error. Please try again.");
      setSending(false);
    }
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
        <div className="absolute top-20 left-20 text-9xl text-secondary/10 transform rotate-12">
          ★
        </div>
        <div
          className="absolute bottom-20 right-20 w-40 h-40 border-4 border-primary/20"
          style={{ transform: "rotate(-20deg)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-primary mb-6 relative inline-block">
            <span className="block">Let&apos;s Connect!</span>
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
            {/* Contact Form */}
            <div className="relative">
              <div className="bg-card p-8 md:p-10 rounded-2xl shadow-xl border-2 border-primary/10 transform -rotate-1 transition-transform duration-500 ease-out hover:rotate-2">
                <h2 className="text-primary mb-6">Send Me a Message</h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">✉️</div>
                    <h3
                      className="text-secondary mb-2"
                      style={{ fontFamily: "var(--font-body)" }}
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
                    {error && (
                      <div className="bg-red-50 border-2 border-red-200 text-red-700 p-3 rounded-lg text-sm">
                        {error}
                      </div>
                    )}

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
                      disabled={sending}
                      className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-secondary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-60"
                      style={{
                        fontFamily: "var(--font-body)",
                        transform: "rotate(-1deg)",
                      }}
                    >
                      {sending ? "Sending..." : "Send Message"}
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-card p-8 rounded-2xl shadow-md border-2 border-primary/10 transform rotate-1 transition-transform duration-500 ease-out hover:-rotate-2">
                <h3 className="text-primary mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-foreground mb-1">Email</h4>
                      <a
                        href="mailto:qianqianwei112233@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        qianqianwei112233@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-foreground mb-1">LinkedIn</h4>
                      <a
                        href="https://www.linkedin.com/in/qianqianwei112233/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        qianqianwei112233
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-foreground mb-1">GitHub</h4>
                      <a
                        href="https://github.com/Qianqian122333"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Qianqian122333
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
                        Netherlands (willing to relocate)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl border-2 border-primary/10 transition-transform duration-500 ease-out hover:rotate-2">
                <h3 className="text-primary mb-4">Availability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m currently available for full-time opportunities and
                  collaborations. I typically respond within 24-48 hours.
                  Let&apos;s create something amazing together! ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
