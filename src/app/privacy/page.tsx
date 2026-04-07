import { AnimatedSection } from "@/components/AnimatedSection";

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <AnimatedSection>
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary-container mb-4 block">
          Legal Protocol
        </span>
        <h1 className="text-5xl font-black uppercase tracking-tighter font-headline mb-12">
          Privacy Protocol
        </h1>
        <div className="space-y-8 font-body text-on-surface-variant leading-relaxed border-l-2 border-outline-variant/20 pl-8">
          <p className="font-mono text-xs text-outline uppercase tracking-widest">
            Last Updated: 2026
          </p>
          <p>
            IonGuard Pro is committed to protecting your privacy. This document
            outlines how we collect, use, and safeguard information when you
            interact with our systems.
          </p>
          <p>
            All data transmitted through our engineering interface is encrypted
            end-to-end using AES-512 standards. Contact information submitted
            through inquiry forms is used solely for responding to technical and
            sales requests.
          </p>
          <p>
            We do not sell, rent, or share personal data with third parties
            except as required to fulfil your request or comply with applicable
            law.
          </p>
          <p className="text-on-surface-variant/60 text-sm">
            For privacy-related requests, contact:{" "}
            <span className="font-mono text-on-surface">
              privacy@ionguard.pro
            </span>
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}
