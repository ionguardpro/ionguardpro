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
            Smart Charging Cabinet Series
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
            Professional charging solutions covering intelligent charging
            cabinets, secure storage cabinets, and explosion-proof cabinets.
            Comprehensive customized production services adapted to your
            specific needs and site conditions.
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
                      { label: "Dimensions", value: "1780 × 1100 × 520 mm" },
                      { label: "Socket", value: "PDU Industrial" },
                      { label: "Management", value: "Remote via Mobile & PC" },
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
                    { icon: "thermostat", label: "Temp Monitoring" },
                    { icon: "lock", label: "Top & Bottom Locks" },
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
  generation: 1 | 2 | 3 | 4;
  image: string;
  specs: { label: string; value: string }[];
  features: string[];
  badge?: string;
}

const products: Product[] = [
  // ═══ GENERATION 1 (3 products) ═══
  {
    id: "jah-010104",
    name: "JAH-010104",
    series: "Smart Generation One",
    generation: 1,
    image: "/images/JAH-010401 G.png",
    specs: [
      { label: "Volume", value: "4 Gallons" },
      { label: "Shelves", value: "1 Piece" },
      { label: "Lock", value: "3-Point Linkage Double Lock" },
    ],
    features: ["Explosion-proof cabinet & lock", "Leakage & overload protection", "Automatic ventilation"],
  },
  {
    id: "jah-010112",
    name: "JAH-010112",
    series: "Smart Generation One",
    generation: 1,
    badge: "Standard",
    image: "/images/JAH-010401 G.png",
    specs: [
      { label: "Volume", value: "12 Gallons" },
      { label: "Shelves", value: "1 Piece" },
      { label: "Lock", value: "3-Point Linkage Double Lock" },
    ],
    features: ["Bull socket", "Removable & adjustable shelves", "Casters"],
  },
  {
    id: "jah-010115",
    name: "JAH-010115",
    series: "Smart Generation One",
    generation: 1,
    image: "/images/JAH-010401 G.png",
    specs: [
      { label: "Volume", value: "15 Gallons" },
      { label: "Shelves", value: "1 Piece" },
      { label: "Lock", value: "3-Point Linkage Double Lock" },
    ],
    features: ["Explosion-proof cabinet & lock", "Bull socket", "Adjustable shelves"],
  },

  // ═══ GENERATION 2 (9 products) ═══
  {
    id: "jah-010215",
    name: "JAH-010215",
    series: "Smart Second Generation",
    generation: 2,
    image: "/images/JAH-010401 G.png",
    specs: [
      { label: "Volume", value: "15 Gallons" },
      { label: "Shelves", value: "1 Piece" },
      { label: "Lock", value: "3-Point Linkage Double Lock" },
    ],
    features: ["High temperature alarm", "Aerosol fire suppression", "Real-time temp monitoring"],
  },
  {
    id: "jah-010222-2s",
    name: "JAH-010222",
    series: "Smart Second Generation",
    generation: 2,
    badge: "Popular",
    image: "/images/JAH-010401 G.png",
    specs: [
      { label: "Volume", value: "22 Gallons" },
      { label: "Shelves", value: "2 Pieces" },
      { label: "Lock", value: "3-Point Linkage Double Lock" },
    ],
    features: ["High temp power-off", "Smoke alarm", "Real-time temp monitoring"],
  },
  {
    id: "jah-010222-3s",
    name: "JAH-010222",
    series: "Smart Second Generation",
    generation: 2,
    image: "/images/JAH-010401 G.png",
    specs: [
      { label: "Volume", value: "22 Gallons" },
      { label: "Shelves", value: "3 Pieces" },
      { label: "Lock", value: "3-Point Linkage Double Lock" },
    ],
    features: ["High temperature alarm", "Aerosol fire suppression", "Adjustable shelves"],
  },
  {
    id: "jah-010230",
    name: "JAH-010230",
    series: "Smart Second Generation",
    generation: 2,
    image: "/images/JAH-010401 G.png",
    specs: [
      { label: "Volume", value: "30 Gallons" },
      { label: "Shelves", value: "1 Piece" },
      { label: "Lock", value: "3-Point Linkage Double Lock" },
    ],
    features: ["Smoke alarm", "Aerosol fire suppression", "Real-time temp monitoring"],
  },
  {
    id: "jah-010245",
    name: "JAH-010245",
    series: "Smart Second Generation",
    generation: 2,
    image: "/images/JAH-010401 G.png",
    specs: [
      { label: "Volume", value: "45 Gallons" },
      { label: "Shelves", value: "2 Pieces" },
      { label: "Lock", value: "3-Point Linkage Double Lock" },
    ],
    features: ["High temp power-off", "Aerosol fire suppression", "Real-time temp monitoring"],
  },
  {
    id: "jah-010245g",
    name: "JAH-010245G",
    series: "Smart Second Generation",
    generation: 2,
    badge: "Enhanced",
    image: "/images/JAH-010401 G.png",
    specs: [
      { label: "Volume", value: "45 Gallons" },
      { label: "Shelves", value: "2 Pieces" },
      { label: "Lock", value: "3-Point Linkage Double Lock" },
    ],
    features: ["High temperature alarm", "Smoke alarm", "Real-time temp monitoring"],
  },
  {
    id: "jah-010260",
    name: "JAH-010260",
    series: "Smart Second Generation",
    generation: 2,
    image: "/images/JAH-010401 G.png",
    specs: [
      { label: "Volume", value: "60 Gallons" },
      { label: "Shelves", value: "2 Pieces" },
      { label: "Lock", value: "3-Point Linkage Double Lock" },
    ],
    features: ["High temp power-off", "Aerosol fire suppression", "Adjustable shelves"],
  },
  {
    id: "jah-010290",
    name: "JAH-010290",
    series: "Smart Second Generation",
    generation: 2,
    image: "/images/JAH-010401 G.png",
    specs: [
      { label: "Volume", value: "90 Gallons" },
      { label: "Shelves", value: "2 Pieces" },
      { label: "Lock", value: "3-Point Linkage Double Lock" },
    ],
    features: ["High temperature alarm", "Smoke alarm", "Real-time temp monitoring"],
  },
  {
    id: "jah-0102110",
    name: "JAH-0102110",
    series: "Smart Second Generation",
    generation: 2,
    badge: "High Capacity",
    image: "/images/JAH-010401 G.png",
    specs: [
      { label: "Volume", value: "110 Gallons" },
      { label: "Shelves", value: "2 Pieces" },
      { label: "Lock", value: "3-Point Linkage Double Lock" },
    ],
    features: ["Aerosol fire suppression", "High temp power-off", "Real-time temp monitoring"],
  },

  // ═══ GENERATION 3 (4 products) ═══
  {
    id: "jah-010302",
    name: "JAH-010302",
    series: "Smart Third Generation",
    generation: 3,
    image: "/images/JAH-010401 G.png",
    specs: [
      { label: "Shelves", value: "2 Pieces" },
      { label: "Lock", value: "3-Point Linkage Double Lock" },
      { label: "Socket", value: "PDU Industrial" },
    ],
    features: ["Timed charging", "Voice broadcast", "Intelligent charging management"],
  },
  {
    id: "jah-010303",
    name: "JAH-010303",
    series: "Smart Third Generation",
    generation: 3,
    image: "/images/JAH-010401 G.png",
    specs: [
      { label: "Shelves", value: "3 Pieces" },
      { label: "Lock", value: "3-Point Linkage Double Lock" },
      { label: "Socket", value: "PDU Industrial" },
    ],
    features: ["Aerosolized amine extinguishing", "Power-off when fully charged", "Voice broadcast"],
  },
  {
    id: "jah-010301",
    name: "JAH-010301",
    series: "Smart Third Generation",
    generation: 3,
    image: "/images/JAH-010401 G.png",
    specs: [
      { label: "Shelves", value: "3 Pieces" },
      { label: "Lock", value: "3-Point Linkage Double Lock" },
      { label: "Socket", value: "PDU Industrial" },
    ],
    features: ["Intelligent charging management", "Timed charging", "High temp alarm"],
  },
  {
    id: "jah-010301g",
    name: "JAH-010301G",
    series: "Smart Third Generation",
    generation: 3,
    badge: "Advanced",
    image: "/images/JAH-010401 G.png",
    specs: [
      { label: "Shelves", value: "3 Pieces" },
      { label: "Lock", value: "3-Point Linkage Double Lock" },
      { label: "Extinguishing", value: "Aerosolized Amine" },
    ],
    features: ["Power-off when fully charged", "Intelligent management", "PDU industrial socket"],
  },

  // ═══ GENERATION 4 (8 products) ═══
  {
    id: "jah-0104-std-a",
    name: "Gen4 Standard A",
    series: "Smart Fourth Generation",
    generation: 4,
    image: "/images/JAH-010401 G.png",
    specs: [
      { label: "Shelves", value: "3 Pieces" },
      { label: "Locks", value: "Top & Bottom" },
      { label: "Dimensions", value: "1780 × 600 × 520 mm" },
    ],
    features: ["Timed charging", "Aerosol fire extinguishing", "Voice broadcast"],
  },
  {
    id: "jah-0104-std-b",
    name: "Gen4 Standard B",
    series: "Smart Fourth Generation",
    generation: 4,
    image: "/images/JAH-010401 G.png",
    specs: [
      { label: "Shelves", value: "3 Pieces" },
      { label: "Locks", value: "Top & Bottom" },
      { label: "Dimensions", value: "1780 × 600 × 520 mm" },
    ],
    features: ["PDU industrial socket", "Power-off when fully charged", "Adjustable shelves"],
  },
  {
    id: "jah-0104-std-c",
    name: "Gen4 Standard C",
    series: "Smart Fourth Generation",
    generation: 4,
    image: "/images/JAH-010401 G.png",
    specs: [
      { label: "Shelves", value: "2 Pieces" },
      { label: "Locks", value: "Top & Bottom" },
      { label: "Dimensions", value: "1280 × 1100 × 520 mm" },
    ],
    features: ["Timed charging", "Aerosol fire extinguishing", "Voice broadcast"],
  },
  {
    id: "jah-0104-std-d",
    name: "Gen4 Standard D",
    series: "Smart Fourth Generation",
    generation: 4,
    image: "/images/JAH-010401 G.png",
    specs: [
      { label: "Shelves", value: "3 Pieces" },
      { label: "Locks", value: "Top & Bottom" },
      { label: "Dimensions", value: "1280 × 1100 × 520 mm" },
    ],
    features: ["PDU industrial socket", "Power-off when fully charged", "Adjustable shelves"],
  },
  {
    id: "jah-010403",
    name: "JAH-010403",
    series: "Smart Fourth Generation",
    generation: 4,
    image: "/images/JAH-010401 G.png",
    specs: [
      { label: "Shelves", value: "2 Pieces" },
      { label: "Locks", value: "Top & Bottom" },
      { label: "Dimensions", value: "1280 × 600 × 520 mm" },
    ],
    features: ["Intelligent charging management", "Remote management via mobile & PC", "Voice broadcast"],
  },
  {
    id: "jah-010402",
    name: "JAH-010402",
    series: "Smart Fourth Generation",
    generation: 4,
    image: "/images/JAH-010401 G.png",
    specs: [
      { label: "Shelves", value: "3 Pieces" },
      { label: "Locks", value: "Top & Bottom" },
      { label: "Dimensions", value: "1280 × 600 × 520 mm" },
    ],
    features: ["Intelligent charging management", "Remote management via mobile & PC", "Aerosol fire extinguishing"],
  },
  {
    id: "jah-010401",
    name: "JAH-010401",
    series: "Smart Fourth Generation",
    generation: 4,
    image: "/images/JAH-010401 G.png",
    specs: [
      { label: "Shelves", value: "3 Pieces" },
      { label: "Locks", value: "Top & Bottom" },
      { label: "Dimensions", value: "1780 × 1100 × 520 mm" },
    ],
    features: ["Intelligent charging management", "Remote management via mobile & PC", "Voice broadcast"],
  },
  {
    id: "jah-010401g",
    name: "JAH-010401G",
    series: "Smart Fourth Generation",
    generation: 4,
    badge: "Flagship",
    image: "/images/JAH-010401 G.png",
    specs: [
      { label: "Shelves", value: "3 Pieces" },
      { label: "Locks", value: "Top & Bottom" },
      { label: "Dimensions", value: "1780 × 1100 × 520 mm" },
    ],
    features: ["Intelligent charging management", "Remote management via mobile & PC", "Aerosol fire extinguishing"],
  },
];

function ProductGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeGen, setActiveGen] = useState<number | "All">("All");

  const filterGenerations = [
    { id: "All", label: "All Models" },
    { id: 1, label: "Generation 1" },
    { id: 2, label: "Generation 2" },
    { id: 3, label: "Generation 3" },
    { id: 4, label: "Generation 4" },
  ];

  const filteredProducts =
    activeGen === "All"
      ? products
      : products.filter((p) => p.generation === activeGen);

  return (
    <section className="px-6 md:px-12 pb-12">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-primary-container" />
              <span className="font-label text-on-surface-variant text-xs font-bold uppercase tracking-widest">
                Full Product Range
              </span>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {filterGenerations.map((gen) => (
                <button
                  key={gen.id}
                  onClick={() => setActiveGen(gen.id as number | "All")}
                  className={`px-4 py-2 font-mono text-xs uppercase tracking-widest transition-all duration-300 border ${
                    activeGen === gen.id
                      ? "border-primary-container bg-primary-container/10 text-primary-container"
                      : "border-neutral-800 text-neutral-400 hover:border-neutral-600 text-on-surface-variant"
                  }`}
                >
                  {gen.label}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <StaggerContainer key={activeGen} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <StaggerItem key={product.id}>
              <motion.div
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="bg-surface-container-low flex flex-col h-full group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Product Image — same config as Featured Product */}
                <div className="relative h-60 bg-surface-container-high overflow-hidden p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain contrast-125 opacity-90 group-hover:opacity-100 transition-all duration-700"
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
                  Quality Certifications
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-none mb-6 font-headline">
                Certified
                <br />
                Excellence
              </h2>
              <p className="text-on-surface-variant font-medium text-sm leading-relaxed mb-8 max-w-lg">
                ISO9001, ISO14001, and ISO45001 certified for quality,
                environment, and health management systems. CE and RoHS
                certified. Every detail of our production process meets
                international standards and industry specifications.
              </p>

              {/* Stats */}
              <div className="flex gap-8">
                <CounterStat value="5" suffix="" label="Certifications" />
                <div className="w-[1px] h-14 bg-outline-variant/30" />
                <CounterStat value="4" suffix="" label="Generations" />
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
