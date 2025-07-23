import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alejandro González's Portfolio",
  description: "Senior Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <header className="py-4 border-b border-lime-950">
          <div className="flex justify-center space-x-4">
            <nav className="flex items-center space-x-4">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Projects", "/projects"],
              ].map(([name, href]) => (
                <Link
                  key={name}
                  href={href}
                  className="font-semibold text-foreground hover:text-lime-300 transition-colors px-3 py-2"
                >
                  {name}
                </Link>
              ))}
            </nav>
            <input
              type="search"
              placeholder="Search..."
              className="px-3 py-2 rounded bg-lime-950"
            />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
