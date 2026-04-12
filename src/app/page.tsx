"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";

/* ═══════════════════════════════════════
   HOME PAGE — IonGuard Pro
   ═══════════════════════════════════════ */

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <Manifesto />
      <TripleCrown />
      <RiskSolution />
      <SolutionShowcase />
      <AuthoritySpecs />
      <CTASection />
    </>
  );
}

/* ─────────────────────────────────────
   1. IMMERSIVE VIDEO HERO
   ───────────────────────────────────── */

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // Attempt to explicitly play the video directly on mount as a fallback for browsers that block autoPlay attribute
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[50vh] md:h-screen overflow-hidden bg-surface-container-lowest"
    >
      {/* Video */}
      <video
        ref={videoRef}
        src="/video/Lithium_batteries_Fire.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-contain md:object-cover"
      />

      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-surface to-transparent z-10" />

      {/* Scroll indicator */}

    </section>
  );
}

/* ─────────────────────────────────────
   2. MANIFESTO
   ───────────────────────────────────── */

function Manifesto() {
  return (
    <section className="relative bg-surface py-1 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection direction="up" delay={0.1}>
          <span className="font-label uppercase tracking-[0.3em] text-primary-container mb-6 block text-xs">
            Architectural Kinetic Series
          </span>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.2}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.85] mb-8 font-headline">
            Power,
            <br />
            <span className="text-primary-container">secured.</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.35}>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-xl mb-12 font-light leading-relaxed">
            Industrial-grade safety. Architectural elegance. The definitive
            smart charging cabinet.
          </p>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.5}>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="metallic-shine text-on-primary font-black uppercase tracking-wider text-sm px-10 py-5 shadow-2xl hover:shadow-primary-container/20 transition-all duration-300 active:scale-[0.97] inline-block"
            >
              Explore IonGuard Pro
            </Link>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────
   3. TRIPLE CROWN (Value Props)
   ───────────────────────────────────── */

const valueProps = [
  {
    icon: "shield_with_heart",
    title: "Absolute containment",
    body: "Explosion-proof cabinet with automatic aerosol fire suppression. High temperature alarm and automatic power-off for total peace of mind.",
    bg: "bg-surface-container-low",
    hoverBg: "hover:bg-surface-container-high",
  },
  {
    icon: "query_stats",
    title: "Intelligent charging",
    body: "Real-time temperature monitoring. Timed charging with automatic power-off when fully charged. Intelligent charging management via mobile and PC.",
    bg: "bg-surface-container-high",
    hoverBg: "",
  },
  {
    icon: "architecture",
    title: "Engineered to belong",
    body: "Customized production for different site conditions. Removable and adjustable shelves. Adaptable to different brands and types of batteries.",
    bg: "bg-surface-container-low",
    hoverBg: "hover:bg-surface-container-high",
  },
];

