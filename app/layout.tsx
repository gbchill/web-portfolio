import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import ThemeSwitch from "@/components/Theme-Switch";
import Background from "@/components/ui/Background";
import ActiveSectionContextProvider from "@/context/active-section-context";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-grotesk",
});
const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "George Badulescu | Software Engineer",
  description: "Computer Science student at ASU and software engineer with experience in full-stack development, cloud computing, and AI/ML. Built enterprise solutions at Medtronic and award-winning projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${grotesk.variable} ${mono.variable} font-sans relative`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Background />
          <ActiveSectionContextProvider>
            {children}
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}