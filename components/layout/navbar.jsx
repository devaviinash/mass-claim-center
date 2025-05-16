"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
   { href: "/", label: "Home" },
   { href: "/services", label: "Services" },
   { href: "/about", label: "About" },
   { href: "/contact", label: "Contact" },
];

export default function NavBar() {
   const [isOpen, setIsOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 10) {
            setIsScrolled(true);
         } else {
            setIsScrolled(false);
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <header
         className={cn(
            "fixed top-0 left-0 right-0 m-2 rounded-lg z-50 transition-all duration-300",
            isScrolled
               ? "bg-white/40 dark:bg-gray-900/95 backdrop-blur-lg shadow-md py-3"
               : "bg-transparent py-5"
         )}
      >
         <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between">
               <Link href="/" className="flex items-center space-x-2">
                  <h1 className="font-playfair text-2xl font-bold text-primary">
                     <span
                        className={cn(
                           "transition-colors duration-300",
                           isScrolled ? "text-primary" : "text-white"
                        )}
                     >
                        Mass Claim Center
                     </span>
                  </h1>
               </Link>

               {/* Desktop Nav */}
               <nav className="hidden md:flex items-center space-x-8">
                  {navLinks.map((link) => (
                     <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                           "text-sm font-medium transition-colors hover:text-primary",
                           isScrolled
                              ? "text-gray-700 dark:text-gray-200"
                              : "text-white/90 hover:text-white"
                        )}
                     >
                        {link.label}
                     </Link>
                  ))}
                  <Button size="sm" className="ml-4">
                     Free Consultation
                  </Button>
               </nav>

               {/* Mobile Nav Toggle */}
               <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden p-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                  aria-label="Toggle Menu"
               >
                  {isOpen ? (
                     <X className="h-6 w-6" />
                  ) : (
                     <Menu
                        className={cn(
                           "h-6 w-6 transition-colors duration-300",
                           isScrolled
                              ? "text-gray-700 dark:text-gray-200"
                              : "text-white"
                        )}
                     />
                  )}
               </button>
            </div>
         </div>

         {/* Mobile Nav */}
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
               >
                  <div className="container mx-auto px-4 py-4">
                     <nav className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                           <Link
                              key={link.href}
                              href={link.href}
                              className="text-gray-700 dark:text-gray-300 hover:text-primary hover:dark:text-primary px-4 py-2 rounded-md"
                              onClick={() => setIsOpen(false)}
                           >
                              {link.label}
                           </Link>
                        ))}
                        <Button className="mt-2">Free Consultation</Button>
                     </nav>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </header>
   );
}
