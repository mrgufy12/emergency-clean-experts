import { Link } from 'react-router-dom';
import { Phone, ArrowLeft, ChevronDown } from 'lucide-react';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <h3 className="font-semibold text-gray-900 text-lg pr-8">{question}</h3>
        <ChevronDown
          className={`w-6 h-6 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Frequently Asked Questions - Emergency Clean Experts';

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Find answers to common questions about emergency restoration, water damage, mold remediation, insurance claims, and more.';

    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, []);

  const faqs = [
    {
      question: "How much does remediation cost?",
      answer: "Costs vary based on the type of damage, size of the area, and severity. Some projects are a few hundred dollars, while others can be several thousand. We assess first, then provide clear pricing."
    },
    {
      question: "Does insurance cover remediation services?",
      answer: "Sometimes. Coverage depends on the cause of the damage and your specific policy. Sudden losses are more likely to be covered than long-term issues."
    },
    {
      question: "Should I call insurance first or a remediation company?",
      answer: "You can do either. Many customers call us first so they understand what's going on before opening a claim."
    },
    {
      question: "What qualifies as an insurance-covered water loss?",
      answer: "Typically sudden events like burst pipes or appliance failures. Slow leaks or neglect may not qualify."
    },
    {
      question: "Is mold remediation covered by insurance?",
      answer: "Mold coverage varies widely. Some policies cover mold if it results from a covered water loss."
    },
    {
      question: "Do I need professional remediation?",
      answer: "In most cases, yes. Improper cleanup can make problems worse and may affect insurance eligibility."
    },
    {
      question: "How fast should water damage be addressed?",
      answer: "Immediately. Water damage should be mitigated within 24–48 hours to prevent mold growth."
    },
    {
      question: "Will mold come back after remediation?",
      answer: "If the source of moisture isn't fixed, mold can return. Proper remediation includes addressing the cause."
    },
    {
      question: "Do you work with insurance adjusters?",
      answer: "Yes. We regularly provide documentation and communicate with adjusters as needed."
    },
    {
      question: "Are you a public adjuster?",
      answer: "No. We do not negotiate claims or coverage. We focus on remediation and documentation only."
    },
    {
      question: "What documentation do you provide?",
      answer: "Photos, moisture readings, inspection notes, scopes of work, and remediation reports."
    },
    {
      question: "Can I choose my own remediation company?",
      answer: "Yes. You are not required to use the insurance company's preferred vendor."
    },
    {
      question: "How long does remediation take?",
      answer: "Some jobs take a day, others several days. The timeline depends on the severity and drying requirements."
    },
    {
      question: "Is testing required before remediation?",
      answer: "Not always, but inspections and testing can help determine the scope and cause of the issue."
    },
    {
      question: "What's the difference between mitigation and remediation?",
      answer: "Mitigation stops further damage. Remediation removes and restores affected materials."
    },
    {
      question: "Do you handle emergency and non-emergency jobs?",
      answer: "Yes. We handle both emergency response and scheduled services."
    },
    {
      question: "Can you help renters with mold or water issues?",
      answer: "Yes. We work with tenants, landlords, and property managers."
    },
    {
      question: "Will remediation disrupt my home or business?",
      answer: "Some disruption is unavoidable, but we aim to minimize downtime and keep you informed."
    },
    {
      question: "Are your services safe for children and pets?",
      answer: "Yes. We follow safety protocols and use appropriate containment methods."
    },
    {
      question: "How do I get started?",
      answer: "Call us or request service online. We'll assess your situation and guide you through next steps."
    }
  ];

  return (
    <>
      <div className="bg-slate-800 text-white">
        <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link to="/" className="flex flex-col items-center sm:flex-row sm:items-center gap-3">
              <img
                src="/logo_emergency_clean_experts_copy.png"
                alt="Emergency Clean Experts Logo"
                className="h-16 sm:h-20 w-auto object-contain"
              />
              <div className="text-center sm:text-left">
                <h1 className="text-xl sm:text-2xl font-bold leading-tight">
                  Emergency Clean Experts
                </h1>
                <p className="text-xs sm:text-sm text-gray-300">24/7 Emergency Service</p>
              </div>
            </Link>
            <a
              href="tel:+17869060355"
              className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm sm:text-base">Emergency: (786) 906-0355</span>
            </a>
          </div>
        </nav>
      </div>

      <section className="relative bg-gradient-to-br from-blue-50 via-slate-50 to-gray-50 overflow-hidden">
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 lg:mb-16">
              <Link
                to="/"
                className="inline-flex items-center space-x-2 text-slate-700 hover:text-slate-800 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
            </div>

            <div className="mb-12">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Frequently Asked Questions
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                Find answers to common questions about emergency restoration, water damage, mold remediation, insurance claims, and our services. Can't find what you're looking for? Give us a call.
              </p>
            </div>

            <div className="space-y-4 mb-12">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>

            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl shadow-xl p-8 sm:p-12 text-center text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Still Have Questions?
              </h2>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                Our team is available 24/7 to answer your questions and provide expert guidance for your specific situation.
              </p>
              <a
                href="tel:+17869060355"
                className="inline-flex items-center gap-3 bg-white text-emerald-600 hover:bg-emerald-50 font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
              >
                <Phone className="w-6 h-6" />
                <span>(786) 906-0355</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
