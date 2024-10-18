import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import ThemeSwitch from "@/components/Theme-Switch";
import { Spotlight } from '@/components/ui/Spotlight'
import ThemeContextProvider from "@/context/theme-context";
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
        className={`${inter.className} bg-gray-50 text-gray-950 relative overflow-x-hidden mx-auto dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
        <div>
          <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="blue" />
          <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="white" />
          <Spotlight className='top-40 left-full h-[80vh] w-[50vw]' fill="blue" />
          <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="white" />
        </div>
          <ActiveSectionContextProvider>   
               {children}
              <ThemeSwitch/>
           </ActiveSectionContextProvider>
          </ThemeContextProvider>
      </body>
    </html>
  );
}