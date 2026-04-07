import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore the full IonGuard Pro product catalog — precision-engineered smart charging cabinets with advanced thermal runaway isolation for residential, commercial, and industrial applications.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
