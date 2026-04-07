import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Engineering",
  description:
    "Connect with the IonGuard Pro engineering team. Get technical support, request a quote, or initiate a consultation for your smart charging cabinet project.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
