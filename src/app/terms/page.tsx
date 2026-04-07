import { AnimatedSection } from "@/components/AnimatedSection";

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <AnimatedSection>
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary-container mb-4 block">
          Legal Protocol
        </span>
        <h1 className="text-5xl font-black uppercase tracking-tighter font-headline mb-12">
          Terms of Operation
        </h1>
        <div className="space-y-8 font-body text-on-surface-variant leading-relaxed border-l-2 border-outline-variant/20 pl-8">
          <p className="font-mono text-xs text-outline uppercase tracking-widest">
            Last Updated: 2026
          </p>
          <p>
            By accessing and using the IonGuard Pro website and associated
            engineering documentation, you agree to these Terms of Operation.
          </p>
          <p>
            All product specifications, technical drawings, and system
            documentation provided on this site are for informational purposes
            only. Final specifications are confirmed in writing at the time of
            order.
          </p>
          <p>
            IonGuard Pro reserves the right to update product specifications,
            pricing, and availability without notice. Imagery and renderings are
            representative only.
          </p>
          <p className="text-on-surface-variant/60 text-sm">
            For legal inquiries, contact:{" "}
            <span className="font-mono text-on-surface">legal@ionguard.pro</span>
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}
