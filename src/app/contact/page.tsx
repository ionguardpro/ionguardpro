"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    sector: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Visual only — user will connect to n8n automation
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="pt-20 min-h-screen bg-background">
      <ContactHero />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">
          <ContactInfo />
          <ContactForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            submitted={submitted}
          />
        </div>
        <NetworkStatus />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────
   HERO
   ───────────────────────────────────── */
function ContactHero() {
  return (
    <section className="px-6 md:px-12 pt-12 md:pt-20 pb-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection delay={0.1}>
          <div className="inline-flex items-center gap-2 mb-6 text-primary-fixed-dim font-mono text-xs tracking-tighter uppercase">
            <span className="w-8 h-[1px] bg-primary-fixed-dim" />
            Engineering Interface v4.0
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase font-headline text-on-surface leading-[0.9] mb-8">
            Connect with{" "}
            <br />
            <span className="text-primary-container">Engineering</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.35}>
          <p className="text-secondary max-w-xl text-lg leading-relaxed font-light">
            Direct access to our precision systems architecture team. Resolve
            technical hurdles or initiate mission-critical sales deployment
            within 24 operational hours.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────
   LEFT COLUMN — Contact Info
   ───────────────────────────────────── */
function ContactInfo() {
  return (
    <div className="lg:col-span-5 flex flex-col gap-8">
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Technical Support */}
        <StaggerItem>
          <div className="bg-surface-container-low p-8 border-l-4 border-primary-container h-full">
            <h3 className="font-label text-[10px] tracking-[0.2em] uppercase text-outline mb-4">
              Technical Support
            </h3>
            <p className="font-mono text-lg text-on-surface mb-2">
              0x800-ION-TECH
            </p>
            <p className="text-sm text-secondary font-light mb-6">
              support@ionguard.pro
            </p>
            <div className="flex items-center gap-2 text-[10px] font-mono text-primary-fixed-dim">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container" />
              </span>
              SYSTEMS ONLINE: 24/7
            </div>
          </div>
        </StaggerItem>

        {/* Sales Inquiries */}
        <StaggerItem>
          <div className="bg-surface-container-low p-8 border-l-4 border-secondary h-full">
            <h3 className="font-label text-[10px] tracking-[0.2em] uppercase text-outline mb-4">
              Sales Inquiries
            </h3>
            <p className="font-mono text-lg text-on-surface mb-2">
              +1 415-555-0192
            </p>
            <p className="text-sm text-secondary font-light mb-6">
              deploy@ionguard.pro
            </p>
            <div className="flex items-center gap-2 text-[10px] font-mono text-secondary">
              M-F: 0800 – 1800 PST
            </div>
          </div>
        </StaggerItem>
      </StaggerContainer>

      {/* Why IonGuard */}
      <AnimatedSection delay={0.2}>
        <div className="bg-surface-container-low p-8 border-t border-outline-variant/20">
          <h4 className="font-label text-[10px] tracking-[0.2em] uppercase text-outline mb-6">
            Why Engineers Choose Us
          </h4>
          <div className="space-y-4">
            {[
              { icon: "verified_user", text: "ISO 9001 certified manufacturing" },
              { icon: "speed", text: "Microsecond anomaly detection" },
              { icon: "architecture", text: "Architectural-grade design language" },
              { icon: "support_agent", text: "24/7 engineering support desk" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-surface-container-high flex items-center justify-center group-hover:bg-primary-container transition-colors duration-300">
                  <span
                    className="material-symbols-outlined text-primary-container group-hover:text-on-primary text-sm transition-colors duration-300"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {item.icon}
                  </span>
                </div>
                <span className="font-mono text-xs text-on-surface-variant">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Hardware image */}
      <AnimatedSection delay={0.3}>
        <div className="relative h-48 overflow-hidden grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700 hidden lg:block">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyZI_9E-KAw_HEfAKwDPjcR7gyYEs28wMWAxi8NYCB5IORdRkWDT_gtWrekMDZjc-nAHA1wuAQt4DTDVeY3hvVhIQOmxlE8_blfNWQmDe6txo-6lHTlUgA1nn-l7UkIVZx3KaDJaCo0d1TncQXDDt4dFwsqzL72f2GkFAkaCYw1xadkCEqq8NcqQNi_4p1B09-UaauSsBRWr43pJTFgAWjYnyDYrpxfKFi3Es8OdRONFvXUK5W5IkLG6n1hpHf4Vj1aUTKPJB5-6A"
            alt="IonGuard precision hardware"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
      </AnimatedSection>
    </div>
  );
}

/* ─────────────────────────────────────
   RIGHT COLUMN — Contact Form
   ───────────────────────────────────── */
interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  sector: string;
  message: string;
}

function ContactForm({
  formData,
  setFormData,
  onSubmit,
  submitted,
}: {
  formData: FormData;
  setFormData: (d: FormData) => void;
  onSubmit: (e: React.FormEvent) => void;
  submitted: boolean;
}) {
  const inputClass =
    "w-full bg-surface-container-high/40 border-b border-outline-variant/50 focus:border-primary-container focus:bg-surface-container-high focus:ring-0 focus:outline-none text-on-surface font-mono py-4 px-4 transition-all placeholder:text-on-surface-variant/30 text-sm";

  const labelClass =
    "block font-label text-[10px] tracking-[0.2em] uppercase text-primary-container/80 group-focus-within:text-primary-container transition-colors mb-2";

  return (
    <AnimatedSection direction="right" className="lg:col-span-7">
      <div className="bg-surface-container-low p-1">
        <div className="bg-background p-8 md:p-12 border border-outline-variant/10">
          <form onSubmit={onSubmit} className="space-y-10">
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="group">
                <label className={labelClass}>Operator Name</label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div className="group">
                <label className={labelClass}>Comms Address</label>
                <input
                  type="email"
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Phone + Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="group">
                <label className={labelClass}>Signal Contact (Phone)</label>
                <input
                  type="tel"
                  placeholder="+1 (000) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div className="group">
                <label className={labelClass}>Organization</label>
                <input
                  type="text"
                  placeholder="Company or Institution"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Sector Select */}
            <div className="group">
              <label className={labelClass}>Deployment Sector</label>
              <select
                value={formData.sector}
                onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                className="w-full bg-surface-container-high/40 border-b border-outline-variant/50 focus:border-primary-container focus:bg-surface-container-high focus:ring-0 focus:outline-none text-on-surface font-mono py-4 px-4 transition-all text-sm appearance-none cursor-pointer placeholder:text-on-surface-variant/30"
              >
                <option value="" className="bg-surface-container-low">Select sector</option>
                <option value="residential" className="bg-surface-container-low">Residential</option>
                <option value="commercial" className="bg-surface-container-low">Commercial</option>
                <option value="industrial" className="bg-surface-container-low">Industrial</option>
                <option value="government" className="bg-surface-container-low">Government / Defence</option>
                <option value="other" className="bg-surface-container-low">Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="group">
              <label className={labelClass}>Data Payload (Message)</label>
              <textarea
                placeholder="Describe your technical requirements or inquiry..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Submit */}
            <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex gap-3 items-center">
                <div className="w-10 h-[1px] bg-outline-variant" />
                <p className="font-mono text-[10px] text-outline-variant uppercase tracking-widest">
                  Secure End-to-End Transmission
                </p>
              </div>

              <motion.button
                type="submit"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.97 }}
                className="w-full md:w-auto bg-primary-container text-on-primary px-10 py-5 text-sm font-black tracking-[0.2em] uppercase hover:bg-primary-fixed-dim transition-colors duration-300 flex items-center justify-center gap-3"
              >
                {submitted ? (
                  <>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    Transmitted
                  </>
                ) : (
                  <>
                    Initialize Contact
                    <span className="material-symbols-outlined text-lg">chevron_right</span>
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ─────────────────────────────────────
   NETWORK STATUS BAR
   ───────────────────────────────────── */
const statusItems = [
  { label: "Latency", value: "12ms" },
  { label: "Uptime", value: "99.999%" },
  { label: "Encryption", value: "AES-512" },
  { label: "Satellite", value: "Linked" },
];

function NetworkStatus() {
  return (
    <AnimatedSection delay={0.2}>
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {statusItems.map((item) => (
          <div
            key={item.label}
            className="bg-surface-container-low p-4 border border-outline-variant/5 hover:border-primary-container/20 transition-colors duration-300"
          >
            <p className="font-label text-[9px] text-outline uppercase mb-2">
              {item.label}
            </p>
            <p className="font-mono text-primary-container text-sm font-bold">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
