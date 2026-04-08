import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact Engineering" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Protocol" },
  { href: "/terms", label: "Terms of Operation" },
];

export function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="font-black text-primary-container uppercase tracking-tighter text-xl mb-6 font-headline">
              IONGUARD PRO
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-400 max-w-xs leading-relaxed">
              © {new Date().getFullYear()} IonGuard Pro. Engineered for Kinetic
              Precision. Designed for total containment and architectural
              integration.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-label text-xs uppercase tracking-[0.2em] text-neutral-300 mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mono text-sm uppercase tracking-[0.15em] text-neutral-400 hover:text-primary-container transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-label text-xs uppercase tracking-[0.2em] text-neutral-300 mb-6">
              Legal
            </h4>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mono text-sm uppercase tracking-[0.15em] text-neutral-400 hover:text-primary-container transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-label text-xs uppercase tracking-[0.2em] text-neutral-400 text-center md:text-left">
            Intelligent. Secure. Sustainable.
          </p>
          
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-neutral-500 text-center">
            Created by{" "}
            <a
              href="https://www.moihanatech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-container hover:text-white transition-colors duration-300 font-bold"
            >
              MoiHanaTech
            </a>
          </p>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container" />
            </span>
            <span className="font-mono text-xs text-primary-fixed-dim uppercase tracking-widest">
              Systems Online
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
