import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatbotWidget } from "@/components/ChatbotWidget";

export const metadata: Metadata = {
  title: {
    default: "IonGuard Pro | Intelligent. Secure. Sustainable.",
    template: "%s | IonGuard Pro",
  },
  description:
    "Industrial-grade smart charging cabinets with advanced thermal runaway isolation, intelligent power management, and architectural-grade design. Engineered for total safety.",
  keywords: [
    "smart charging cabinet",
    "thermal runaway isolation",
    "battery safety",
    "fire suppression",
    "lithium battery storage",
    "intelligent charging",
    "industrial safety",
  ],
  openGraph: {
    title: "IonGuard Pro | Intelligent. Secure. Sustainable.",
    description:
      "Industrial-grade smart charging cabinets with advanced thermal runaway isolation and intelligent power management.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Roboto+Mono:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Material Symbols */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* Video Preload */}
        <link
          rel="preload"
          href="/video/Lithium_batteries_Fire.mp4"
          as="video"
          type="video/mp4"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Eagerly fetch and cache the hero video
              if (typeof window !== 'undefined') {
                const vid = document.createElement('video');
                vid.preload = 'auto';
                vid.src = '/video/Lithium_batteries_Fire.mp4';
                vid.load();
              }
            `,
          }}
        />
      </head>
      <body className="bg-surface text-on-surface antialiased" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}
