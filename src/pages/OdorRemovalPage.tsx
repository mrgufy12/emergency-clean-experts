import { Link } from 'react-router-dom';
import { Phone, ArrowLeft, Wind, Home, Building2, Car, CheckCircle, AlertCircle, Droplets, Flame, Shield, Search } from 'lucide-react';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { useEffect } from 'react';

export default function OdorRemovalPage() {
  useEffect(() => {
    document.title = 'Odor Removal & Decontamination Miami | Smoke, Pet, Chemical & Bio Odors - Emergency Clean Experts';

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Professional odor removal and decontamination in Miami. We eliminate smoke, pet urine, chemical, and bio odors using ozone, hydroxyl, and surface treatment. Residential, commercial, and vehicles.';

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
              <span className="text-sm sm:text-base">Call Now: (786) 906-0355</span>
            </a>
          </div>
        </nav>
      </div>

      <section className="relative bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/odor_remediation.png"
            alt="Professional odor removal service"
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

              <div className="inline-flex items-center space-x-2 bg-teal-600 text-white px-4 py-2 rounded-full font-semibold text-sm mb-6">
                <Wind className="w-4 h-4" />
                <span>SCIENCE-BASED • VERIFIED RESULTS • 24/7 AVAILABLE</span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Professional Odor Removal & Decontamination in Miami
              </h1>

              <p className="text-2xl font-bold text-teal-700 mb-4">
                Odors don't just "linger" — they come from contamination. We remove them at the source.
              </p>

              <div className="prose prose-lg mb-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Persistent odors are not just unpleasant — <strong>they're a sign that something has bonded to the
                  surfaces, air, or structure of a space</strong>. Smoke, pet urine, chemicals, biohazards, and
                  moisture-related odors don't disappear with basic cleaning or air fresheners.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  At Emergency Clean Experts, we <strong>identify why an odor exists</strong>, where it's coming from,
                  and how to neutralize it completely — not mask it.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <a
                  href="tel:+17869060355"
                  className="inline-flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get a Free Odor Assessment</span>
                </a>
                <p className="text-sm text-gray-600 flex items-center space-x-2">
                  <Wind className="w-4 h-4" />
                  <span>Residential • Commercial • Vehicles • Insurance Approved</span>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Odor Assessment</h3>
              <p className="text-gray-600 mb-6">Let us identify the source and create a solution</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <AlertCircle className="w-16 h-16 text-amber-600 mx-auto mb-6" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Odors Keep Coming Back
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
                Odors are caused by <strong>microscopic particles that bind to surfaces</strong>, fabrics, HVAC systems,
                and porous materials. Simply spraying chemicals or running machines without preparation often makes the
                problem worse.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-t-4 border-red-600">
                <AlertCircle className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Masking, Not Neutralizing</h3>
                <p className="text-gray-700 leading-relaxed">
                  Air fresheners and sprays temporarily cover the smell but do nothing to eliminate the source. The odor
                  always returns.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border-t-4 border-amber-600">
                <Wind className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Treating Air Only</h3>
                <p className="text-gray-700 leading-relaxed">
                  Running ozone or hydroxyl machines without cleaning the surfaces first just recirculates contaminated air.
                  The particles are still there.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-t-4 border-blue-600">
                <Search className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ignoring Hidden Sources</h3>
                <p className="text-gray-700 leading-relaxed">
                  Odors hide in wall cavities, under carpet padding, inside HVAC ducts, and within porous materials. You
                  have to find the source.
                </p>
              </div>
            </div>

            <div className="bg-teal-700 text-white rounded-2xl p-8 text-center">
              <p className="text-2xl font-bold mb-2">
                Odor removal requires identification, preparation, treatment, and verification.
              </p>
              <p className="text-lg">
                We don't guess. We follow proven protocols used in fire, mold, and biohazard restoration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Odors We Professionally Eliminate
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                From residential homes to commercial spaces and vehicles — we handle every type of persistent odor.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-600">
                <div className="flex items-start space-x-4 mb-4">
                  <Flame className="w-10 h-10 text-orange-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Smoke Odors</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Cigarette smoke, cigar smoke, fire residue, and cannabis smoke all require different treatment
                      approaches. We remove the particles embedded in surfaces, fabrics, and HVAC systems.
                    </p>
                  </div>
                </div>
                <div className="pl-14 space-y-2">
                  {['Cigarette & cigar smoke', 'Fire & smoke damage odor', 'Cannabis odor', 'Third-hand smoke residue'].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-amber-600">
                <div className="flex items-start space-x-4 mb-4">
                  <Home className="w-10 h-10 text-amber-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Pet Urine & Animal Odors</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Pet urine penetrates flooring, carpet padding, and subfloors. Standard cleaning cannot reach these
                      areas. We identify all affected zones using UV light and treat them correctly.
                    </p>
                  </div>
                </div>
                <div className="pl-14 space-y-2">
                  {['Cat & dog urine odor', 'Pet dander & fur odor', 'Animal waste contamination', 'Skunk spray odor'].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-600">
                <div className="flex items-start space-x-4 mb-4">
                  <Droplets className="w-10 h-10 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Musty & Moisture-Related Odors</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Musty odors indicate mold, mildew, or bacterial growth caused by moisture intrusion. We address both
                      the odor and its underlying cause.
                    </p>
                  </div>
                </div>
                <div className="pl-14 space-y-2">
                  {['Musty basement odors', 'Mold & mildew smells', 'Water damage odors', 'AC duct mustiness'].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-emerald-600">
                <div className="flex items-start space-x-4 mb-4">
                  <Shield className="w-10 h-10 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Chemical & Bio-Related Odors</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Industrial chemicals, cleaning product residue, and biological odors require specialized neutralization
                      techniques and proper decontamination protocols.
                    </p>
                  </div>
                </div>
                <div className="pl-14 space-y-2">
                  {['Chemical & industrial odors', 'Biological contamination odor', 'Cooking & food odors', 'Medical facility smells'].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-slate-600">
                <div className="flex items-start space-x-4 mb-4">
                  <Car className="w-10 h-10 text-slate-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Vehicle Odors</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Cars, vans, and work trucks absorb odors from upholstery, carpeting, air conditioning systems, and
                      cargo areas. We restore vehicle interiors to odor-free condition.
                    </p>
                  </div>
                </div>
                <div className="pl-14 space-y-2">
                  {['Smoke odor in vehicles', 'Pet odor in cars', 'Mildew & AC odor', 'Work truck contamination'].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-700 to-cyan-700 rounded-2xl shadow-lg p-8 text-white flex items-center justify-center">
                <div className="text-center">
                  <Wind className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-3">All Locations</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Residential homes, commercial buildings, and vehicles throughout Miami and South Florida
                  </p>
                  <a
                    href="tel:+17869060355"
                    className="inline-flex items-center space-x-2 bg-white text-teal-700 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Shield className="w-16 h-16 text-teal-700 mx-auto mb-6" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Professional Odor Removal Process
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                A systematic, science-based approach that delivers verified results — not temporary relief.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  number: '1',
                  title: 'Odor Source Identification',
                  description: 'We determine whether the odor is surface-based, airborne, or embedded in porous materials. This includes visual inspection, moisture meters, and UV light when necessary.',
                  icon: Search
                },
                {
                  number: '2',
                  title: 'Micro-Cleaning & Surface Preparation',
                  description: 'Micro-cleaning means we clean every surface the odor has bonded to using the correct chemical for that odor type — walls, ceilings, floors, fabrics, and hard surfaces.',
                  icon: Home
                },
                {
                  number: '3',
                  title: 'Neutralization Technology',
                  description: 'Based on the situation, we may use ozone treatment, hydroxyl generators, chemical neutralizers, or HEPA air filtration. The method is selected based on the odor type and location.',
                  icon: Wind
                },
                {
                  number: '4',
                  title: 'Verification',
                  description: 'We confirm the odor has been neutralized — not temporarily suppressed. Our goal is permanent elimination, and we verify results before considering the job complete.',
                  icon: CheckCircle
                }
              ].map((step, idx) => (
                <div key={idx} className="bg-gradient-to-br from-slate-50 to-teal-50 rounded-xl p-8 border-l-4 border-teal-700">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-teal-700 text-white rounded-full flex items-center justify-center font-bold text-xl">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-teal-700 to-cyan-700 text-white rounded-2xl p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Why Our Process Works</h3>
                  <div className="space-y-3">
                    {[
                      'We identify the true source of the odor',
                      'We prepare surfaces before using technology',
                      'We select the right treatment for the odor type',
                      'We verify complete neutralization before we leave'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0" />
                        <span className="text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold mb-6">
                    This is why our results last and our customers trust us.
                  </p>
                  <a
                    href="tel:+17869060355"
                    className="inline-flex items-center space-x-2 bg-white text-teal-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Schedule Assessment</span>
                  </a>
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
              <Shield className="w-16 h-16 text-blue-700 mx-auto mb-6" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Odor Removal vs Decontamination — There's a Difference
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Decontamination goes beyond odor removal. It focuses on <strong>eliminating the bacteria, organic matter, or
                chemical residue</strong> causing the smell in the first place.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <AlertCircle className="w-10 h-10 text-amber-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Standard Odor Removal</h3>
                <div className="space-y-3 text-gray-700">
                  <p>Most companies focus only on the smell itself:</p>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Run machines without surface cleaning</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Use generic treatments for all odor types</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Don't address underlying contamination</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Results often temporary</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-700 to-cyan-700 text-white rounded-xl shadow-lg p-8">
                <CheckCircle className="w-10 h-10 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Decontamination Approach</h3>
                <div className="space-y-3">
                  <p>We treat odors as symptoms of contamination:</p>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start space-x-2">
                      <span className="font-bold">✓</span>
                      <span>Micro-clean all affected surfaces first</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-bold">✓</span>
                      <span>Select treatment based on odor science</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-bold">✓</span>
                      <span>Remove bacteria and organic contamination</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-bold">✓</span>
                      <span>Permanent, verified results</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What Makes Us Different</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'We understand why odors form at a molecular level',
                  'We select treatments based on science, not guesswork',
                  'We follow protocols used in fire, mold, and biohazard remediation',
                  'We don\'t rely on "one-machine-fits-all" solutions'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-700 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-lg leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-2xl font-bold text-teal-700 mb-2">This is why our results last.</p>
                <p className="text-lg text-gray-700">
                  We don't just treat symptoms. We eliminate the contamination causing the odor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Where Odor Removal & Decontamination Is Used
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                We provide professional odor elimination services across all property types throughout Miami and South Florida.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-t-4 border-blue-600">
                <Home className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Residential Properties</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Single-family homes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Apartments & condos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Rental properties</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Real estate listings</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-t-4 border-emerald-600">
                <Building2 className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Commercial Spaces</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Office buildings</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Retail spaces</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Restaurants & hospitality</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Medical facilities</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 border-t-4 border-slate-600">
                <Car className="w-12 h-12 text-slate-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Vehicles</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0" />
                    <span>Personal vehicles</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0" />
                    <span>Fleet vehicles</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0" />
                    <span>Work vans & trucks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0" />
                    <span>RVs & boats</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-teal-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <Wind className="w-16 h-16 mx-auto mb-6" />

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Stop Living With the Smell
          </h2>

          <p className="text-2xl mb-4 max-w-3xl mx-auto leading-relaxed font-bold">
            If you've tried cleaning, spraying, or running machines and the odor keeps coming back, it's time for a
            professional approach.
          </p>

          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Let us identify the source and eliminate it correctly. We use science-based protocols that deliver permanent,
            verified results — not temporary relief.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 mb-12">
            <a
              href="tel:+17869060355"
              className="inline-flex items-center space-x-3 bg-white text-teal-700 px-10 py-5 rounded-lg font-bold text-xl transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              <Phone className="w-7 h-7" />
              <span>Call (786) 906-0355</span>
            </a>

            <p className="text-lg">
              Available 24/7 • Free Odor Assessment • Insurance Approved
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Search className="w-12 h-12 mx-auto mb-3" />
              <p className="text-lg font-semibold">Source Identification</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Shield className="w-12 h-12 mx-auto mb-3" />
              <p className="text-lg font-semibold">Decontamination</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Wind className="w-12 h-12 mx-auto mb-3" />
              <p className="text-lg font-semibold">Advanced Technology</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <CheckCircle className="w-12 h-12 mx-auto mb-3" />
              <p className="text-lg font-semibold">Verified Results</p>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <p className="text-lg opacity-90">
              Serving Miami, Miami Beach, Coral Gables, Hialeah, Doral, Kendall, Fort Lauderdale, Hollywood,
              Pembroke Pines, West Palm Beach, and all of Miami-Dade, Broward, and Palm Beach Counties
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
