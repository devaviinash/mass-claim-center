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
});

const playfair = Playfair_Display({
   subsets: ["latin"],
   display: "swap",
   variable: "--font-playfair",
});

export const metadata: Metadata = {
   title: "Mass Claim Center | Legal Marketing Firm",
   description:
      "Mass Claim Center is dedicated to connecting individuals who have been wronged by corporations with the compensation they deserve.",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en" suppressHydrationWarning>
         <head>
            <script
               type="text/javascript"
               dangerouslySetInnerHTML={{
                  __html: `
              (function() {
                var tf = document.createElement('script');
                tf.type = 'text/javascript';
                tf.async = true;
                tf.src = ("https:" == document.location.protocol ? 'https' : 'http') +
                  '://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&use_tagged_consent=true&l=' +
                  new Date().getTime() + Math.random();
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(tf, s);
              })();
            `,
               }}
            />
            <noscript>
               <img src="https://api.trustedform.com/ns.gif" alt="" />
            </noscript>
         </head>
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
