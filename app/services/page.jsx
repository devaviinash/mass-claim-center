import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const services = [
  {
    id: 1,
    title: "Personal Injury Claims",
    icon: "🏥",
    iconBg: "bg-red-100 dark:bg-red-900/30",
    iconColor: "text-red-600 dark:text-red-400",
    description: "Our personal injury legal team specializes in representing individuals who have suffered injuries due to the negligence or misconduct of others. We handle cases ranging from auto accidents and workplace injuries to slip and falls and medical malpractice. Our attorneys work diligently to ensure you receive fair compensation for medical expenses, lost wages, pain and suffering, and other damages related to your injury.",
    cases: [
      "Auto and truck accidents",
      "Workplace injuries",
      "Slip and fall incidents",
      "Negligent security",
      "Wrongful death"
    ]
  },
  {
    id: 2,
    title: "Mass Tort Litigation",
    icon: "⚖️",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    description: "Mass tort litigation involves numerous plaintiffs with similar claims against one or more corporate defendants. Our firm has extensive experience handling mass tort cases, including those involving defective drugs, medical devices, toxic exposures, and consumer products. We utilize our resources and expertise to build strong cases for our clients, helping them secure compensation for injuries caused by corporate negligence.",
    cases: [
      "Defective pharmaceutical drugs",
      "Dangerous medical devices",
      "Toxic chemical exposure",
      "Defective consumer products",
      "Environmental contamination"
    ]
  },
  {
    id: 3,
    title: "Product Liability",
    icon: "🛒",
    iconBg: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600 dark:text-green-400",
    description: "Our product liability attorneys represent individuals harmed by dangerous or defective products. We hold manufacturers, distributors, and sellers accountable when their products cause injury due to design flaws, manufacturing defects, or inadequate warnings. Our team has successfully litigated cases involving pharmaceutical drugs, medical devices, automobiles, household products, and more, securing significant compensation for our clients.",
    cases: [
      "Design defects",
      "Manufacturing defects",
      "Failure to warn",
      "Breach of warranty",
      "Marketing misrepresentation"
    ]
  },
  {
    id: 4,
    title: "Environmental Law",
    icon: "🌱",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    description: "Our environmental law practice represents individuals and communities affected by environmental contamination, pollution, and toxic exposures. We pursue legal action against corporations responsible for environmental damage that affects public health and property values. Our attorneys have expertise in cases involving water contamination, air pollution, improper waste disposal, and other environmental hazards.",
    cases: [
      "Water contamination",
      "Air pollution",
      "Toxic waste disposal",
      "Chemical exposure",
      "Property damage from pollution"
    ]
  },
  {
    id: 5,
    title: "Medical Malpractice",
    icon: "🩺",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400",
    description: "Our medical malpractice attorneys represent patients harmed by negligent medical care. We hold healthcare providers accountable when they fail to meet the standard of care, resulting in patient injury or death. Our team handles cases involving surgical errors, misdiagnosis, medication mistakes, birth injuries, and more. We work with medical experts to build strong cases for our clients, seeking compensation for additional medical expenses, lost income, pain and suffering, and other damages.",
    cases: [
      "Surgical errors",
      "Misdiagnosis or delayed diagnosis",
      "Medication errors",
      "Birth injuries",
      "Anesthesia errors"
    ]
  },
  {
    id: 6,
    title: "Consumer Protection",
    icon: "🛡️",
    iconBg: "bg-amber-100 dark:bg-amber-900/30",
    iconColor: "text-amber-600 dark:text-amber-400",
    description: "Our consumer protection practice focuses on protecting individuals from deceptive business practices, fraud, and unfair treatment by corporations. We represent clients in cases involving false advertising, predatory lending, unfair debt collection, privacy violations, and other consumer rights issues. Our attorneys are committed to holding companies accountable for unethical business practices and helping consumers recover financial losses.",
    cases: [
      "False advertising",
      "Predatory lending",
      "Unfair debt collection",
      "Privacy violations",
      "Unfair business practices"
    ]
  }
]

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="absolute inset-0 opacity-10 bg-[url('/patterns/circuit-board.svg')]"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center max-w-3xl mx-auto text-white">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Our Legal Services
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive legal representation for victims of corporate wrongdoing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              How We Help
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Mass Claim Center provides comprehensive legal services to individuals who have been harmed by corporate negligence or misconduct. Our experienced attorneys specialize in a variety of practice areas, leveraging their expertise to secure maximum compensation for our clients.
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className={`w-14 h-14 rounded-full ${service.iconBg} flex items-center justify-center text-2xl mr-4`}>
                      <span className={service.iconColor}>{service.icon}</span>
                    </div>
                    <h3 className="font-playfair text-2xl md:text-3xl font-bold">{service.title}</h3>
                  </div>
                  
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>{service.description}</p>
                    
                    <div className="mt-6">
                      <h4 className="font-semibold text-lg mb-3">Types of Cases We Handle:</h4>
                      <ul className="space-y-2">
                        {service.cases.map((caseItem, caseIndex) => (
                          <li key={caseIndex} className="flex items-start">
                            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                            <span>{caseItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4">
                      <Button asChild>
                        <Link href="/contact">
                          Discuss Your Case <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img 
                    src={`https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`} 
                    alt={service.title} 
                    className="rounded-lg shadow-xl w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hidden md:block">
                    <p className="font-semibold">Free Consultation</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Our Legal Process
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We guide you through every step of your legal journey, from initial consultation to case resolution.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900/30"></div>
              
              {/* Timeline steps */}
              <div className="space-y-12">
                {[
                  {
                    title: "Free Consultation",
                    description: "We begin with a comprehensive consultation to understand your case. Our attorneys will evaluate the merits of your claim and explain your legal options."
                  },
                  {
                    title: "Case Investigation",
                    description: "Our team conducts a thorough investigation, gathering evidence, interviewing witnesses, and consulting with experts to build a strong foundation for your case."
                  },
                  {
                    title: "Legal Strategy Development",
                    description: "Based on our investigation, we develop a tailored legal strategy designed to maximize your compensation and achieve the best possible outcome."
                  },
                  {
                    title: "Negotiation & Settlement",
                    description: "We engage in negotiations with the opposing party, seeking a fair settlement that fully addresses your damages without the need for trial."
                  },
                  {
                    title: "Trial Representation",
                    description: "If a fair settlement cannot be reached, our trial attorneys provide powerful courtroom representation, presenting your case persuasively to judge and jury."
                  },
                  {
                    title: "Case Resolution & Recovery",
                    description: "Upon successful resolution of your case, we ensure you receive your compensation promptly and address any post-settlement matters."
                  }
                ].map((step, index) => (
                  <div key={index} className="relative">
                    <div className={`flex items-center md:justify-center ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}>
                      <div className="md:w-1/2 md:px-8">
                        <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg ${
                          index % 2 === 0 ? 'md:text-right' : ''
                        }`}>
                          <h3 className="font-playfair text-xl font-bold mb-3">{step.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                        </div>
                      </div>
                      
                      <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold border-4 border-white dark:border-gray-900">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Ready to Discuss Your Case?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Mass Claim Center today for a free, no-obligation consultation with our legal experts.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Link href="/contact">
                Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}