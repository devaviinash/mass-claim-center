"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
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
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <header
         className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
            isScrolled
               ? "bg-white/80 backdrop-blur-lg shadow-sm dark:bg-gray-900/90"
               : "bg-gradient-to-b from-black/30 to-transparent"
         )}
      >
         <div className="container mx-auto px-4 md:px-6">
            <nav className="flex items-center justify-between h-16 md:h-20">
               <Link href="/" className="flex items-center space-x-3">
                  <Image
                     src="/icon.png"
                     alt="Mass Claim Center Logo"
                     width={32}
                     height={32}
                     className="w-10 h-10"
                  />
                  <span
                     className={cn(
                        "font-playfair text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300",
                        isScrolled
                           ? "text-gray-900 dark:text-white"
                           : "text-white"
                     )}
                  >
                     Mass Claim Center
                  </span>
               </Link>

               {/* Desktop Navigation */}
               <div className="hidden md:flex items-center space-x-1">
                  {navLinks.map((link) => (
                     <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                           "px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200",
                           isScrolled
                              ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100/80 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800/50"
                              : "text-gray-100 hover:text-white hover:bg-white/10"
                        )}
                     >
                        {link.label}
                     </Link>
                  ))}
               </div>

               {/* Mobile Menu Button */}
               <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={cn(
                     "md:hidden p-2 rounded-md transition-colors duration-200",
                     isScrolled
                        ? "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                        : "text-white hover:bg-white/10"
                  )}
               >
                  {isOpen ? (
                     <X className="h-6 w-6" />
                  ) : (
                     <Menu className="h-6 w-6" />
                  )}
               </button>
            </nav>
         </div>

         {/* Mobile Navigation */}
         {isOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
               <div className="container mx-auto px-4 py-4 space-y-2">
                  {navLinks.map((link) => (
                     <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                        onClick={() => setIsOpen(false)}
                     >
                        {link.label}
                     </Link>
                  ))}
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                     Free Consultation
                  </Button>
               </div>
            </div>
         )}
      </header>
   );
}
