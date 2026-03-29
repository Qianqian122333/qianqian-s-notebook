"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

export function IntroOverlay({ onEnter }: { onEnter: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const notebookRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const sparkleRef = useRef<HTMLParagraphElement>(null);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    async function init() {
      try {
        const mod = await import("gsap");
        const gsap = mod.default || mod;

        // Sparkle/twinkle animation
        if (sparkleRef.current) {
          gsap.to(sparkleRef.current, {
            opacity: 0.4,
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }

        // Entrance animation then float
        const tl = gsap.timeline();

        if (notebookRef.current) {
          tl.fromTo(
            notebookRef.current,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
          );
        }

        if (textRef.current) {
          tl.fromTo(
            textRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
            "-=0.3",
          );
        }

        // Float animation (start after entrance)
        tl.call(() => {
          if (notebookRef.current) {
            gsap.to(notebookRef.current, {
              y: -8,
              duration: 2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          }
        });
      } catch {
        // If GSAP fails, make elements visible directly
        if (notebookRef.current) notebookRef.current.style.opacity = "1";
        if (textRef.current) textRef.current.style.opacity = "1";
      }
    }

    init();
  }, []);

  const handleClick = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);

    import("gsap")
      .then((mod) => {
        const gsap = mod.default || mod;
        const tl = gsap.timeline({ onComplete: onEnter });

        // Book-flip: rotate around the left edge like opening a book cover
        if (notebookRef.current) {
          notebookRef.current.style.transformOrigin = "left center";
        }

        tl.to(notebookRef.current, {
          rotateY: -180,
          duration: 0.8,
          ease: "power2.inOut",
        })
          .to(textRef.current, { opacity: 0, y: 20, duration: 0.3 }, "-=0.5")
          .to(overlayRef.current, {
            opacity: 0,
            duration: 0.4,
            ease: "power2.inOut",
          });
      })
      .catch(() => {
        onEnter();
      });
  }, [isExiting, onEnter]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      style={{ perspective: "1200px" }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl text-primary/10">
          ★
        </div>
        <div className="absolute bottom-20 right-16 text-5xl text-secondary/10">
          ♥
        </div>
        <div
          className="absolute top-1/4 right-10 w-20 h-20 border-3 border-primary/10 rounded-full"
          style={{ transform: "rotate(15deg)" }}
        />
        <div
          className="absolute bottom-1/4 left-16 w-16 h-16 border-3 border-secondary/10"
          style={{ transform: "rotate(-12deg)" }}
        />
      </div>

      {/* Notebook image – start invisible, GSAP animates in */}
      <div
        ref={notebookRef}
        className="cursor-pointer mb-8 transition-transform duration-500 ease-out hover:rotate-2"
        onClick={handleClick}
        style={{ transformStyle: "preserve-3d", opacity: 0 }}
      >
        <Image
          src="/note.webp"
          alt="Qianqian's Notebook"
          width={400}
          height={520}
          priority
          style={{ width: "min(400px, 90vw)", height: "auto" }}
        />
      </div>

      {/* Text – start invisible, GSAP animates in */}
      <div
        ref={textRef}
        className="text-center px-4 max-w-lg"
        style={{ opacity: 0 }}
      >
        <h2
          className="text-foreground mb-3"
          style={{ fontFamily: "var(--font-body)" }}
        >
          You discovered Qianqian&apos;s notebook! 🥺💖
        </h2>
        <p
          ref={sparkleRef}
          className="text-lg text-primary"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Click the notebook to discover her secrets ~ ✨
        </p>
      </div>
    </div>
  );
}
