import { Link } from 'react-router-dom';
import { Phone, ArrowLeft, Heart, Shield, AlertTriangle, FileCheck, Lock, Droplets, Home, Users, HandHeart } from 'lucide-react';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { useEffect } from 'react';

export default function BiohazardCleanupPage() {
  useEffect(() => {
    document.title = 'Biohazard & Crime Scene Cleanup Miami | Compassionate & Discreet | 24/7 - Emergency Clean Experts';

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Certified biohazard cleaning for unattended death, suicide, and crime scenes in Miami-Dade. We handle insurance, sanitize safely, and arrive in unmarked vehicles.';

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
              <span className="text-sm sm:text-base">Emergency: (786) 906-0355</span>
            </a>
          </div>
        </nav>
      </div>

      <section className="relative bg-gradient-to-br from-blue-50 via-slate-50 to-gray-50 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/crime_scene_clean_up_large.png"
            alt="Professional biohazard cleanup service"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 lg:mb-16">
                <Link
                  to="/"
                  className="inline-flex items-center space-x-2 text-slate-700 hover:text-slate-800 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Home</span>
                </Link>
              </div>

              <div className="inline-flex items-center space-x-2 bg-blue-700 text-white px-4 py-2 rounded-full font-semibold text-sm mb-6">
                <Shield className="w-4 h-4" />
                <span>LICENSED • CERTIFIED • COMPASSIONATE • 24/7</span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Compassionate Biohazard & Crime Scene Cleanup in Miami
              </h1>

              <div className="prose prose-lg mb-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  If you are reading this page, you are likely going through a difficult and traumatic time. At Emergency
                  Clean Experts, we understand that dealing with the aftermath of a crime, suicide, or unattended death is
                  <strong className="text-blue-700"> overwhelming</strong>. You should not have to face the cleanup process
                  alone—and for your safety, you shouldn't.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We provide discreet, <strong>OSHA-compliant biohazard remediation</strong> across Miami-Dade and Broward
                  County. Our team handles the physical restoration so you can focus on what matters most: your family and
                  your healing.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <a
                  href="tel:+17869060355"
                  className="inline-flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now for Confidential Biohazard Cleanup</span>
                </a>
                <p className="text-sm text-gray-600 flex items-center space-x-2">
                  <Lock className="w-4 h-4" />
                  <span>Available 24/7 • Unmarked Vehicles • Insurance Approved</span>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Emergency Response</h3>
              <p className="text-gray-600 mb-6">Available 24/7 for immediate biohazard cleanup</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-6" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why "Standard Cleaning" Isn't Enough
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Biohazards such as blood, bodily fluids, and tissue carry dangerous pathogens including{' '}
                <strong>HIV, Hepatitis B & C, and MRSA</strong>. Standard janitorial or handyman cleaning is not designed to
                eliminate these risks safely.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-t-4 border-red-600">
                <Droplets className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Visible vs Invisible Contamination</h3>
                <p className="text-gray-700 leading-relaxed">
                  Stains may disappear, but fluids often seep beneath flooring, into subfloors, drywall, and wall cavities.
                  What you can't see can still harm you.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border-t-4 border-amber-600">
                <AlertTriangle className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Odor That Never Goes Away</h3>
                <p className="text-gray-700 leading-relaxed">
                  If biological material is left behind—even under tile or flooring—odors will return. Masking smells does
                  not solve the problem.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-t-4 border-blue-600">
                <FileCheck className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Disposal Requirements</h3>
                <p className="text-gray-700 leading-relaxed">
                  Biohazardous waste must be packaged, transported, and disposed of at licensed medical waste facilities per
                  Florida Department of Health regulations.
                </p>
              </div>
            </div>

            <div className="bg-red-700 text-white rounded-2xl p-8 text-center">
              <p className="text-xl font-bold mb-2">
                Attempting DIY biohazard cleanup puts your health at serious risk.
              </p>
              <p className="text-lg">
                Let certified professionals handle the restoration safely and according to all Florida regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Shield className="w-16 h-16 text-blue-700 mx-auto mb-6" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                We Follow Every Protocol — No Corners Cut
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Biohazard remediation is not complicated when done correctly—but it is dangerous and costly when done wrong.
                Leaving even a small amount of biological material behind can create long-term health risks for the next
                occupant.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-10 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">At Emergency Clean Experts:</h3>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'We follow OSHA, IICRC, and Florida Department of Health protocols',
                  'We remove affected materials when required',
                  'We sanitize, deodorize, and verify safety before clearing a property',
                  'We use hospital-grade disinfectants and EPA-registered antimicrobials'
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <Shield className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-700 to-slate-700 text-white rounded-2xl p-10 text-center">
              <p className="text-2xl font-bold mb-4">Our Commitment to You</p>
              <p className="text-lg leading-relaxed max-w-2xl mx-auto">
                We believe in <strong>fair pricing, not cheap work</strong>. Our goal is to help the community while doing
                the job correctly the first time. Your safety and peace of mind are worth it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Specialized Biohazard Services
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                We handle the most challenging and sensitive restoration situations with compassion and professionalism.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-10 border-l-4 border-slate-600">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <Home className="w-12 h-12 text-slate-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Unattended Death Cleanup</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      When a passing goes undiscovered for days or weeks, decomposition can cause severe odor and structural
                      contamination. We remove affected flooring, drywall, and materials, then fully sanitize the structure to
                      restore safe living conditions. Our team works with empathy and respect for your loved one.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-10 border-l-4 border-red-600">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <Heart className="w-12 h-12 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Suicide & Crime Scene Cleanup</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      After first responders leave, families are often left with an impossible task. We respond quickly and
                      discreetly to remove all biological hazards and restore the environment with compassion and
                      professionalism. You should never have to clean up after a traumatic event yourself.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-10 border-l-4 border-emerald-600">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <Users className="w-12 h-12 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Gross Filth & Hoarding Biohazards</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Extreme hoarding situations often involve biohazards such as rodent waste, mold, and bacteria. Our
                      non-judgmental team safely clears and sanitizes the property so it can be occupied again. We understand
                      the complexity of these situations and work at a pace that respects your needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-10 border-l-4 border-blue-600">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <Droplets className="w-12 h-12 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Blood & Bodily Fluid Cleanup</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Whether from a medical emergency, accident, or other incident, blood and bodily fluids require
                      specialized cleaning protocols. We thoroughly decontaminate all affected surfaces and materials,
                      ensuring complete pathogen elimination and odor removal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Lock className="w-16 h-16 text-blue-700 mx-auto mb-6" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                100% Discreet & Insurance Approved
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                We understand privacy and cost are major concerns during emergencies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <Lock className="w-10 h-10 text-blue-700 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Discretion</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mt-2"></div>
                    <p className="text-gray-700 text-lg">
                      <strong>Unmarked Vehicles:</strong> We arrive in plain, unmarked vehicles to protect your privacy
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mt-2"></div>
                    <p className="text-gray-700 text-lg">
                      <strong>Confidential Service:</strong> All work is handled with complete confidentiality
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mt-2"></div>
                    <p className="text-gray-700 text-lg">
                      <strong>Respectful Team:</strong> Our technicians are trained in compassionate care
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <FileCheck className="w-10 h-10 text-emerald-700 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Insurance Assistance</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2"></div>
                    <p className="text-gray-700 text-lg">
                      <strong>Most Policies Cover:</strong> Biohazard cleanup is typically covered under dwelling coverage
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2"></div>
                    <p className="text-gray-700 text-lg">
                      <strong>Direct Billing:</strong> We document and submit claims directly to adjusters when possible
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2"></div>
                    <p className="text-gray-700 text-lg">
                      <strong>Fair Pricing:</strong> We charge what is necessary to do the job safely—no shortcuts
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-700 text-white rounded-2xl p-10 text-center">
              <HandHeart className="w-16 h-16 mx-auto mb-6" />
              <p className="text-2xl font-bold mb-4">We're Here to Help</p>
              <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                We know this is one of the hardest times in your life. Let us handle the cleanup so you can focus on healing
                and supporting your family. We work with compassion, professionalism, and complete respect.
              </p>
              <a
                href="tel:+17869060355"
                className="inline-flex items-center space-x-2 bg-white text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span>Call (786) 906-0355</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-red-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" />

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Immediate Help Is Available 24/7
          </h2>

          <p className="text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Do not attempt to clean a biohazard scene yourself. It poses serious health risks and adds unnecessary emotional
            trauma.
            <br />
            <strong>Let trained professionals handle it safely and respectfully.</strong>
          </p>

          <div className="flex flex-col items-center justify-center gap-6 mb-12">
            <a
              href="tel:+17869060355"
              className="inline-flex items-center space-x-3 bg-white text-red-700 px-10 py-5 rounded-lg font-bold text-xl transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              <Phone className="w-7 h-7" />
              <span>Call (786) 906-0355 Now</span>
            </a>

            <p className="text-lg">
              Available 24 Hours • 7 Days a Week • Immediate Emergency Response
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Shield className="w-12 h-12 mx-auto mb-3" />
              <p className="text-lg font-semibold">OSHA Compliant</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Lock className="w-12 h-12 mx-auto mb-3" />
              <p className="text-lg font-semibold">100% Discreet</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <FileCheck className="w-12 h-12 mx-auto mb-3" />
              <p className="text-lg font-semibold">Insurance Approved</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Heart className="w-12 h-12 mx-auto mb-3" />
              <p className="text-lg font-semibold">Compassionate Care</p>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <p className="text-lg opacity-90">
              Serving Miami, Miami Beach, Hialeah, Doral, Kendall, Fort Lauderdale, Hollywood, Pembroke Pines,
              West Palm Beach, and all of Miami-Dade and Broward Counties
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
