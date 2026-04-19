"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
      <InsuranceWarning />
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
   5. INSURANCE & LIABILITY WARNING
   ───────────────────────────────────── */

const liabilityCards = [
  {
    icon: "gavel",
    label: "Reasonable Care Clause",
    title: "Your insurer can deny your claim.",
    body: "Insurance policies contain \"Reasonable Care\" clauses. If you suffer a loss from a lithium battery fire without taking prior steps to mitigate the risk, your insurer may classify the event as \"reckless\" and decline your claim. There is already precedent for this occurring in New Zealand.",
  },
  {
    icon: "domain_verification",
    label: "ICNZ Building Code Review",
    title: "Specialist storage is now expected.",
    body: "The Insurance Council of New Zealand (ICNZ) has formally stated that lithium-ion storage requires specialist ventilation and cooling systems. Without professional-grade containment, your storage solution may be deemed inadequate for the risk.",
  },
  {
    icon: "local_fire_department",
    label: "IAG Incident Data",
    title: "One lithium fire claim. Every month.",
    body: "IAG New Zealand, the country's largest insurer, reports approximately one claim per month for lithium battery fire damage. This frequency is accelerating stricter underwriting—making safety cabinets a prerequisite, not an option.",
  },
  {
    icon: "verified_user",
    label: "FENZ Compliance",
    title: "IonGuard meets every benchmark.",
    body: "Fire and Emergency NZ (FENZ) charging guidelines are the standard used by insurance adjusters. IonGuard Pro satisfies non-combustible surface requirements, temperature control mandates, and safe location protocols.",
  },
];

function InsuranceWarning() {
  return (
    <section className="py-10 md:py-16 bg-surface-container-lowest overflow-hidden">
      {/* Section Header — with fire damage background */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/fire-damage-bg.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark overlay for text contrast — ADJUST /60 value to control darkness (0=transparent, 100=fully dark) */}
          <div className="absolute inset-0 bg-surface-container-lowest/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/40 via-transparent to-surface-container-lowest/70" />
          {/* Subtle red tint to reinforce danger */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 to-transparent" />
        </div>

        {/* Content — above overlay */}
        <div className="relative z-10 py-12 md:py-16">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-error text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                warning
              </span>
              <span className="font-label text-error tracking-[0.2em] uppercase text-xs font-bold">
                Insurance Advisory
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6 font-headline max-w-4xl text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              A fire won&apos;t just damage your property.{" "}
              <span className="text-error drop-shadow-[0_2px_8px_rgba(147,0,10,0.6)]">It could void your insurance.</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-neutral-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-6 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              Most property owners don&apos;t read the fine print. Insurers do.
              If your lithium battery storage doesn&apos;t meet industry safety
              standards, you&apos;re not just at risk of fire—you&apos;re at
              risk of paying for everything out of pocket.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Stat Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <AnimatedSection delay={0.3}>
          <div className="flex flex-wrap gap-6 md:gap-12 mb-16 md:mb-20 py-8 border-t border-b border-outline-variant/20">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="block font-mono text-4xl md:text-5xl font-bold text-error"
              >
                12+
              </motion.span>
              <span className="font-label text-[10px] uppercase text-on-surface-variant tracking-widest mt-1 block">
                Battery fires per year (NZ)
              </span>
            </div>
            <div className="w-[1px] h-16 bg-outline-variant/30 hidden md:block" />
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="block font-mono text-4xl md:text-5xl font-bold text-primary-container"
              >
                100%
              </motion.span>
              <span className="font-label text-[10px] uppercase text-on-surface-variant tracking-widest mt-1 block">
                Claims deniable for recklessness
              </span>
            </div>
            <div className="w-[1px] h-16 bg-outline-variant/30 hidden md:block" />
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block font-mono text-4xl md:text-5xl font-bold text-primary-container"
              >
                $0
              </motion.span>
              <span className="font-label text-[10px] uppercase text-on-surface-variant tracking-widest mt-1 block">
                What you receive if denied
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Liability Cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {liabilityCards.map((card, i) => (
            <StaggerItem key={card.label}>
              <div className={`p-8 md:p-10 min-h-[280px] flex flex-col justify-between group transition-colors duration-500 ${
                i === 0 ? "bg-neutral-900" :
                i === 3 ? "bg-primary-container text-on-primary" :
                "bg-surface-container-low hover:bg-surface-container-high"
              }`}>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className={`material-symbols-outlined text-2xl ${
                        i === 0 ? "text-error" :
                        i === 3 ? "text-on-primary" :
                        "text-primary-container"
                      }`}
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {card.icon}
                    </span>
                    <span className={`font-label text-[10px] tracking-[0.2em] uppercase font-bold ${
                      i === 0 ? "text-error" :
                      i === 3 ? "text-on-primary/80" :
                      "text-outline"
                    }`}>
                      {card.label}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-4 font-headline">
                    {card.title}
                  </h3>
                </div>
                <p className={`leading-relaxed text-sm ${
                  i === 3 ? "text-on-primary font-medium" : "text-on-surface-variant"
                }`}>
                  {card.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA Strip */}
        <AnimatedSection delay={0.2}>
          <div className="mt-1 bg-surface-container-low p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg md:text-xl font-black uppercase tracking-tighter font-headline mb-2">
                IonGuard Pro is your documented proof of{" "}
                <span className="text-primary-container">&quot;Reasonable Care.&quot;</span>
              </h4>
              <p className="text-on-surface-variant text-sm max-w-xl">
                Don&apos;t let a fine-print clause cost you your investment.
                Professional-grade containment that satisfies insurer requirements,
                ICNZ building standards, and FENZ safety protocols.
              </p>
            </div>
            <Link
              href="/products"
              className="metallic-shine text-on-primary font-black uppercase tracking-wider text-sm px-8 py-4 shadow-xl hover:shadow-primary-container/20 transition-all duration-300 active:scale-[0.97] whitespace-nowrap flex-shrink-0"
            >
              Protect your investment
            </Link>
          </div>
        </AnimatedSection>
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
