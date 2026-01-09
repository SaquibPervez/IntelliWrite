import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IntelliWrite AI",
  description: "Your AI-Powered Job Application Assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased bg-[radial-gradient(1000px_500px_at_10%_-10%,rgba(99,102,241,0.25),transparent),radial-gradient(800px_400px_at_90%_0%,rgba(6,182,212,0.25),transparent),linear-gradient(180deg,#0b1220,#0f172a)]`} 
      >
        {children}
      </body>
    </html>
  );
}