function TripleCrown() {
  return (
    <section className="py-5 px-6 md:px-8 bg-surface">
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-1 max-w-7xl mx-auto">
        {valueProps.map((prop) => (
          <StaggerItem key={prop.title}>
            <div
              className={`${prop.bg} ${prop.hoverBg} p-10 md:p-12 transition-colors duration-500 min-h-[250px] md:min-h-[250px] flex flex-col justify-between group`}
            >
              <div>
                <span
                  className="material-symbols-outlined text-primary-container text-8xl mb-4 block group-hover:scale-110 transition-transform duration-300"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {prop.icon}
                </span>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-2 font-headline">
                  {prop.title}
                </h3>
              </div>
              <p className="text-on-surface-variant font-body leading-relaxed opacity-80">
                {prop.body}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

/* ─────────────────────────────────────
   4. RISK & SOLUTION
   ───────────────────────────────────── */

function RiskSolution() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2">
      {/* Threat Side */}
      <AnimatedSection direction="left" className="h-full">
        <div className="bg-neutral-900 p-12 md:p-20 lg:p-32 flex flex-col justify-center min-h-[100px]">
          <span className="font-label text-error tracking-[0.2em] uppercase text-xs mb-6">
            Threat Matrix
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-none font-headline">
            The hidden risk of modern energy
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
            Lithium-ion batteries power the future. Unprotected, they pose
            catastrophic thermal risks. Most enclosures are reactive; IonGuard
            Pro is preventative.
          </p>
        </div>
      </AnimatedSection>

      {/* Solution Side */}
      <AnimatedSection direction="right" className="h-full">
        <motion.div
          style={{ y }}
          className="bg-primary-container text-on-primary p-12 md:p-20 lg:p-32 flex flex-col justify-center relative overflow-hidden min-h-[100px]"
        >
          {/* Background Icon */}
          <div className="absolute -right-20 -bottom-20 opacity-10">
            <span
              className="material-symbols-outlined text-[20rem] md:text-[30rem]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified_user
            </span>
          </div>

          <span className="font-label text-on-primary tracking-[0.2em] uppercase text-xs mb-6 relative z-10">
            The Solution
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-none font-headline relative z-10">
            The IonGuard shield
          </h2>
          <p className="text-on-primary font-bold text-lg leading-relaxed max-w-md mb-8 relative z-10">
            Explosion-proof cabinet and lock. Leakage and overload protection.
            Automatic aerosol fire suppression. Real-time temperature monitoring. Your assets, secured.
          </p>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest relative z-10">
            <span className="w-12 h-[1px] bg-on-primary" />
            <span>ISO9001 · ISO14001 · ISO45001 Certified</span>
          </div>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}

/* ─────────────────────────────────────
   5. SOLUTION SHOWCASE (Interactive Tabs)
   ───────────────────────────────────── */

const solutions = [
  {
    id: "gen1",
    label: "Generation 1",
    variant: "Smart Generation One",
    title: "Essential Security",
    description:
      "Explosion-proof cabinet with leakage and overload protection. Includes automatic ventilation and adjustable shelves for foundational safety.",
    specs: [
      { label: "Capacity", value: "4-15 gal" },
      { label: "Lock System", value: "3-point linkage double lock" },
    ],
    image: "/images/JAH-010115.png",
  },
  {
    id: "gen2",
    label: "Generation 2",
    variant: "Smart Second Generation",
    title: "Active Suppression",
    description:
      "Advanced protection featuring real-time temperature monitoring, automatic high temperature power-off, and automatic aerosol fire suppression.",
    specs: [
      { label: "Capacity", value: "15-110 gal" },
      { label: "Suppression", value: "Automatic Aerosol" },
    ],
    image: "/images/JAH-010245G.png",
  },
  {
    id: "gen3",
    label: "Generation 3",
    variant: "Smart Third Generation",
    title: "Intelligent Operations",
    description:
      "Integrated system featuring aerosolized amine fire extinguishing, timed charging with automatic power-off, and intelligent charging management.",
    specs: [
      { label: "Extinguishing", value: "Aerosolized Amine" },
      { label: "Charging", value: "Timed & Auto Power-Off" },
    ],
    image: "/images/JAH-010301G.png",
  },
  {
    id: "gen4",
    label: "Generation 4",
    variant: "Flagship Generation 4",
    title: "Connected Infrastructure",
    description:
      "The pinnacle of smart charging safety. Enterprise-grade containment with comprehensive remote management and monitoring via mobile and PC platforms.",
    specs: [
      { label: "Management", value: "Remote Mobile & PC" },
      { label: "Security", value: "Top and Bottom Locks" },
    ],
    image: "/images/JAH-010401G.png",
  },
];

function SolutionShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const active = solutions[activeTab];

  return (
    <section className="py-1 md:py-32 px-6 md:px-8 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-xs font-label uppercase tracking-[0.4em] text-primary-container mb-12">
            Product Generations
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Tab Buttons */}
          <div className="lg:col-span-4 flex flex-col gap-2 md:gap-4">
            {solutions.map((sol, i) => (
              <motion.button
                key={sol.id}
                onClick={() => setActiveTab(i)}
                className={`w-full text-left px-6 py-5 md:p-8 flex items-center justify-between group transition-all duration-200 ${
                  i === activeTab
                    ? "bg-primary-container text-on-primary"
                    : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
                }`}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg md:text-2xl font-black uppercase tracking-tighter font-headline">
                  {sol.label}
                </span>
                <span
                  className={`material-symbols-outlined transition-opacity ${
                    i === activeTab
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  arrow_forward
                </span>
              </motion.button>
            ))}
          </div>

          {/* Content Panel */}
          <div className="lg:col-span-8 bg-surface-container shadow-2xl overflow-hidden min-h-[400px] md:min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex flex-col md:flex-row h-full"
              >
                {/* Text */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <h4 className="font-mono text-primary-container text-sm mb-4 tracking-widest uppercase">
                      {active.variant}
                    </h4>
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 font-headline">
                      {active.title}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed">
                      {active.description}
                    </p>
                  </div>
                  <div className="pt-8 border-t border-outline-variant/20 grid grid-cols-2 gap-4 mt-8">
                    {active.specs.map((spec) => (
                      <div key={spec.label}>
                        <span className="block font-mono text-[10px] uppercase text-neutral-500">
                          {spec.label}
                        </span>
                        <span className="block font-mono text-lg text-primary">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1 min-h-[250px] md:min-h-0 bg-surface-container-high p-8 flex items-center justify-center">
                  <img
                    src={active.image}
                    alt={active.title}
                    className="w-full h-full object-contain contrast-125 transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────
   6. AUTHORITY & TECH SPECS
   ───────────────────────────────────── */

const techSpecs = [
  {
    title: "Explosion-proof construction",
    body: "Explosion-proof cabinet with explosion-proof lock, leakage and overload protection for maximum safety in critical environments.",
  },
  {
    title: "Automatic fire suppression",
    body: "Automatic aerosol fire extinguishing with aerosolized amine. High temperature alarm and automatic power-off to neutralize threats.",
  },
  {
    title: "Intelligent charging management",
    body: "Timed charging, power-off when fully charged, voice broadcast, and remote management via mobile phone and PC.",
  },
  {
    title: "Customized solutions",
    body: "Comprehensive customized production services adapted to different brands and types of batteries, solving charging safety issues.",
  },
];

function AuthoritySpecs() {
  return (
    <section className="py-10 md:py-32 px-6 md:px-8 bg-surface border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
        {/* Left: Certifications */}
        <AnimatedSection direction="left" className="md:w-1/3">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8 font-headline">
            Certified excellence
          </h2>
          <p className="text-on-surface-variant mb-12">
            Rigorously tested and globally certified. Our quality management
            system ensures every detail meets international standards and
            industry specifications.
          </p>
          <div className="space-y-4">
            {["ISO 9001 · ISO 14001 · ISO 45001", "CE & RoHS CERTIFIED"].map(
              (cert, i) => (
                <div key={cert} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-surface-container-high flex items-center justify-center font-mono text-primary-container text-xs group-hover:bg-primary-container group-hover:text-on-primary transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <span className="font-label uppercase tracking-widest text-xs">
                    {cert}
                  </span>
                </div>
              )
            )}
          </div>
        </AnimatedSection>

        {/* Right: Tech Specs */}
        <AnimatedSection direction="right" className="md:w-2/3">
          <div className="bg-surface-container-low p-8 md:p-12 border-l-4 border-primary-container">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 font-mono text-sm">
              {techSpecs.map((spec) => (
                <StaggerItem key={spec.title}>
                  <div className="group">
                    <h5 className="text-primary-container font-black uppercase mb-2">
                      {spec.title}
                    </h5>
                    <p className="text-neutral-500 leading-relaxed">
                      {spec.body}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────
   7. CTA FOOTER SECTION
   ───────────────────────────────────── */

function CTASection() {
  return (
    <section className="relative py-10 md:py-40 px-6 md:px-8 text-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-neutral-950">
        <div className="absolute inset-0 dot-grid-bg opacity-[0.07] animate-grid-pulse" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-8 font-headline break-words hyphens-auto">
            Plan your infrastructure
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-xl text-on-surface-variant mb-12">
            Consult with our engineering team to integrate IonGuard Pro into your
            next architectural project.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.35}>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-primary-container text-on-primary font-black uppercase tracking-widest px-12 py-6 shadow-2xl flex items-center justify-center gap-3 hover:bg-primary-fixed-dim active:scale-[0.97] transition-all duration-200"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                engineering
              </span>
              Request Information
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
