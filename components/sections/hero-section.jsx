"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
   return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
         {/* Background with gradient and pattern */}
         <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 z-0">
            <div className="absolute inset-0 opacity-10 bg-[url('/patterns/circuit-board.svg')]"></div>
         </div>

         {/* Content */}
         <div className="container mx-auto px-4 md:px-6 relative z-10 pt-16 md:pt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center lg:text-left"
               >
                  <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                     Seeking Justice <br className="hidden md:block" />
                     <span className="text-blue-300">
                        For Those Who Deserve It
                     </span>
                  </h1>
                  <p className="text-xl text-blue-100 mb-8 max-w-xl mx-auto lg:mx-0">
                     Mass Claim Center connects individuals wronged by
                     corporations with the compensation they deserve. We're
                     committed to fighting for your rights.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                     <Button asChild size="lg" className="text-lg px-8">
                        <Link href="/contact">
                           Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                     </Button>
                     <Button
                        variant="outline"
                        size="lg"
                        className="text-lg px-8 bg-transparent border-white text-white hover:bg-white/10"
                     >
                        <Link href="/services">Our Services</Link>
                     </Button>
                  </div>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative hidden lg:block"
               >
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
                     <img
                        src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Legal professionals"
                        className="w-full h-auto rounded-lg shadow-lg"
                     />
                     <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg">
                        <p className="font-semibold">30+ Years of Experience</p>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
}
