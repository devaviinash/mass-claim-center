import { ArrowRight, Award, BookOpen, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
   return (
      <>
         <section className="pt-32 pb-20 relative bg-gradient-to-r from-blue-900 to-indigo-900">
            <div className="absolute inset-0 opacity-10 bg-[url('/patterns/circuit-board.svg')]"></div>
            <div className="container mx-auto px-4 md:px-6 relative">
               <div className="text-center max-w-3xl mx-auto text-white">
                  <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
                     About Mass Claim Center
                  </h1>
                  <p className="text-xl text-blue-100 mb-8">
                     Dedicated to connecting individuals with the justice and
                     compensation they deserve.
                  </p>
               </div>
            </div>
         </section>

         {/* Our Story */}
         <section className="py-20 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                     <div className="inline-block bg-blue-100 dark:bg-blue-900/30 px-4 py-1 rounded-full mb-4">
                        <p className="text-blue-700 dark:text-blue-300 font-medium text-sm">
                           Our Story
                        </p>
                     </div>
                     <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                        A Commitment to Justice
                     </h2>
                     <div className="space-y-4 text-gray-600 dark:text-gray-300">
                        <p>
                           Mass Claim Center was founded with a singular
                           mission: to provide exceptional legal representation
                           to individuals who have been wronged by corporations.
                           For over long time, we've been at the forefront of
                           some of the most significant mass tort and class
                           action litigation in the country.
                        </p>
                        <p>
                           Our firm began with just three attorneys passionate
                           about consumer rights. Today, we've grown into a
                           nationwide network of legal experts, but our core
                           values remain unchanged: integrity, expertise, and
                           unwavering dedication to our clients.
                        </p>
                        <p>
                           We believe that every individual deserves access to
                           justice, regardless of their financial resources or
                           standing against powerful corporate interests. This
                           belief drives everything we do, from our contingency
                           fee structure to our tireless advocacy for victims'
                           rights.
                        </p>
                     </div>
                     <div className="mt-8">
                        <Button asChild>
                           <Link href="/contact">
                              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                           </Link>
                        </Button>
                     </div>
                  </div>
                  <div className="relative">
                     <img
                        src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Mass Claim Center team"
                        className="rounded-lg shadow-xl w-full h-auto"
                     />
                     <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hidden md:block">
                        <p className="font-semibold">3+ Years of Experience</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Mission & Values */}
         <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
               <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="inline-block bg-blue-100 dark:bg-blue-900/30 px-4 py-1 rounded-full mb-4">
                     <p className="text-blue-700 dark:text-blue-300 font-medium text-sm">
                        Our Mission & Values
                     </p>
                  </div>
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
                     What Drives Us Forward
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                     Our core values shape every aspect of our practice and
                     guide our approach to client representation.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                     <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                        <BookOpen className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                     </div>
                     <h3 className="font-playfair text-xl font-bold mb-4">
                        Our Mission
                     </h3>
                     <p className="text-gray-600 dark:text-gray-300">
                        To provide exceptional legal representation, support,
                        and guidance to individuals who have been wronged by
                        corporations, connecting them with the compensation they
                        deserve while holding companies accountable for their
                        actions.
                     </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                     <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                        <Award className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                     </div>
                     <h3 className="font-playfair text-xl font-bold mb-4">
                        Our Vision
                     </h3>
                     <p className="text-gray-600 dark:text-gray-300">
                        To create a more just society where corporations are
                        held to the highest standards of responsibility and
                        where every individual has access to quality legal
                        representation, regardless of their financial resources.
                     </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                     <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                        <Users className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                     </div>
                     <h3 className="font-playfair text-xl font-bold mb-4">
                        Our Values
                     </h3>
                     <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                        <li className="flex items-start">
                           <Check className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" />
                           <span>
                              Integrity in all actions and communications
                           </span>
                        </li>
                        <li className="flex items-start">
                           <Check className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" />
                           <span>Compassion for our clients' situations</span>
                        </li>
                        <li className="flex items-start">
                           <Check className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" />
                           <span>Excellence in legal representation</span>
                        </li>
                        <li className="flex items-start">
                           <Check className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" />
                           <span>
                              Accountability to our clients and community
                           </span>
                        </li>
                        <li className="flex items-start">
                           <Check className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" />
                           <span>Perseverance in the pursuit of justice</span>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </section>

         {/* Team Section */}
         <section className="py-20 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
               <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="inline-block bg-blue-100 dark:bg-blue-900/30 px-4 py-1 rounded-full mb-4">
                     <p className="text-blue-700 dark:text-blue-300 font-medium text-sm">
                        Our Team
                     </p>
                  </div>
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
                     Meet Our Legal Experts
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                     Our team of experienced attorneys is dedicated to fighting
                     for your rights and securing the compensation you deserve.
                  </p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                     {
                        name: "Elizabeth Chambers",
                        role: "Managing Partner",
                        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                        bio: "With over 20 years of experience in mass tort litigation, Elizabeth leads our firm with expertise and compassion.",
                     },
                     {
                        name: "Michael Rodriguez",
                        role: "Senior Attorney",
                        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
                        bio: "Michael specializes in pharmaceutical litigation and has successfully represented thousands of clients against major corporations.",
                     },
                     {
                        name: "Sarah Washington",
                        role: "Case Manager",
                        image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                        bio: "Sarah's organizational skills and attention to detail ensure that every client receives personalized attention throughout their case.",
                     },
                     {
                        name: "James Patterson",
                        role: "Legal Strategist",
                        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
                        bio: "James develops innovative legal strategies that have resulted in landmark settlements for our clients.",
                     },
                  ].map((member, index) => (
                     <div
                        key={index}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col h-[350px]"
                     >
                        <div className="flex justify-center pt-6">
                           <img
                              src={member.image}
                              alt={member.name}
                              className="w-32 h-32 rounded-full object-cover object-center border-4 border-blue-100 dark:border-blue-900"
                           />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                           <h3 className="font-playfair text-xl font-bold mb-1 text-gray-900 dark:text-white">
                              {member.name}
                           </h3>
                           <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                              {member.role}
                           </p>
                           <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-4">
                              {member.bio}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <section className="py-20 bg-blue-900 text-white">
            <div className="container mx-auto px-4 md:px-6">
               <div className="max-w-3xl mx-auto text-center">
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                     Ready to Seek Justice?
                  </h2>
                  <p className="text-xl text-blue-100 mb-8">
                     Contact Mass Claim Center today for a free consultation
                     about your case. We're here to help you get the
                     compensation you deserve.
                  </p>
                  <Button
                     asChild
                     size="lg"
                     className="bg-white text-blue-900 hover:bg-blue-50"
                  >
                     <Link href="/contact">
                        Get a Free Consultation{" "}
                        <ArrowRight className="ml-2 h-5 w-5" />
                     </Link>
                  </Button>
               </div>
            </div>
         </section>
      </>
   );
}
