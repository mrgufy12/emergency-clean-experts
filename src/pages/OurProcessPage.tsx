import { Link } from 'react-router-dom';
import { Phone, ArrowLeft, Ear, Search, Users, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function OurProcessPage() {
  useEffect(() => {
    document.title = 'Our Process - Emergency Clean Experts';

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Learn about our proven emergency restoration process from initial contact to project completion.';

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
          <div className="max-w-5xl mx-auto">
            <div className="mb-6 lg:mb-16">
              <Link
                to="/"
                className="inline-flex items-center space-x-2 text-slate-700 hover:text-slate-800 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight text-gray-900">
              Our Process
            </h1>

            <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12 mb-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                At Emergency Clean Experts, our process is built around one simple idea: every situation is different, but the way we approach it should always be consistent, professional, and transparent.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We didn't design this process in a boardroom — it was shaped by years in the field, real emergencies, real properties, and real people who needed answers fast.
              </p>
            </div>

            <div className="space-y-6 mb-12">
              <div className="bg-white rounded-xl shadow-sm p-8 sm:p-10 border-l-4 border-emerald-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Ear className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">Step 1: Listen and Assess</h2>
                </div>
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  Every job starts with a conversation.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Before recommending any service, we take the time to understand:
                </p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="text-gray-700 leading-relaxed">What happened</li>
                  <li className="text-gray-700 leading-relaxed">What the customer is experiencing</li>
                  <li className="text-gray-700 leading-relaxed">What concerns or constraints are involved</li>
                  <li className="text-gray-700 leading-relaxed">Whether the issue is residential or commercial</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We assess the situation as a whole, not just the visible problem. This allows us to identify the true scope, avoid unnecessary work, and set realistic expectations from the start.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 sm:p-10 border-l-4 border-blue-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Search className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">Step 2: Identify the Right Solution</h2>
                </div>
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  Not every problem needs the same approach — and not every provider is the right fit.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Based on the assessment, we determine:
                </p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="text-gray-700 leading-relaxed">What services are actually required</li>
                  <li className="text-gray-700 leading-relaxed">Whether the work can be handled in-house (inspection, assessment, remediation, mitigation, cleaning)</li>
                  <li className="text-gray-700 leading-relaxed">Or whether the situation requires a specialized professional from our extended network</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Each service is tailored to the specific conditions of the property, the urgency of the situation, and the customer's needs.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 sm:p-10 border-l-4 border-amber-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-amber-600" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">Step 3: Connect You With the Right Professionals</h2>
                </div>
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  This is where Emergency Clean Experts stands apart.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We operate as a centralized coordination point backed by a trusted network of professionals, including:
                </p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="text-gray-700 leading-relaxed">Remediation and mitigation specialists</li>
                  <li className="text-gray-700 leading-relaxed">Inspectors and assessors</li>
                  <li className="text-gray-700 leading-relaxed">Plumbers and HVAC professionals</li>
                  <li className="text-gray-700 leading-relaxed">General contractors and handymen</li>
                  <li className="text-gray-700 leading-relaxed">Supporting professionals commonly involved in remediation-related projects</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Whether the solution is handled directly by our team or through a qualified partner, our role remains the same: ensure the right professional is assigned to the job, without guesswork or shortcuts.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 sm:p-10 border-l-4 border-slate-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-slate-600" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">Step 4: Oversight, Communication, and Follow-Through</h2>
                </div>
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  We stay involved throughout the process.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  That means:
                </p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="text-gray-700 leading-relaxed">Clear communication</li>
                  <li className="text-gray-700 leading-relaxed">Accountability at every step</li>
                  <li className="text-gray-700 leading-relaxed">Making sure work aligns with the agreed scope</li>
                  <li className="text-gray-700 leading-relaxed">Ensuring the customer understands what's being done and why</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Our job doesn't end when the service starts — it ends when the situation is properly addressed.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg p-8 sm:p-12 mb-8 text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why We're Different</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Emergency Clean Experts isn't just a service provider — it's a system built to remove confusion during stressful situations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-200 leading-relaxed">We understand emergencies because we've worked them firsthand</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-200 leading-relaxed">We don't push unnecessary services</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-200 leading-relaxed">We don't rely on one-size-fits-all solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-200 leading-relaxed">We focus on accuracy, coordination, and trust</span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-6">
                Our experience across multiple disciplines allows us to see the bigger picture and guide customers toward the most effective outcome, not just the fastest sale.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Our Philosophy</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                We believe that:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-700 leading-relaxed">Emergencies deserve clarity, not pressure</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-700 leading-relaxed">Customers deserve honesty, not upselling</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-700 leading-relaxed">Professionals should be matched based on expertise, not availability</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-700 leading-relaxed">Doing things right the first time saves time, money, and frustration</span>
                </li>
              </ul>
              <p className="text-gray-900 leading-relaxed font-semibold text-xl mt-8">
                This philosophy is what shaped Emergency Clean Experts — and it's what continues to guide every call, every assessment, and every project we take on.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
