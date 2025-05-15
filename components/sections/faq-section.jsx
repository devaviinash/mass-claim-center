"use client"

import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"

const faqs = [
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
  },
  {
    question: "How do mass tort claims differ from class action lawsuits?",
    answer: "While both involve multiple plaintiffs, in a class action, all plaintiffs are treated as one entity and receive equal compensation. In mass tort litigation, each plaintiff's case is evaluated individually, and compensation is based on the specific damages they suffered. This approach often results in more tailored compensation reflecting the unique impact on each person."
  },
  {
    question: "What types of compensation can I receive for my injury?",
    answer: "Compensation may include economic damages (medical expenses, lost wages, future medical costs) and non-economic damages (pain and suffering, emotional distress, loss of enjoyment of life). In some cases, punitive damages may be awarded to punish particularly egregious conduct by the defendant."
  }
]

export default function FAQSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-blue-600 dark:text-blue-400">Questions</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our services and the legal process.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
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
      </div>
    </section>
  )
}