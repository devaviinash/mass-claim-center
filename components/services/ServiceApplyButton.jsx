"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServiceApplyButton({ service }) {
   return (
      <Button
         className="bg-blue-600 hover:bg-blue-700 text-white transition-colors"
         asChild
      >
         <Link href={`/services/${service.slug}`}>Apply Now</Link>
      </Button>
   );
}
