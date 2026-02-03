import { Link } from 'react-router-dom';
import { Phone, ArrowLeft, Heart, Shield, ClipboardList, Sparkles, CheckCircle, Lock, FileSearch, Home } from 'lucide-react';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { useEffect } from 'react';

export default function HoardingCleanupPage() {
  useEffect(() => {
    document.title = 'Compassionate Hoarding Cleanup Miami | Judgment-Free & Discreet | 24/7 - Emergency Clean Experts';

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Reclaim your home with Miami\'s most trusted hoarding cleanup experts. We sort, organize, and deep clean with empathy. Call for a confidential, free estimate.';

    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, []);

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
              <span className="text-sm sm:text-base">Call: (786) 906-0355</span>
            </a>
          </div>
        </nav>
      </div>

      <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/declutter_services.png"
            alt="Professional hoarding cleanup service"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 lg:mb-16">
                <Link
                  to="/"
                  className="inline-flex items-center space-x-2 text-teal-700 hover:text-teal-800 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Home</span>
                </Link>
              </div>

              <div className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-full font-semibold text-sm mb-6">
                <Heart className="w-4 h-4" />
                <span>COMPASSIONATE • CONFIDENTIAL • PROFESSIONAL</span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Compassionate, Non-Judgmental Hoarding Cleanup in Miami
              </h1>

              <p className="text-2xl text-teal-700 font-semibold mb-6">
                You are not alone. We help you sort, clean, and reclaim your life—at your own pace.
              </p>

              <div className="prose prose-lg mb-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Compulsive hoarding is not just about "too much stuff"—it is a complex situation that requires patience,
                  respect, and specialized training. At Emergency Clean Experts, we don't just bring dumpsters; we bring
                  <strong className="text-emerald-700"> compassion</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We understand that inviting a stranger into your home feels impossible right now. That is why our team is
                  trained to work <strong>with you, not against you</strong>. We help you distinguish between trash, treasures,
                  and sentimental items, ensuring you stay in control of the process.
                </p>
              </div>

              <a
                href="tel:+17869060355"
                className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                <span>Get a Free, Confidential Estimate</span>
              </a>
              <p className="text-sm text-gray-600 mt-3 flex items-center space-x-2">
                <Lock className="w-4 h-4" />
                <span>We arrive in unmarked vehicles for your privacy</span>
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Confidential Consultation</h3>
              <p className="text-gray-600 mb-6">Your privacy is our priority • All conversations are confidential</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Shield className="w-16 h-16 text-amber-600 mx-auto mb-6" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why This Requires Professional Help (Not Just "Junk Removal")
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Standard junk removal companies are not equipped to handle the dangers hidden beneath clutter. In many
                hoarding situations (Levels 3, 4, and 5), the environment has become <strong>hazardous to your health</strong>.
                This is not about being cheap—it's about being safe and doing it correctly.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-10 mb-12 border-l-4 border-amber-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Professional Risks We Handle:</h3>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Biohazards & Pathogens',
                    description: 'Animal waste, rodent droppings, spoiled food (Hantavirus, E. coli)',
                    color: 'red'
                  },
                  {
                    title: 'Mold & Structural Damage',
                    description: 'Hidden leaks, rot, and black mold discovered during cleanup',
                    color: 'emerald'
                  },
                  {
                    title: 'Ammonia & Embedded Odors',
                    description: 'Industrial air scrubbers and hydroxyl generators',
                    color: 'blue'
                  },
                  {
                    title: 'Search & Recovery',
                    description: 'Active recovery of valuables, legal documents, photos, and keepsakes',
                    color: 'purple'
                  }
                ].map((risk, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">{risk.title}</h4>
                      <p className="text-gray-700">{risk.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-teal-700 text-white rounded-2xl p-8 text-center">
              <p className="text-xl font-bold mb-3">Here's the truth:</p>
              <p className="text-lg mb-2">
                ✓ If you just want trash removed, junk removal may be cheaper.
              </p>
              <p className="text-lg">
                ✓ If you want your home <strong>restored, sanitized, and treated with care</strong> — this is what we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our 3-Step Hoarding Restoration Process
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                We follow a structured, respectful protocol designed to protect your health, dignity, and personal belongings.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-10 border-l-4 border-teal-600">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <ClipboardList className="w-8 h-8 text-teal-600" />
                      <h3 className="text-2xl font-bold text-gray-900">Assessment & Planning</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-teal-700 mb-3">Free Confidential Assessment</h4>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      We evaluate the space, listen to your concerns, and build a custom plan that respects your emotional
                      limits and timeline. We can also coordinate with family members or code enforcement if needed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-10 border-l-4 border-blue-600">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <FileSearch className="w-8 h-8 text-blue-600" />
                      <h3 className="text-2xl font-bold text-gray-900">Sorting & Organizing</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-blue-700 mb-3">Sorting, Sifting & Organizing</h4>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      We create clearly defined staging areas:
                    </p>
                    <div className="space-y-3 ml-6">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                        <div>
                          <strong className="text-gray-900">Keep:</strong>
                          <span className="text-gray-700"> Items to be cleaned and organized</span>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                        <div>
                          <strong className="text-gray-900">Donate:</strong>
                          <span className="text-gray-700"> Items you wish to donate to local Miami charities</span>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                        <div>
                          <strong className="text-gray-900">Recycle / Dispose:</strong>
                          <span className="text-gray-700"> Trash and hazardous materials removed safely and legally</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-10 border-l-4 border-emerald-600">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <Sparkles className="w-8 h-8 text-emerald-600" />
                      <h3 className="text-2xl font-bold text-gray-900">Deep Cleaning & Sanitization</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-emerald-700 mb-3">Restoration to Medical-Safe Standards</h4>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Once clutter is removed, we deep clean and disinfect the property from ceiling to floor to make the
                      home medically safe and livable again. This includes odor elimination, surface sanitization, and air
                      quality restoration.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl text-gray-700 mb-6">
                Every step is completed at your pace, with your input, and with complete respect for your belongings.
              </p>
              <a
                href="tel:+17869060355"
                className="inline-flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                <span>Start Your Free Assessment</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'Will my neighbors know?',
                  answer: 'No. We arrive in unmarked vehicles and work discreetly and professionally. Your privacy is our top priority.'
                },
                {
                  question: 'Can you help find lost items?',
                  answer: 'Yes. We regularly recover cash, jewelry, legal documents, and family photos and set them aside immediately. We understand these items are irreplaceable.'
                },
                {
                  question: 'Can you help with code violations or eviction notices?',
                  answer: 'Yes. We can fast-track cleanups to satisfy City of Miami and Miami-Dade County code enforcement requirements. We work efficiently to help you meet deadlines.'
                },
                {
                  question: 'How much does hoarding cleanup cost?',
                  answer: 'Every situation is unique. Costs depend on the level of hoarding, square footage, and whether biohazards are present. We provide free, transparent estimates with no obligation.'
                },
                {
                  question: 'Do you work with family members or social workers?',
                  answer: 'Yes. We can coordinate with family members, therapists, social workers, and case managers to ensure a supportive, team-based approach.'
                },
                {
                  question: 'What areas do you serve?',
                  answer: 'We serve Miami, Miami Beach, Hialeah, Doral, Kendall, Fort Lauderdale, Hollywood, Pembroke Pines, West Palm Beach, and all surrounding South Florida areas.'
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-8 shadow-md border-l-4 border-teal-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-600 to-emerald-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" />

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            A Fresh Start Is One Call Away
          </h2>

          <p className="text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            The hardest step is the first one. Let us carry the weight for you.
            <br />
            We are here to listen—without judgment.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 mb-12">
            <a
              href="tel:+17869060355"
              className="inline-flex items-center space-x-3 bg-white text-teal-700 px-10 py-5 rounded-lg font-bold text-xl transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              <Phone className="w-7 h-7" />
              <span>Call (786) 906-0355</span>
            </a>

            <div className="flex items-center space-x-2 text-lg">
              <Lock className="w-5 h-5" />
              <span>For a Private, Confidential Consultation</span>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Home className="w-12 h-12 mx-auto mb-3" />
              <p className="text-lg font-semibold">Professional Restoration</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Heart className="w-12 h-12 mx-auto mb-3" />
              <p className="text-lg font-semibold">Compassionate Care</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Lock className="w-12 h-12 mx-auto mb-3" />
              <p className="text-lg font-semibold">Complete Discretion</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Shield className="w-12 h-12 mx-auto mb-3" />
              <p className="text-lg font-semibold">Licensed & Insured</p>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <p className="text-lg opacity-90">
              Serving Miami, Miami Beach, Hialeah, Doral, Kendall, Fort Lauderdale, Hollywood, Pembroke Pines,
              West Palm Beach, and all of South Florida
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
