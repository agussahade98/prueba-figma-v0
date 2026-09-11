import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prueba Figma v0",
  description: "Next.js starter ready for v0 and Vercel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
