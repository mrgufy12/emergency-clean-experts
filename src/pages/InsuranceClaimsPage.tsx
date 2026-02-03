import { Link } from 'react-router-dom';
import { Phone, ArrowLeft, Shield, FileText, CheckCircle, Users, AlertCircle, Heart } from 'lucide-react';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function InsuranceClaimsPage() {
  useEffect(() => {
    document.title = 'Insurance Claims - Emergency Clean Experts';

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'We work directly with your insurance company to make the claims process simple and stress-free. Emergency Clean Experts handles the paperwork.';

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

            {/* Section 1: Page Introduction (Trust Builder) */}
            <div className="mb-16">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight text-gray-900">
                Insurance Claims Assistance
              </h1>

              <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      Dealing with property damage is stressful enough. Navigating insurance claims can feel overwhelming, confusing, and frustrating. You're not alone in feeling that way.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      Emergency Clean Experts has extensive experience working with insurance claims on a regular basis. We understand the documentation requirements, timelines, and expectations that insurance companies have for remediation work.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Our role is to help guide you through the remediation side of the process with clear communication, thorough documentation, and professional service you can trust.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 mt-8">
                  <div className="bg-blue-50 rounded-lg p-6 text-center">
                    <FileText className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Clear Documentation</h3>
                    <p className="text-gray-600 text-sm">Photos, reports, and detailed records</p>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-6 text-center">
                    <Users className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Insurance Experience</h3>
                    <p className="text-gray-600 text-sm">We work with claims regularly</p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-6 text-center">
                    <Heart className="w-10 h-10 text-amber-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Customer-First</h3>
                    <p className="text-gray-600 text-sm">Your peace of mind matters</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: How Insurance Claims Typically Work */}
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
                How the Insurance Process Works
              </h2>

              <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12">
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Understanding the typical insurance claims process can help reduce stress and set clear expectations. Here's how it generally works:
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">Loss Occurs</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Property damage happens due to water, fire, mold, or other covered events. The clock starts immediately for mitigation efforts.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-emerald-600">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">Claim is Opened</h3>
                      <p className="text-gray-600 leading-relaxed">
                        You contact your insurance company to report the loss and open a claim. A claim number is assigned and an adjuster is typically appointed.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center font-bold text-amber-600">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">Assessment and Documentation</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Inspections are performed, photos are taken, moisture readings are documented, and the scope of work is determined. This stage is critical for accurate claims processing.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center font-bold text-violet-600">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">Mitigation / Remediation</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Emergency response work begins to stop further damage. Remediation follows to remove affected materials, dry structures, and restore the property.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">Adjuster Review</h3>
                      <p className="text-gray-600 leading-relaxed">
                        The insurance adjuster reviews documentation, scope, and costs. Coverage decisions are made based on your policy terms.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">Important Note:</span> Timelines matter in insurance claims. Quick response and thorough documentation are essential for successful claims processing.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Our Role in the Insurance Process */}
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
                How Emergency Clean Experts Helps
              </h2>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg p-8 sm:p-12 text-white">
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  We play a specific, well-defined role in the insurance claims process. Here's what we do and what we don't do:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="w-6 h-6 text-emerald-400" />
                      <h3 className="font-bold text-white text-lg">What We Do</h3>
                    </div>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Perform thorough inspections and assessments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Provide detailed documentation, photos, and moisture readings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Create comprehensive scope of work reports</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Communicate and coordinate with adjusters and property managers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Execute professional remediation services</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertCircle className="w-6 h-6 text-amber-400" />
                      <h3 className="font-bold text-white text-lg">What We Don't Do</h3>
                    </div>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>Act as public adjusters or negotiate your claim</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>Provide legal advice about your policy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>Guarantee what your insurance will or won't cover</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>Make coverage decisions on behalf of your insurer</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>Interpret policy language or coverage terms</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-500/20 rounded-lg p-6 border border-amber-400/30">
                  <p className="text-amber-100 leading-relaxed">
                    <span className="font-semibold text-white">Critical Distinction:</span> We are remediation experts, not insurance representatives or legal advisors. Our focus is on performing high-quality restoration work and providing the documentation your claim requires.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Covered vs Non-Covered Work */}
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
                What Insurance May or May Not Cover
              </h2>

              <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12">
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Insurance coverage varies significantly based on your specific policy, the cause of the damage, and how it occurred. Understanding the general principles can help set realistic expectations.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="border-l-4 border-emerald-500 pl-6">
                    <h3 className="font-bold text-gray-900 text-xl mb-4">More Likely to Be Covered</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>Sudden, accidental water losses (burst pipes, appliance failures)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>Fire and smoke damage from covered events</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>Mold resulting from a covered water loss</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>Emergency mitigation to prevent further damage</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="font-bold text-gray-900 text-xl mb-4">Less Likely to Be Covered</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>Long-term, slow leaks or maintenance issues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>Mold from neglect or lack of maintenance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>Flood damage (requires separate flood insurance)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>Pre-existing conditions discovered during work</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500">
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <span className="font-semibold text-gray-900">Important Disclaimer:</span> Coverage decisions are made by your insurance company based on your specific policy terms and the circumstances of the loss.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We cannot predict or guarantee what your insurance will cover. Our role is to assess the damage, perform necessary work, and provide documentation. Coverage determinations are between you and your insurer.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: Insurance-Friendly Services */}
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
                Insurance-Friendly Remediation Services
              </h2>

              <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12">
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  We provide comprehensive remediation services that meet insurance documentation standards and industry best practices.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Link
                    to="/services/water-damage-restoration"
                    className="bg-blue-50 hover:bg-blue-100 rounded-lg p-6 border-l-4 border-blue-500 transition-all duration-200 group"
                  >
                    <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                      Water Damage Restoration
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      Emergency water extraction, structural drying, moisture monitoring, and complete restoration services.
                    </p>
                    <span className="text-blue-600 text-sm font-semibold group-hover:underline">Learn More →</span>
                  </Link>

                  <Link
                    to="/services/mold-remediation"
                    className="bg-emerald-50 hover:bg-emerald-100 rounded-lg p-6 border-l-4 border-emerald-500 transition-all duration-200 group"
                  >
                    <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-emerald-600 transition-colors">
                      Mold Remediation
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      Professional mold inspection, containment, removal, and prevention services following industry protocols.
                    </p>
                    <span className="text-emerald-600 text-sm font-semibold group-hover:underline">Learn More →</span>
                  </Link>

                  <Link
                    to="/services/fire-damage-restoration"
                    className="bg-amber-50 hover:bg-amber-100 rounded-lg p-6 border-l-4 border-amber-500 transition-all duration-200 group"
                  >
                    <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-amber-600 transition-colors">
                      Fire & Smoke Damage Restoration
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      Complete fire damage cleanup, smoke odor removal, soot remediation, and structural restoration.
                    </p>
                    <span className="text-amber-600 text-sm font-semibold group-hover:underline">Learn More →</span>
                  </Link>

                  <Link
                    to="/services/biohazard-cleanup"
                    className="bg-red-50 hover:bg-red-100 rounded-lg p-6 border-l-4 border-red-500 transition-all duration-200 group"
                  >
                    <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-red-600 transition-colors">
                      Biohazard Cleanup
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      Safe, discreet cleanup of trauma scenes, blood, bodily fluids, and hazardous materials.
                    </p>
                    <span className="text-red-600 text-sm font-semibold group-hover:underline">Learn More →</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Section 6: Transparency & Ethics */}
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
                Transparency Matters
              </h2>

              <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12 border-l-4 border-emerald-500">
                <div className="flex items-start gap-6 mb-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Heart className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Our Commitment to You
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Trust is everything when you're dealing with property damage and insurance claims. We operate with complete transparency and put your interests first.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-slate-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      No Inflated Scopes
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We only recommend and perform work that is truly necessary. No padding, no unnecessary services, no inflated costs.
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      Honest Assessments
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      If something doesn't need remediation, we'll tell you. Our assessments are based on facts, not profit motives.
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      Clear Communication
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We explain what we're doing and why in plain language. No technical jargon designed to confuse or intimidate.
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      Customer-First Approach
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Your peace of mind and satisfaction are more important than short-term profit. We're building long-term trust.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7: Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-xl p-8 sm:p-12 text-center text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Have an Insurance-Related Loss? Let's Talk.
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Whether you've already opened a claim or you're trying to understand your situation first, we're here to help with expert guidance and professional service.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+17869060355"
                  className="inline-flex items-center gap-3 bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-lg w-full sm:w-auto justify-center"
                >
                  <Phone className="w-6 h-6" />
                  <span>Call Now: (786) 906-0355</span>
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-lg w-full sm:w-auto justify-center"
                >
                  <FileText className="w-6 h-6" />
                  <span>Request Service</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
