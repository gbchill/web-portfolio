import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import ThemeSwitch from "@/components/Theme-Switch";
import DynamicBackground from '@/components/ui/DynamicBackground'
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "George | Portfolio",
  description: "Showcasing projects and skills in full-stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/gb-logo.png" sizes="any" />
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative mx-auto dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {/* Dynamic animated background */}
          <DynamicBackground />

          <ActiveSectionContextProvider>
               {children}
              <ThemeSwitch/>
           </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}