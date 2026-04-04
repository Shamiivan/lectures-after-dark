import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lectures After Dark CMS",
  description: "Self-hosted Payload CMS for Lectures After Dark.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

