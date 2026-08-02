import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") ?? incoming.get("host");
  const protocol = incoming.get("x-forwarded-proto") ?? (host?.includes("localhost") ? "http" : "https");
  const origin = host ? `${protocol}://${host}` : undefined;
  const socialImage = origin ? `${origin}/og.png` : undefined;

  return {
    title: "Prigod Games — Worlds worth fighting for",
    description: "Independent multiplayer adventures where every role matters. Discover Project Overlord, now in development.",
    icons: { icon: "/prigod-crest.png", shortcut: "/prigod-crest.png" },
    openGraph: {
      title: "Prigod Games",
      description: "Small worlds. Big consequences.",
      type: "website",
      url: origin,
      images: socialImage ? [{ url: socialImage, width: 1200, height: 630, alt: "Prigod Games — Small worlds. Big consequences." }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: "Prigod Games",
      description: "Small worlds. Big consequences.",
      images: socialImage ? [socialImage] : undefined,
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
