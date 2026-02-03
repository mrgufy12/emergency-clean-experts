import { Link } from 'react-router-dom';
import { Phone, ArrowLeft, Droplets, AlertTriangle, Camera, Wind, ClipboardCheck, Shield, CheckCircle, Clock } from 'lucide-react';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { useEffect } from 'react';

export default function WaterDamageRestorationPage() {
  useEffect(() => {
    document.title = 'Emergency Water Damage Restoration Miami | Flood & Leak Cleanup | 24/7 - Emergency Clean Experts';

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Rapid water extraction and drying services in Miami. We use thermal imaging to find hidden leaks and prevent mold. Arriving in 60 minutes or less.';

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
      <div className="bg-slate-900 text-white">
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
              className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm sm:text-base">Call Now: (786) 906-0355</span>
            </a>
          </div>
        </nav>
      </div>

      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/water_restoration_extracting_large.png"
            alt="Emergency water damage restoration"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 lg:mb-16">
                <Link
                  to="/"
                  className="inline-flex items-center space-x-2 text-blue-300 hover:text-blue-200 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Home</span>
                </Link>
              </div>

              <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm mb-6">
                <Clock className="w-4 h-4 inline mr-2" />
                60-MINUTE RESPONSE TIME
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Emergency Water Damage Restoration & Extraction in Miami
              </h1>

              <div className="prose prose-invert prose-lg mb-8">
                <p className="text-gray-200 leading-relaxed text-lg">
                  In South Florida's humid climate, water damage is a <strong className="text-yellow-400">race against time</strong>.
                  Whether it's a burst pipe in a high-rise condo or storm flooding in a single-family home, water can cause
                  permanent structural damage within hours. More importantly, <strong className="text-red-400">mold can begin
                  to grow in as little as 24 to 48 hours</strong>.
                </p>
                <p className="text-gray-200 leading-relaxed text-lg">
                  At Emergency Clean Experts, we don't just remove the water you can see—we use <strong>advanced technology
                  to find and dry the water you can't</strong>. We are available 24/7 to stop the damage and save your property.
                </p>
              </div>

              <a
                href="tel:+17869060355"
                className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now for Emergency Water Removal</span>
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Emergency Response Form</h3>
              <p className="text-gray-600 mb-6">We'll respond within 60 minutes • Available 24/7</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50 border-y-4 border-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Serving All of South Florida
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We provide emergency water damage restoration services throughout <strong>Miami</strong>, <strong>Miami Beach</strong>,{' '}
              <strong>Hialeah</strong>, <strong>Doral</strong>, <strong>Kendall</strong>, <strong>Fort Lauderdale</strong>,{' '}
              <strong>Hollywood</strong>, <strong>Pembroke Pines</strong>, <strong>West Palm Beach</strong>, and all surrounding
              South Florida areas. Our rapid response teams are strategically located to reach you within 60 minutes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our "Science of Drying" Process
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Drying a property requires more than just fans. We follow the <strong>IICRC S500 Standard</strong> for
              Professional Water Damage Restoration to ensure your home is completely dry and protected against future
              mold growth and structural failure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg mb-6 mx-auto">
                1
              </div>
              <Camera className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Thermal Imaging Inspection
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Infrared cameras locate hidden moisture behind walls, ceilings, and cabinetry.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg mb-6 mx-auto">
                2
              </div>
              <Droplets className="w-10 h-10 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Industrial Water Extraction
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Truck-mounted vacuums remove standing water immediately.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg mb-6 mx-auto">
                3
              </div>
              <Wind className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Structural Drying
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Commercial dehumidifiers and air movers dry wood framing, drywall, and concrete.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg mb-6 mx-auto">
                4
              </div>
              <ClipboardCheck className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Moisture Mapping & Monitoring
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Daily moisture readings confirm the structure reaches proper dry standards before equipment removal.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-blue-600 text-white rounded-2xl p-8 max-w-4xl mx-auto text-center">
            <p className="text-2xl font-bold mb-2">
              IICRC Certified Technicians
            </p>
            <p className="text-lg">
              Our team follows industry-leading protocols to ensure your property is restored correctly the first time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
              Common Water Emergencies We Handle
            </h2>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-600">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <Droplets className="w-12 h-12 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Burst Pipes & Plumbing Leaks</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      A failed pipe or supply line can flood a home within minutes. We stop the source, extract the water,
                      and protect your belongings. Our team coordinates with plumbers when needed and documents everything
                      for insurance claims.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-cyan-600">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="w-12 h-12 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Flood & Storm Damage Cleanup</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      South Florida storms often bring Category 3 black water containing bacteria and sewage. We safely remove
                      contaminated water and sanitize affected areas using EPA-registered disinfectants and proper PPE.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-600">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <Shield className="w-12 h-12 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">AC Condensate Drain Overflow</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      In humid climates like Miami, AC units produce gallons of water daily. A clogged drain pan can flood
                      attics and ceilings, causing extensive damage. We extract water, dry the structure, and prevent mold growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-red-900 to-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <AlertTriangle className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Emergency Sewage Backup Cleanup
              </h2>
              <p className="text-2xl text-red-300 font-semibold">
                Immediate Removal of Hazardous Waste & Odors
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 mb-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Health Warning</h3>
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                A sewage backup is not just a plumbing issue—it is a <strong className="text-red-400">biohazard</strong>.
                Category 3 black water contains bacteria, viruses, and pathogens that can cause serious illness. Standard
                household cleaners are not effective.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 text-gray-900">
              <h3 className="text-2xl font-bold mb-8 text-center">Our Sewage Remediation Process</h3>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Immediate extraction of contaminated water and waste',
                  'Removal of all affected porous materials',
                  'Deep sanitization with hospital-grade antimicrobials',
                  'Odor elimination using hydroxyl generators',
                  'Full PPE and safety protocols',
                  'Documentation for insurance and health department'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <p className="text-xl font-bold text-red-600 mb-4">
                  This is a medical emergency for your home.
                </p>
                <a
                  href="tel:+17869060355"
                  className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (786) 906-0355 Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
              Why Miami & South Florida Homeowners Trust Emergency Clean Experts
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'We Work Directly With Insurance Adjusters',
                  description: 'Our detailed documentation and industry relationships help expedite your claim approval process.'
                },
                {
                  icon: ClipboardCheck,
                  title: 'Full Documentation for Claims Approval',
                  description: 'Complete photo documentation, moisture logs, and equipment tracking that insurance companies accept.'
                },
                {
                  icon: Clock,
                  title: '60-Minute Rapid Response Teams',
                  description: 'Strategically located throughout South Florida to reach you faster than anyone else.'
                },
                {
                  icon: CheckCircle,
                  title: 'Direct Insurance Billing When Applicable',
                  description: 'We can work with your insurance company to minimize your out-of-pocket expenses.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                  <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-emerald-600 text-white rounded-2xl p-8 text-center">
              <p className="text-2xl font-bold mb-2">
                Licensed, Insured & IICRC Certified
              </p>
              <p className="text-lg">
                Your insurance company and property deserve the best restoration professionals in South Florida.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Stop the Damage Before It Gets Worse
          </h2>

          <p className="text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Waiting even a few hours can turn a small leak into a major mold remediation project.
            Call professionals with the right tools to protect your home.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="tel:+17869060355"
              className="inline-flex items-center space-x-3 bg-white text-blue-600 px-10 py-5 rounded-lg font-bold text-xl transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              <Phone className="w-7 h-7" />
              <span>Call (786) 906-0355</span>
            </a>

            <p className="text-lg">
              <strong>Available 24/7 for Immediate Water Extraction</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-4xl font-bold mb-2">60 min</p>
              <p className="text-lg">Response Time</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-4xl font-bold mb-2">24/7</p>
              <p className="text-lg">Emergency Service</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-4xl font-bold mb-2">100%</p>
              <p className="text-lg">Licensed & Insured</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-4xl font-bold mb-2">IICRC</p>
              <p className="text-lg">Certified Techs</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
