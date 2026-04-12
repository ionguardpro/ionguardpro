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
      <StaggerContainer className="grid grid-cols-1 gap-6">
        {/* Sales Inquiries */}
        <StaggerItem>
          <div className="bg-surface-container-low p-8 border-l-4 border-primary-container h-full">
            <h3 className="font-label text-[10px] tracking-[0.2em] uppercase text-outline mb-4">
              Sales Inquiries
            </h3>
            <p className="font-mono text-lg text-on-surface mb-2">
              +64 27 668 3669
            </p>
            <p className="text-sm text-secondary font-light mb-6">
              contact@ionguardpro.com
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
        <div className="relative h-64 overflow-hidden bg-surface-container-high p-6 hidden lg:block border border-outline-variant/5">
          <img
            src="/images/JAH-010401G.png"
            alt="IonGuard Smart Charging Cabinet Flagship"
            className="object-contain w-full h-full contrast-125"
          />
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
    "w-full bg-surface-container-high/40 border-b border-outline-variant/60 focus:border-primary-container focus:bg-surface-container-high focus:ring-0 focus:outline-none text-on-surface font-mono py-4 px-4 transition-all placeholder:text-on-surface-variant/70 text-base";

  const labelClass =
    "block font-label text-xs tracking-[0.2em] uppercase text-primary-container group-focus-within:text-primary transition-colors mb-2";

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
                className="w-full bg-surface-container-high/40 border-b border-outline-variant/60 focus:border-primary-container focus:bg-surface-container-high focus:ring-0 focus:outline-none text-on-surface font-mono py-4 px-4 transition-all text-base appearance-none cursor-pointer placeholder:text-on-surface-variant/70"
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
              <label className={labelClass}>Message</label>
              <textarea
                placeholder="Describe your technical requirements or inquiry..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Submit */}
            <div className="pt-4 flex flex-col items-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-primary-container text-on-primary px-10 py-5 text-sm font-black tracking-[0.2em] uppercase hover:bg-primary-fixed-dim transition-all duration-300 flex items-center justify-center gap-3"
              >
                {submitted ? (
                  <>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    Message Sent
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
  { label: "Fire Protection", value: "Aerosol System Active" },
  { label: "Charging Core", value: "Intelligent Mgmt" },
  { label: "Monitoring", value: "Real-time Telemetry" },
  { label: "Compliance", value: "ISO 9001 Certified" },
];

function NetworkStatus() {
  return (
    <AnimatedSection delay={0.2}>
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {statusItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-surface-container-low p-4 border border-outline-variant/5 hover:border-primary-container/40 hover:bg-surface-container-high transition-all duration-300 group relative overflow-hidden flex flex-col justify-between min-h-[90px]"
          >
            {/* Animated Progress Accent */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 + (i * 0.1) }}
              className="absolute top-0 left-0 h-[2px] bg-primary-container opacity-50 group-hover:opacity-100 transition-opacity"
            />
            <div className="flex items-center justify-between mb-2">
              <p className="font-label text-[9px] text-outline uppercase tracking-widest">
                {item.label}
              </p>
              <span className="relative flex h-2 w-2 group-hover:scale-125 transition-transform duration-300">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container" />
              </span>
            </div>
            <p className="font-mono text-primary-container text-xs font-bold leading-tight">
              {item.value}
            </p>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
