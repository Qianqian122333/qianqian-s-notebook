"use client";

import { useState, useEffect } from "react";
import { IntroOverlay } from "@/components/intro-overlay";
import { Navbar } from "@/components/navbar";
import { NotebookHoles } from "@/components/notebook-holes";
import { Footer } from "@/components/footer";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);
  const [introReady, setIntroReady] = useState(false);

  useEffect(() => {
    // Check if user has already seen the intro this session
    const seen = sessionStorage.getItem("intro-seen");
    if (seen) {
      setShowIntro(false);
    }
    setIntroReady(true);
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem("intro-seen", "1");
    setShowIntro(false);
  };

  if (!introReady) return null;

  return (
    <>
      {showIntro && <IntroOverlay onEnter={handleEnter} />}
      {!showIntro && (
        <div>
          <Navbar />
          <NotebookHoles />
          <main className="flex-1 pl-8 md:pl-12">{children}</main>
          <Footer />
        </div>
      )}
    </>
  );
}
