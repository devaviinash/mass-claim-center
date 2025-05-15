import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const faqCategories = [
  {
    category: "General Questions",
    faqs: [
      {
        question: "How do I know if I have a valid legal claim?",
        answer: "The validity of a legal claim depends on several factors, including the nature of your injury, the circumstances under which it occurred, and applicable laws. During a free consultation, our attorneys will evaluate your case, assess its merits, and advise you on the potential for a successful claim."
      },
      {
        question: "How much does it cost to hire Mass Claim Center?",
        answer: "We work on a contingency fee basis, which means you pay nothing unless we win your case. Our fee is a percentage of the settlement or verdict amount, which we'll discuss clearly before you sign any agreement. There are no upfront costs or hourly fees."
      },
      {
        question: "How long will my case take to resolve?",
        answer: "The timeline for resolving legal claims varies widely depending on the complexity of the case, the willingness of the opposing party to negotiate, and court schedules. Some cases settle in a few months, while others, especially those that go to trial, may take years. We strive to resolve cases efficiently while maximizing your compensation."
      },
      {
        question: "Will I have to go to court?",
        answer: "Many cases settle through negotiation without going to trial. However, if the opposing party doesn't offer a fair settlement, we are fully prepared to take your case to court. We'll guide you through every step of the process and ensure you're well-prepared if court appearances are necessary."
      }
    ]
  },
  {
    category: "Mass Tort and Class Actions",
    faqs: [
      {
        question: "How do mass tort claims differ from class action lawsuits?",
        answer: "While both involve multiple plaintiffs, in a class action, all plaintiffs are treated as one entity and receive equal compensation. In mass tort litigation, each plaintiff's case is evaluated individually, and compensation is based on the specific damages they suffered. This approach often results in more tailored compensation reflecting the unique impact on each person."
      },
      {
        question: "Do I need to join a class action if I've been harmed by a product?",
        answer: "Not necessarily. Depending on your circumstances, an individual lawsuit might be more appropriate. During your consultation, we'll evaluate your situation and recommend the most advantageous legal approach, whether that's joining a class action, participating in mass tort litigation, or pursuing an individual claim."
      },
      {
        question: "How long do mass tort cases typically take?",
        answer: "Mass tort cases generally take longer than individual cases due to their complexity and the number of plaintiffs involved. These cases often take 2-5 years or more to resolve, though some plaintiffs may receive settlements earlier in the process. We'll provide you with realistic timelines based on the specific circumstances of your case."
      },
      {
        question: "If I join a mass tort, will I have my own attorney?",
        answer: "Yes. While mass tort litigation involves many plaintiffs, each client at Mass Claim Center has their own attorney who represents their specific interests. Your attorney will handle your individual case within the larger litigation, ensuring your unique circumstances are properly addressed."
      }
    ]
  },
  {
    category: "Compensation and Damages",
    faqs: [
      {
        question: "What types of compensation can I receive for my injury?",
        answer: "Compensation may include economic damages (medical expenses, lost wages, future medical costs) and non-economic damages (pain and suffering, emotional distress, loss of enjoyment of life). In some cases, punitive damages may be awarded to punish particularly egregious conduct by the defendant."
      },
      {
        question: "How is the value of my case determined?",
        answer: "The value of your case depends on multiple factors: the severity of your injuries, impact on your quality of life, economic losses (medical bills, lost wages), non-economic damages (pain and suffering), the strength of evidence, applicable laws, and the defendant's conduct. We'll work with experts to fully assess your damages and pursue maximum compensation."
      },
      {
        question: "Will accepting a settlement affect my benefits?",
        answer: "Settlement payments may affect certain government benefits like Medicaid, SSI, or other needs-based programs. We'll advise you on potential impacts and might recommend options like special needs trusts to protect your benefits eligibility while still receiving compensation."
      },
      {
        question: "Are settlement payments taxable?",
        answer: "Generally, compensation for physical injuries or illness is not taxable under federal law. However, portions of your settlement related to emotional distress without physical injury, punitive damages, or interest may be taxable. We recommend consulting with a tax professional about your specific situation."
      }
    ]
  },
  {
    category: "Working With Mass Claim Center",
    faqs: [
      {
        question: "How do I get started with Mass Claim Center?",
        answer: "Getting started is simple: contact us for a free consultation by phone, email, or through our website. During this initial consultation, we'll discuss your situation, evaluate the potential of your case, and explain how we can help. If you decide to move forward, we'll handle all the necessary paperwork to begin representing you."
      },
      {
        question: "How will you keep me updated about my case?",
        answer: "We maintain regular communication with our clients throughout the legal process. You'll receive updates on significant developments in your case, and your attorney will be available to answer questions and address concerns. We can communicate through your preferred method—phone, email, or in-person meetings."
      },
      {
        question: "Can you represent me if I don't live near your office?",
        answer: "Yes, we represent clients nationwide. Much of our communication and case preparation can be handled remotely, and we can arrange for local counsel when necessary for court appearances in your jurisdiction. If you've been harmed by a defective product or corporate misconduct, we can help regardless of your location."
      },
      {
        question: "What sets Mass Claim Center apart from other law firms?",
        answer: "Mass Claim Center combines the resources and experience of a large firm with the personalized attention of a boutique practice. Our attorneys have decades of experience in mass tort and complex litigation, a track record of significant recoveries for our clients, and a commitment to treating each client with compassion and respect."
      }
    ]
  }
]

export default function FAQsPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="absolute inset-0 opacity-10 bg-[url('/patterns/circuit-board.svg')]"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center max-w-3xl mx-auto text-white">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find answers to common questions about our services and the legal process.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Sidebar (Category Navigation) */}
              <div className="md:col-span-1">
                <div className="sticky top-24">
                  <h3 className="font-playfair text-lg font-bold mb-4">Categories</h3>
                  <nav className="space-y-2">
                    {faqCategories.map((category, index) => (
                      <a 
                        key={index}
                        href={`#${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block py-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                      >
                        {category.category}
                      </a>
                    ))}
                  </nav>
                  
                  <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h4 className="font-semibold mb-2">Have more questions?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Contact us directly for personalized answers to your specific situation.
                    </p>
                    <Button asChild size="sm" className="w-full">
                      <Link href="/contact">
                        Contact Us
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* FAQ Content */}
              <div className="md:col-span-3">
                <div className="space-y-12">
                  {faqCategories.map((category, categoryIndex) => (
                    <div 
                      key={categoryIndex}
                      id={category.category.toLowerCase().replace(/\s+/g, '-')}
                      className="scroll-mt-24"
                    >
                      <h2 className="font-playfair text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                        {category.category}
                      </h2>
                      
                      <Accordion type="single" collapsible className="w-full">
                        {category.faqs.map((faq, faqIndex) => (
                          <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                            <AccordionTrigger className="text-left font-medium text-lg">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 dark:text-gray-300">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Our legal team is ready to answer any questions you may have about your specific situation. Contact us today for a free, no-obligation consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}