import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "York Summer Guide",
  description:
    "A summer guide for York City, Pennsylvania with parks, programs, events, and resident resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
