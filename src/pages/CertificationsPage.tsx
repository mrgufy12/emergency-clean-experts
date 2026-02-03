import { Link } from 'react-router-dom';
import { Phone, ArrowLeft, Award, Shield, BookOpen, GraduationCap, CheckCircle, AlertTriangle } from 'lucide-react';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function CertificationsPage() {
  useEffect(() => {
    document.title = 'Certifications - Emergency Clean Experts';

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Learn about our industry certifications, licenses, and professional training in emergency restoration and specialty cleaning.';

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
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6 lg:mb-16">
              <Link
                to="/"
                className="inline-flex items-center space-x-2 text-slate-700 hover:text-slate-800 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
            </div>

            {/* Section 1: Certifications - Page Introduction */}
            <div className="mb-16">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight text-gray-900">
                Certifications
              </h1>

              <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Industry Standards</h3>
                      <p className="text-gray-600 text-sm">Committed to excellence</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Ongoing Education</h3>
                      <p className="text-gray-600 text-sm">Continuous training</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Qualified Professionals</h3>
                      <p className="text-gray-600 text-sm">Trained & certified</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  [Placeholder: Introductory paragraph explaining the company's commitment to industry standards, ongoing education and compliance requirements, and dedication to working with trained and qualified professionals. This section establishes credibility and sets the tone for the detailed certifications outlined below.]
                </p>
              </div>
            </div>

            {/* Section 2: IICRC Standards & Training */}
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
                IICRC Standards & Industry Training
              </h2>

              <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12">
                {/* IICRC Logo Placeholder */}
                <div className="flex justify-center mb-8">
                  <div className="w-48 h-32 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center border-2 border-dashed border-blue-300">
                    <div className="text-center p-4">
                      <Award className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                      <p className="text-blue-700 font-semibold text-sm">IICRC Logo</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  [Placeholder: Content describing adherence to IICRC (Institute of Inspection, Cleaning and Restoration Certification) standards, including training protocols related to water damage, mold remediation, and restoration services. This establishes the foundation of professional expertise.]
                </p>

                {/* Certification Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* WRT Certification */}
                  <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-blue-500">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center border border-blue-300">
                        <span className="text-blue-700 font-bold text-xs">LOGO</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">WRT</h3>
                        <p className="text-sm text-gray-600">Water Restoration Technician</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      [Placeholder: Description of WRT certification and water damage restoration expertise]
                    </p>
                  </div>

                  {/* MRT/AMRT Certification */}
                  <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-emerald-500">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg flex items-center justify-center border border-emerald-300">
                        <span className="text-emerald-700 font-bold text-xs">LOGO</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">MRT / AMRT</h3>
                        <p className="text-sm text-gray-600">Mold-Related Training</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      [Placeholder: Description of mold remediation certifications and specialized training]
                    </p>
                  </div>

                  {/* Additional IICRC Certifications */}
                  <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-amber-500">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center border border-amber-300">
                        <span className="text-amber-700 font-bold text-xs">LOGO</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Additional IICRC</h3>
                        <p className="text-sm text-gray-600">Specialized Certifications</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      [Placeholder: Other applicable IICRC certifications and specialized restoration training]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Biohazard & Specialized Training */}
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
                Biohazard & Specialized Remediation Training
              </h2>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg p-8 sm:p-12 text-white">
                {/* Biohazard Logo Placeholders */}
                <div className="flex flex-wrap justify-center gap-6 mb-8">
                  <div className="w-40 h-28 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border-2 border-dashed border-white/30">
                    <div className="text-center p-3">
                      <AlertTriangle className="w-10 h-10 text-amber-400 mx-auto mb-2" />
                      <p className="text-white/80 font-semibold text-xs">Biohazard Badge</p>
                    </div>
                  </div>
                  <div className="w-40 h-28 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border-2 border-dashed border-white/30">
                    <div className="text-center p-3">
                      <Shield className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
                      <p className="text-white/80 font-semibold text-xs">Safety Badge</p>
                    </div>
                  </div>
                  <div className="w-40 h-28 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border-2 border-dashed border-white/30">
                    <div className="text-center p-3">
                      <CheckCircle className="w-10 h-10 text-blue-400 mx-auto mb-2" />
                      <p className="text-white/80 font-semibold text-xs">Compliance Badge</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  [Placeholder: Content describing specialized biohazard cleanup training, bloodborne pathogen awareness protocols, and safety-focused remediation practices. This section emphasizes the expertise required for sensitive and potentially hazardous cleanup situations.]
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <div className="flex items-center gap-3 mb-3">
                      <AlertTriangle className="w-6 h-6 text-amber-400" />
                      <h3 className="font-bold text-white text-lg">Biohazard Cleanup Training</h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      [Placeholder: Specific training details for biohazard remediation, crime scene cleanup, and trauma scene restoration]
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-6 h-6 text-emerald-400" />
                      <h3 className="font-bold text-white text-lg">Bloodborne Pathogen Awareness</h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      [Placeholder: OSHA bloodborne pathogen training and safety protocols for handling potentially infectious materials]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Ongoing Education & Recertification */}
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
                Ongoing Training & Continuing Education
              </h2>

              <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12 border-l-4 border-emerald-500">
                <div className="flex items-start gap-6 mb-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Commitment to Current Standards
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      [Placeholder: Content explaining the company's commitment to keeping certifications current through ongoing annual or periodic training, and staying aligned with evolving industry standards and best practices. This reinforces credibility and demonstrates dedication to professional development.]
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-slate-50 rounded-lg">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Regular Training</h4>
                    <p className="text-gray-600 text-sm">
                      [Placeholder: Frequency and scope of ongoing training programs]
                    </p>
                  </div>

                  <div className="text-center p-6 bg-slate-50 rounded-lg">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Recertification</h4>
                    <p className="text-gray-600 text-sm">
                      [Placeholder: Commitment to maintaining current certification status]
                    </p>
                  </div>

                  <div className="text-center p-6 bg-slate-50 rounded-lg">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-amber-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Best Practices</h4>
                    <p className="text-gray-600 text-sm">
                      [Placeholder: Staying current with industry innovations and techniques]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: Additional Industry Credentials */}
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
                Additional Industry Credentials
              </h2>

              <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12">
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  [Placeholder: Broad introduction to additional remediation-related certifications, safety training, compliance credentials, and operational certifications. This section provides flexibility for expansion as the company grows and adds new credentials.]
                </p>

                {/* Flexible Grid for Additional Certifications */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-slate-50 rounded-lg p-6 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mx-auto mb-4 border-2 border-dashed border-slate-300">
                      <span className="text-slate-500 font-semibold text-xs">LOGO</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Safety Certification</h4>
                    <p className="text-gray-600 text-sm">
                      [Placeholder]
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-6 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mx-auto mb-4 border-2 border-dashed border-slate-300">
                      <span className="text-slate-500 font-semibold text-xs">LOGO</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Compliance Training</h4>
                    <p className="text-gray-600 text-sm">
                      [Placeholder]
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-6 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mx-auto mb-4 border-2 border-dashed border-slate-300">
                      <span className="text-slate-500 font-semibold text-xs">LOGO</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Operational Excellence</h4>
                    <p className="text-gray-600 text-sm">
                      [Placeholder]
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-6 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mx-auto mb-4 border-2 border-dashed border-slate-300">
                      <span className="text-slate-500 font-semibold text-xs">LOGO</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Specialized Training</h4>
                    <p className="text-gray-600 text-sm">
                      [Placeholder]
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">Note:</span> This section is designed for future expansion as additional certifications, training programs, and industry credentials are acquired. The modular structure allows for easy updates without requiring significant page restructuring.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl shadow-xl p-8 sm:p-12 text-center text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Work With Certified Professionals
              </h2>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                Our trained and certified team is ready to handle your emergency restoration or cleaning needs with the highest standards of professionalism.
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
