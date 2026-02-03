import { Link } from 'react-router-dom';
import { Phone, ArrowLeft, Shield, CheckCircle, AlertTriangle, ClipboardCheck, Microscope } from 'lucide-react';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { useEffect } from 'react';

export default function MoldRemediationPage() {
  useEffect(() => {
    document.title = 'Licensed Mold Remediation & Testing Miami | State Certified | 24/7 - Emergency Clean Experts';

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Florida State Licensed Mold Remediators & Assessors. We provide protocol-compliant black mold removal and air quality testing. Fast, safe, and insurance-approved.';

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

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/mold_remediation_medium.png"
            alt="Professional mold remediation"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="mb-6 lg:mb-16">
                <Link
                  to="/"
                  className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Home</span>
                </Link>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                State Licensed Mold Remediation & Inspection in Miami
              </h1>

              <p className="text-lg sm:text-xl text-emerald-400 font-semibold mb-6">
                Florida Department of Health Compliant. IICRC Certified. 100% Safe Mold Removal.
              </p>

              <div className="prose prose-invert prose-lg mb-8">
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
                  In South Florida, mold is not a matter of "if," but "when." High humidity, frequent storms,
                  and hidden AC leaks create the perfect breeding ground for toxic black mold (Stachybotrys).
                  At Emergency Clean Experts, we don't just "spray and wipe." Mold is a biological hazard that
                  requires state-licensed professionals to handle correctly.
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  We are fully licensed by the State of Florida (DBPR) to perform both Mold Assessment (Testing)
                  and Mold Remediation (Removal), ensuring your property is safe, legally compliant, and healthy.
                </p>
              </div>

              <a
                href="tel:+17869060355"
                className="inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 shadow-lg hover:shadow-xl w-full lg:w-auto"
              >
                <Phone className="w-5 h-5" />
                <span>Call (786) 906-0355 - 24/7 Emergency</span>
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Request a Free Visual Inspection</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6">Licensed & Insured • Fast Response • No Obligation</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 border-t-4 border-red-600">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-10 h-10 text-red-600" />
                <h2 className="text-3xl font-bold text-gray-900">Mold Remediation</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Professional mold removal following Florida law and IICRC S520 standards. We physically remove
                contaminated materials at the source—no shortcuts, no Band-Aids.
              </p>

              <ul className="space-y-4">
                {[
                  'Containment & Negative Air Pressure',
                  'Safe Demolition & Disposal',
                  'HEPA Filtration & Air Scrubbing',
                  'EPA-Registered Antimicrobial Treatment',
                  'Full PPE & Safety Protocol',
                  'Documentation for Insurance'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong className="text-gray-900">Florida DBPR Licensed</strong> • Insurance Approved • Full Documentation Provided
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 border-t-4 border-blue-600">
              <div className="flex items-center space-x-3 mb-6">
                <Microscope className="w-10 h-10 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Mold Testing & Inspection</h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                State-licensed mold assessors identify the presence, type, and source of mold contamination.
                Independent testing ensures unbiased results and legal compliance.
              </p>

              <ul className="space-y-4">
                {[
                  'Air Quality Sampling (Indoor vs Outdoor)',
                  'Surface Swab Testing (Lab Analysis)',
                  'Moisture Mapping with Infrared Cameras',
                  'Identification of Hidden Mold Sources',
                  'Detailed Assessment Reports',
                  'Clearance Testing (Post-Remediation)'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong className="text-gray-900">Certified Lab Testing</strong> • Written Reports • Expert Guidance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our 5-Step "Gold Standard" Remediation Process
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We strictly follow the <strong>IICRC S520 Standard</strong> for Professional Mold Remediation
              and Florida Statutes. We do not use bleach (which only hides the problem). We physically remove
              mold at the source.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {[
              {
                step: 1,
                title: 'Containment & Negative Air',
                description: 'Before work begins, we install containment barriers and HEPA air scrubbers to create negative air pressure, preventing cross-contamination.',
                icon: Shield
              },
              {
                step: 2,
                title: 'Safe Removal & Demolition',
                description: 'Infested porous materials (drywall, insulation, carpet) are removed, bagged, and disposed of following protocol. Full PPE is used.',
                icon: AlertTriangle
              },
              {
                step: 3,
                title: 'HEPA Vacuuming & Antimicrobial Cleaning',
                description: 'All remaining surfaces are HEPA vacuumed and treated with EPA-registered antimicrobial solutions.',
                icon: Shield
              },
              {
                step: 4,
                title: 'Air Filtration',
                description: 'Air scrubbers run continuously, removing 99.97% of airborne particulates.',
                icon: CheckCircle
              },
              {
                step: 5,
                title: 'Third-Party Clearance Testing',
                description: 'We recommend independent clearance testing to provide a Certificate of Mold Clearance.',
                icon: ClipboardCheck
              }
            ].map((step) => (
              <div key={step.step} className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center space-x-3">
                      <step.icon className="w-6 h-6 text-emerald-600" />
                      <span>{step.title}</span>
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
              Mold Testing & Inspection Services
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center">
              If you smell musty odors or experience allergy symptoms but don't see mold, testing is critical.
              Our State Licensed Mold Assessors identify both the presence and source of mold.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                    <Microscope className="w-7 h-7 text-blue-600" />
                    <span>Testing Services</span>
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Air Quality Sampling (indoor vs outdoor comparison)',
                      'Surface Swab Testing (Aspergillus, Penicillium, Stachybotrys, etc.)',
                      'Moisture Mapping using infrared cameras and moisture meters',
                      'Hidden Mold Detection',
                      'Post-Remediation Clearance Testing'
                    ].map((service, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">What You Receive:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Certified laboratory analysis</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Written assessment report</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Detailed remediation protocol</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Source identification</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Expert recommendations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-50 border-y-4 border-amber-400">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <AlertTriangle className="w-12 h-12 text-amber-600" />
              <h2 className="text-4xl font-bold text-gray-900">The "Conflict of Interest" Guarantee</h2>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-10">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                <strong className="text-amber-600">Florida law prohibits</strong> a company from performing
                its own clearance testing after remediation. We strictly follow this rule.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If we perform remediation, we coordinate with an <strong>independent third-party assessor</strong> for
                final clearance to ensure unbiased results and legal compliance.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg">
                <p className="text-gray-800">
                  <strong>Why This Matters:</strong> Independent clearance testing protects you from companies
                  that "test their own work\"—a practice that creates a financial incentive to pass jobs that
                  may not be safe. We follow the law because your health comes first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-center">
              Why You Must Hire a State-Licensed Professional
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-12 text-center">
              In Florida, it is <strong className="text-red-400">illegal to remediate mold over 10 square feet</strong> without
              a DBPR license. Unlicensed work can void insurance claims and worsen contamination.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'State Licensed Mold Remediators',
                  description: 'Full DBPR licensing ensures compliance with Florida Department of Health regulations and proper training.'
                },
                {
                  title: 'Insurance-Approved Documentation',
                  description: 'Complete photo documentation, moisture readings, and remediation reports that insurance adjusters accept.'
                },
                {
                  title: 'Adjuster Coordination',
                  description: 'We work directly with your insurance company to streamline the claims process and ensure coverage.'
                },
                {
                  title: 'Science-Based Remediation',
                  description: 'No shortcuts. We follow IICRC S520 and EPA guidelines—proven protocols that actually work.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-emerald-500 transition-colors">
                  <h3 className="text-2xl font-bold text-emerald-400 mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-red-600 rounded-2xl p-8 text-center">
              <p className="text-2xl font-bold mb-2">⚠️ WARNING</p>
              <p className="text-lg">
                Hiring an unlicensed contractor for mold work can result in failed inspections,
                voided insurance claims, and potentially dangerous exposure to toxic mold.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Protect Your Lungs & Your Property
          </h2>

          <p className="text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Mold spreads fast—often doubling every 24 hours. Don't risk your health or property value.
            Call licensed professionals who follow Florida law.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:+17869060355"
              className="inline-flex items-center space-x-3 bg-white text-emerald-600 px-10 py-5 rounded-lg font-bold text-xl transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              <Phone className="w-7 h-7" />
              <span>Call (786) 906-0355</span>
            </a>

            <p className="text-lg">
              <strong>24/7 Rapid Mold Response</strong>
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-4xl font-bold mb-2">30 min</p>
              <p className="text-lg">Average Response Time</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-4xl font-bold mb-2">100%</p>
              <p className="text-lg">Florida Licensed & Insured</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-4xl font-bold mb-2">24/7</p>
              <p className="text-lg">Emergency Service</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
