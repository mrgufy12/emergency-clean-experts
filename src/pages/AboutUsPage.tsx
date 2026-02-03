import { Link } from 'react-router-dom';
import { Phone, ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function AboutUsPage() {
  useEffect(() => {
    document.title = 'About Us - Emergency Clean Experts';

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Learn about Emergency Clean Experts - Miami\'s trusted emergency restoration and specialty cleaning company.';

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

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-12 leading-tight text-gray-900">
              About Us
            </h1>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <img
                src="/remediation_techs_medium.png"
                alt="Emergency Clean Experts remediation technicians at work"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Emergency Clean Experts was built by people who have actually been in the field — not behind a desk.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Before this became a company, it was years of real work: assisting on small jobs, responding to emergencies, learning remediation from the ground up, and understanding firsthand what property owners go through when something goes wrong. Mold, water damage, fire, biohazards — these situations don't happen at convenient times, and they don't come with clear instructions. We've lived that reality on both sides.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Emergency Clean Experts was created as a natural evolution of multiple remediation services, professionals, and organizations coming together with one shared goal: connect the right customer with the right expert, fast and correctly.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Over the years, we saw the same problem over and over again — homeowners, tenants, property managers, and businesses struggling to find trustworthy professionals in moments of urgency. Too many calls, too much confusion, and not enough clarity. We built Emergency Clean Experts to simplify that process.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Today, we operate as a centralized service platform backed by a network of experienced professionals across multiple trades. Our team includes specialists with backgrounds in mold remediation, water mitigation, fire and smoke restoration, plumbing, HVAC, general contracting, handyman services, and supporting professionals such as consultants and legal resources commonly involved in remediation-related projects. This allows us to coordinate solutions for both residential and commercial properties, without cutting corners or guessing.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  At our core, Emergency Clean Experts is about precision and accountability. We don't believe in one-size-fits-all solutions. Every situation is different, and every customer deserves a response that fits their specific problem. Our role is to assess, coordinate, and connect — ensuring the work is handled by qualified professionals who understand the standards, the urgency, and the responsibility involved.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  What started as small jobs and long days in the field has grown into a trusted operation serving local markets while maintaining the same mindset we began with: show up, do it right, and treat every property like it matters — because it does.
                </p>

                <p className="text-gray-900 leading-relaxed font-semibold text-xl">
                  Emergency Clean Experts exists to bring clarity to chaos, structure to emergencies, and confidence to people when they need it most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
