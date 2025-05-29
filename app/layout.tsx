import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Script from "next/script";
import Er from "@/components/sections/Er";

const inter = Inter({
   subsets: ["latin"],
   display: "swap",
   variable: "--font-inter",
   preload: true,
   adjustFontFallback: true,
});

const playfair = Playfair_Display({
   subsets: ["latin"],
   display: "swap",
   variable: "--font-playfair",
   preload: true,
   adjustFontFallback: true,
});

export const metadata: Metadata = {
   title: "Mass Claim Center | Legal Marketing Firm",
   description:
      "Mass Claim Center is dedicated to connecting individuals who have been wronged by corporations with the compensation they deserve.",
   icons: {
      icon: "/icon.png",
   },
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en" suppressHydrationWarning>
         <head>{/* TrustedForm script removed from here */}</head>
         <body className={`${inter.variable} ${playfair.variable} font-sans`}>
            <ThemeProvider
               attribute="class"
               defaultTheme="light"
               enableSystem
               disableTransitionOnChange
            >
               <NavBar />
               <main>{children}</main>
               <Footer />
               <Toaster />
            </ThemeProvider>
         </body>
      </html>
   );
}
