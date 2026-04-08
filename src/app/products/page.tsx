"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";

/* ═══════════════════════════════════════
   PRODUCTS PAGE — IonGuard Pro
   All product data is placeholder — user will
   replace images and descriptions manually.
   ═══════════════════════════════════════ */

export default function ProductsPage() {
  return (
    <div className="pt-20">
      <ProductsHero />
      <FeaturedProduct />
      <ProductGrid />
      <ProtectionStandards />
    </div>
  );
}

/* ─────────────────────────────────────
   HERO
   ───────────────────────────────────── */

function ProductsHero() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection delay={0.1}>
          <span className="font-label text-primary tracking-[0.3em] text-xs font-bold uppercase mb-4 block">
            System Catalog v4.0
          </span>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-black tracking-tighter uppercase mb-6 leading-none">
            Engineered <br />
            <span className="text-primary-container">Solutions</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.35}>
          <p className="max-w-2xl text-on-surface-variant font-medium text-lg leading-relaxed border-l-2 border-outline-variant pl-6">
            Precision-machined energy storage architectures designed for
            high-density environments. Our charging cabinets integrate advanced
            thermal runaway isolation and intelligent power management protocols.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────
   FEATURED PRODUCT — JAH-010401G
   ───────────────────────────────────── */

function FeaturedProduct() {
  return (
    <section className="px-6 md:px-12 pb-12">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="bg-surface-container-low p-6 md:p-8 relative overflow-hidden group">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Product Image */}
              <div className="w-full md:w-1/2 aspect-square bg-surface-container-high relative overflow-hidden p-8">
                <img
                  className="w-full h-full object-contain contrast-125 opacity-90 group-hover:opacity-100 transition-all duration-700"
                  alt="JAH-010401G Smart Charging Cabinet"
                  src="/images/JAH-010401 G.png"
                />
                <div className="absolute top-4 left-4 bg-primary-container text-on-primary px-3 py-1 text-[10px] font-label font-bold tracking-widest uppercase">
                  Flagship Series
                </div>
              </div>

              {/* Product Details */}
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-black tracking-tighter uppercase mb-2 font-headline">
                    JAH-010401G
                  </h3>
                  <p className="font-label text-primary-container text-sm font-bold tracking-widest uppercase mb-6">
                    Smart Fourth Generation
                  </p>

                  {/* Specs Table */}
                  <div className="space-y-4 font-mono text-sm">
                    {[
                      { label: "Shelves", value: "3 Pieces" },
                      { label: "Security", value: "Top & Bottom Locks" },
                      { label: "Volume", value: "1780 × 1100 × 520 mm" },
                      { label: "Fire Rating", value: "Class A" },
                      { label: "Charging", value: "Smart Flow Technology" },
                    ].map((spec) => (
                      <div
                        key={spec.label}
                        className="flex justify-between border-b border-outline-variant/20 pb-2"
                      >
                        <span className="text-on-surface-variant uppercase">
                          {spec.label}
                        </span>
                        <span className="text-on-surface font-bold">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Feature Badges */}
                <div className="mt-8 grid grid-cols-2 gap-2">
                  {[
                    { icon: "bolt", label: "Intelligent Management" },
                    { icon: "warning", label: "Explosion Proof" },
                    { icon: "thermostat", label: "Active Cooling" },
                    { icon: "lock", label: "Multi-Lock System" },
                  ].map((badge) => (
                    <div
                      key={badge.label}
                      className="bg-surface-container-highest p-3 flex flex-col gap-2 hover:bg-surface-container-high transition-colors duration-300"
                    >
                      <span className="material-symbols-outlined text-primary-container text-lg">
                        {badge.icon}
                      </span>
                      <span className="font-label text-[10px] font-bold uppercase tracking-tight">
                        {badge.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────
   PRODUCT GRID — All models
   Each card is a placeholder slot that the
   user will fill with real data/images.
   ───────────────────────────────────── */

interface Product {
  id: string;
  name: string;
  series: string;
  image: string;
  specs: { label: string; value: string }[];
  features: string[];
  badge?: string;
}

const products: Product[] = [
  {
    id: "ion-core-02",
    name: "ION-CORE-02",
    series: "Compact Series",
    badge: "Popular",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRN19N1_4O7KbyqnroMoMx30kHlMcG5Kv1x4JaKGwmJk28nZUqChvDQbVd0Vmd_mAU8HbH2PUybKTgCDvEbmLy01je3-lLEXfkxbIMTgKrzNRPFM8P0ZFz9QGkjFmh8OVPJetiLUCzw_0LD6B1PYtrfIrqePheWud3gjKstJfs_8yXUWx7MgX6tTTKrT9WQ6gPiqxgeoAlG6HTIaIHz5mbCCSgxaCx84xP-mNgcDbU3mMvSIg3p__8Vngjz7V-w2apqZEY9EU-8Gw",
    specs: [
      { label: "Isolation", value: "Thermal Level 4" },
      { label: "Charging", value: "Smart Flow" },
      { label: "Dimensions", value: "1200 × 800 × 450 mm" },
    ],
    features: ["Compact footprint", "Smart diagnostics"],
  },
  {
    id: "jah-pro-x",
    name: "JAH-PRO-X",
    series: "Thermal Runaway Isolation",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCO3MRWG-PbMfvDduKIZu_MIwp9Y8AQHEuIQmLUbN0FYJJIyoYzLV1Pq3CDbGVKD0TeS4QiQXYCxZB4psv0-1BxznCQVgOGZ6SrjI-hyFY-Wo_XkAtdWeu7k_LiMYuN3Ism4zPGLG9TRDljgr16uPYiPM95EC2ULBS4gVRN76yfAAA1yVPWJpoZlbPIY0RQLspVSXVnvTY8Bkuhmx37S_6iM_jZKHSLF2rfOmsS92zXyLXeZ6KM_LwiTNAhAyGUcw8OnrTU3SynoTk",
    specs: [
      { label: "Isolation", value: "Thermal Level 5" },
      { label: "Suppression", value: "Active Gas" },
      { label: "Dimensions", value: "1600 × 1000 × 520 mm" },
    ],
    features: ["Multi-stage pressure relief", "Autonomous fire suppression"],
  },
  {
    id: "ion-vault-s1",
    name: "ION-VAULT-S1",
    series: "Residential Series",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBoi92z1Hd-yKlr2l5yJaDpbd7xLaKPIvHFfM0g6V5HUmuzaWUOMmOq526HrQeR1-E2bvJi-LmdUD00QnQ-qmj8EhnqW_MvAyZZTTRnDncTrqwk-COGM-Cb3ObBG0gfgK-3OO1kJXPkW3ACsvD5dQD04Q9PhKGDuUI1dXYB_b0LtG-iViKJmh079FX7Wmrl3z5J0Nl_zl_I3s77ASUiMRJhPW7e-qHcHPTm81fs71EUHW5Jp-26jRAvJAKHyPWaHFUwyXxbUIVVp34",
    specs: [
      { label: "Isolation", value: "Thermal Level 3" },
      { label: "Charging", value: "Adaptive Flow" },
      { label: "Dimensions", value: "900 × 600 × 400 mm" },
    ],
    features: ["Smart home integration", "Silent operation"],
  },
  {
    id: "ion-fort-x2",
    name: "ION-FORT-X2",
    series: "Industrial Series",
    badge: "Heavy Duty",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCPsSxLooJpK6UcDwovs1KdEDzMmMxUZ2slA9CcCo61LR6zjo3I94x28OqJldNcsZamL0pfpW3zC_QAJpQwuyvHXsmpvYGZ7_o01EyysD2eeoGsar2GAE6enThcX19tsUkh3QYm3_graWHqYhCWZBwB1wscZnaZSDvEHmQRS1olj99jQXCYn7GvdJL-NLyQ07H9TxQP0luQCcZBMAT1eQ2PwaVM_jrGeMQIp6YydmauOBiIBHfymT_3CxoDt06sp_mJ3PQ0g5iqG9A",
    specs: [
      { label: "Isolation", value: "Thermal Level 6" },
      { label: "Suppression", value: "Dual-Agent" },
      { label: "Dimensions", value: "2100 × 1400 × 650 mm" },
    ],
    features: ["Extreme temperature rated", "Ruggedized chassis"],
  },
  {
    id: "ion-fleet-m3",
    name: "ION-FLEET-M3",
    series: "Fleet Management",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD9oYuay1f4cDs1-nwsyxRZaJfPVYi4BsUi4fy8qoVlPFKFQk2uqNhX-Mk3EAvJuvoUd_GcPLj4I3zbnlaAO8O6OJCTVS5ZKjG98PLKoUUVLiadPcTZ298KN0u4HQ534LTBNlqU8jteINXrhQCraUCqrW-z3ql5631faEZSKp-20wPZ3VIEf6O0JrgZTN5_PczK08xLkIEGViAwiYOrWUH4IdQQqAchwJEcOuhcldTiymWSizKX-PBBhAS1Oc065_MX0XVHQS5eRRQ",
    specs: [
      { label: "Bays", value: "12 Units" },
      { label: "Charging", value: "Sequential Smart" },
      { label: "Dimensions", value: "1800 × 1200 × 550 mm" },
    ],
    features: ["Fleet-scale management", "Remote monitoring"],
  },
  {
    id: "ion-rack-e1",
    name: "ION-RACK-E1",
    series: "Enterprise Rack",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRN19N1_4O7KbyqnroMoMx30kHlMcG5Kv1x4JaKGwmJk28nZUqChvDQbVd0Vmd_mAU8HbH2PUybKTgCDvEbmLy01je3-lLEXfkxbIMTgKrzNRPFM8P0ZFz9QGkjFmh8OVPJetiLUCzw_0LD6B1PYtrfIrqePheWud3gjKstJfs_8yXUWx7MgX6tTTKrT9WQ6gPiqxgeoAlG6HTIaIHz5mbCCSgxaCx84xP-mNgcDbU3mMvSIg3p__8Vngjz7V-w2apqZEY9EU-8Gw",
    specs: [
      { label: "Isolation", value: "Thermal Level 4" },
      { label: "Network", value: "IoT Enabled" },
      { label: "Dimensions", value: "1500 × 900 × 480 mm" },
    ],
    features: ["Cloud dashboard", "Predictive maintenance"],
  },
];

function ProductGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="px-6 md:px-12 pb-12">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-10">
            <div className="h-[2px] w-12 bg-primary-container" />
            <span className="font-label text-on-surface-variant text-xs font-bold uppercase tracking-widest">
              Full Product Range
            </span>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <StaggerItem key={product.id}>
              <motion.div
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="bg-surface-container-low flex flex-col h-full group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Product Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700"
                  />
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-primary-container text-on-primary px-3 py-1 text-[9px] font-label font-bold tracking-widest uppercase">
                      {product.badge}
                    </div>
                  )}
                  {/* Hover overlay */}
                  <AnimatePresence>
                    {hoveredId === product.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent flex items-end p-4"
                      >
                        <span className="font-mono text-[10px] text-primary-container uppercase tracking-widest">
                          View specifications →
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-black tracking-tighter uppercase mb-1 font-headline">
                    {product.name}
                  </h3>
                  <p className="font-label text-primary-container text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
                    {product.series}
                  </p>

                  {/* Specs */}
                  <div className="space-y-2 font-mono text-xs mb-6 flex-1">
                    {product.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex justify-between py-1 bg-surface-container-highest/30 px-2"
                      >
                        <span className="text-on-surface-variant">
                          {spec.label}
                        </span>
                        <span className="text-on-surface">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="font-mono text-xs space-y-2 mb-6">
                    {product.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <span className="text-primary-container text-[8px] mt-1.5">
                          ■
                        </span>
                        <span className="text-on-surface-variant">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button className="mt-auto w-full py-3 bg-surface-container-highest font-label font-bold text-[10px] tracking-widest uppercase hover:bg-primary-container hover:text-on-primary transition-colors duration-300 active:scale-[0.98]">
                    Technical Datasheet
                  </button>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────
   EXTREME PROTECTION STANDARDS
   ───────────────────────────────────── */

function ProtectionStandards() {
  return (
    <section className="px-6 md:px-12 py-1 md:py-32">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="bg-surface-container-low p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center">
            {/* Text */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-12 bg-primary-container" />
                <span className="font-label text-on-surface-variant text-xs font-bold uppercase tracking-widest">
                  Protocol 7X Compliance
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-none mb-6 font-headline">
                Extreme Protection
                <br />
                Standards
              </h2>
              <p className="text-on-surface-variant font-medium text-sm leading-relaxed mb-8 max-w-lg">
                Our Fourth Generation systems are built to withstand the harshest
                industrial thermal events. Every cabinet undergoes rigorous
                testing in our calibration facility to ensure absolute
                reliability in critical infrastructure.
              </p>

              {/* Stats */}
              <div className="flex gap-8">
                <CounterStat value="99.9" suffix="%" label="Reliability Rating" />
                <div className="w-[1px] h-14 bg-outline-variant/30" />
                <CounterStat value="<2" suffix="ms" label="Response Latency" />
              </div>
            </div>

            {/* Decorative Binary Block */}
            <div className="w-full lg:w-64 h-64 bg-surface-container-high border-r-8 border-primary-container flex items-center justify-center p-4 overflow-hidden">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.4 }}
                transition={{ duration: 1 }}
                className="font-mono text-[10px] text-on-surface-variant leading-none break-all"
              >
                01010111 01000101 00100000 01000010 01010101 01001001 01001100
                01000100 00100000 01010100 01001000 01000101 00100000 01000110
                01010101 01010100 01010101 01010010 01000101 00100000 01010111
                01000101 00100000 01000010 01010101 01001001 01001100 01000100
              </motion.span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* Counter animation component */
function CounterStat({
  value,
  suffix,
  label,
}: {
  value: string;
  suffix: string;
  label: string;
}) {
  return (
    <div className="flex flex-col">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-mono text-2xl md:text-3xl font-bold text-primary-container"
      >
        {value}
        {suffix}
      </motion.span>
      <span className="font-label text-[10px] uppercase text-on-surface-variant mt-1">
        {label}
      </span>
    </div>
  );
}
