import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slamet Ikhvan Nurhana Rifki | Software Developer",
  description:
    "Portfolio Software Developer dengan fokus Mobile & Web Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
