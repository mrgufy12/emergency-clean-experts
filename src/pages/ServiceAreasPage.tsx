import { Link } from 'react-router-dom';
import { Phone, ArrowLeft, MapPin, Clock, Building2, Home } from 'lucide-react';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function ServiceAreasPage() {
  useEffect(() => {
    document.title = 'Service Areas - Emergency Clean Experts';

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Emergency Clean Experts serves Miami-Dade, Broward, and Palm Beach counties with 24/7 emergency restoration services.';

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

            {/* Section 1: Service Areas Introduction (Hero Section) */}
            <div className="mb-16">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight text-gray-900">
                Service Areas
              </h1>

              <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">All of South Florida</h3>
                      <p className="text-gray-600 text-sm">Miami-Dade, Broward, Palm Beach</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Residential & Commercial</h3>
                      <p className="text-gray-600 text-sm">All property types served</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Emergency & Scheduled</h3>
                      <p className="text-gray-600 text-sm">24/7 availability</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Emergency Clean Experts proudly serves all of South Florida, covering Miami-Dade, Broward, and Palm Beach counties. Whether you're facing an emergency situation or need scheduled services, our team is ready to respond 24/7 to any location within our service area. We serve both residential and commercial properties with the same level of expertise and commitment to quality.
                </p>
              </div>
            </div>

            {/* Section 2: South Florida Coverage Map */}
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
                Proudly Serving South Florida
              </h2>

              <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12">
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our service area spans three major counties in South Florida, ensuring rapid response times and comprehensive coverage throughout the region.
                  </p>
                  <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d954176.7338274736!2d-80.84506734374999!3d26.418602399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami-Dade%20County%2C%20FL!5e0!3m2!1sen!2sus!4v1706389000000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="South Florida Service Area Map"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Full Service Areas List (SEO Core Section) */}
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
                Cities & Communities We Serve
              </h2>

              <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12">
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  We provide emergency restoration and specialty cleaning services to every major city and community across South Florida's three primary counties. No matter where you're located in our service area, our team is ready to respond quickly and professionally.
                </p>

                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                    Miami-Dade County
                  </h3>
                  <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-emerald-500">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      <p className="text-gray-700">Miami</p>
                      <p className="text-gray-700">Miami Beach</p>
                      <p className="text-gray-700">Coral Gables</p>
                      <p className="text-gray-700">Hialeah</p>
                      <p className="text-gray-700">Homestead</p>
                      <p className="text-gray-700">North Miami</p>
                      <p className="text-gray-700">North Miami Beach</p>
                      <p className="text-gray-700">Miami Gardens</p>
                      <p className="text-gray-700">Aventura</p>
                      <p className="text-gray-700">Doral</p>
                      <p className="text-gray-700">Kendall</p>
                      <p className="text-gray-700">Cutler Bay</p>
                      <p className="text-gray-700">Pinecrest</p>
                      <p className="text-gray-700">Palmetto Bay</p>
                      <p className="text-gray-700">South Miami</p>
                      <p className="text-gray-700">Key Biscayne</p>
                      <p className="text-gray-700">Miami Lakes</p>
                      <p className="text-gray-700">Sunny Isles Beach</p>
                      <p className="text-gray-700">Bal Harbour</p>
                      <p className="text-gray-700">Surfside</p>
                      <p className="text-gray-700">Sweetwater</p>
                      <p className="text-gray-700">Florida City</p>
                    </div>
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    Broward County
                  </h3>
                  <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-blue-500">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      <p className="text-gray-700">Fort Lauderdale</p>
                      <p className="text-gray-700">Hollywood</p>
                      <p className="text-gray-700">Pembroke Pines</p>
                      <p className="text-gray-700">Coral Springs</p>
                      <p className="text-gray-700">Miramar</p>
                      <p className="text-gray-700">Pompano Beach</p>
                      <p className="text-gray-700">Davie</p>
                      <p className="text-gray-700">Plantation</p>
                      <p className="text-gray-700">Sunrise</p>
                      <p className="text-gray-700">Weston</p>
                      <p className="text-gray-700">Deerfield Beach</p>
                      <p className="text-gray-700">Lauderhill</p>
                      <p className="text-gray-700">Cooper City</p>
                      <p className="text-gray-700">Margate</p>
                      <p className="text-gray-700">Coconut Creek</p>
                      <p className="text-gray-700">Hallandale Beach</p>
                      <p className="text-gray-700">Oakland Park</p>
                      <p className="text-gray-700">Tamarac</p>
                      <p className="text-gray-700">Parkland</p>
                      <p className="text-gray-700">Lighthouse Point</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-amber-600" />
                    Palm Beach County
                  </h3>
                  <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-amber-500">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      <p className="text-gray-700">West Palm Beach</p>
                      <p className="text-gray-700">Boca Raton</p>
                      <p className="text-gray-700">Boynton Beach</p>
                      <p className="text-gray-700">Delray Beach</p>
                      <p className="text-gray-700">Wellington</p>
                      <p className="text-gray-700">Palm Beach Gardens</p>
                      <p className="text-gray-700">Jupiter</p>
                      <p className="text-gray-700">Lake Worth</p>
                      <p className="text-gray-700">Greenacres</p>
                      <p className="text-gray-700">Royal Palm Beach</p>
                      <p className="text-gray-700">Riviera Beach</p>
                      <p className="text-gray-700">Palm Springs</p>
                      <p className="text-gray-700">North Palm Beach</p>
                      <p className="text-gray-700">Juno Beach</p>
                      <p className="text-gray-700">Tequesta</p>
                      <p className="text-gray-700">Palm Beach</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Services Linked Within Service Areas */}
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
                Complete Services Available in All Areas
              </h2>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg p-8 sm:p-12 text-white">
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  All of our specialized services are available throughout every city and community in our South Florida service area. We maintain consistent quality and rapid response times across the entire region.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Link
                    to="/mold-remediation-testing-miami"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-6 transition-all duration-200 border border-white/20 hover:border-emerald-400 group"
                  >
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                      Mold Remediation
                    </h3>
                    <p className="text-gray-300 text-sm">Testing, removal & prevention</p>
                  </Link>

                  <Link
                    to="/water-damage-restoration-miami"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-6 transition-all duration-200 border border-white/20 hover:border-emerald-400 group"
                  >
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                      Water Damage Restoration
                    </h3>
                    <p className="text-gray-300 text-sm">Extraction, drying & mitigation</p>
                  </Link>

                  <Link
                    to="/fire-smoke-damage-restoration-miami"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-6 transition-all duration-200 border border-white/20 hover:border-emerald-400 group"
                  >
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                      Fire & Smoke Damage
                    </h3>
                    <p className="text-gray-300 text-sm">Restoration & cleanup</p>
                  </Link>

                  <Link
                    to="/biohazard-crime-scene-cleanup-miami"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-6 transition-all duration-200 border border-white/20 hover:border-emerald-400 group"
                  >
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                      Biohazard Cleanup
                    </h3>
                    <p className="text-gray-300 text-sm">Crime scene & trauma cleanup</p>
                  </Link>

                  <Link
                    to="/odor-removal-decontamination-miami"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-6 transition-all duration-200 border border-white/20 hover:border-emerald-400 group"
                  >
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                      Odor Removal
                    </h3>
                    <p className="text-gray-300 text-sm">Decontamination & deodorization</p>
                  </Link>

                  <Link
                    to="/hoarding-cleanup-miami"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-6 transition-all duration-200 border border-white/20 hover:border-emerald-400 group"
                  >
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                      Hoarding Cleanup
                    </h3>
                    <p className="text-gray-300 text-sm">Compassionate decluttering services</p>
                  </Link>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-gray-300 leading-relaxed">
                    Each service is delivered with the same level of professionalism, expertise, and care regardless of location within our South Florida service area.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: Non-Emergency & General Cleaning Services */}
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
                Beyond Emergency Services
              </h2>

              <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12 border-l-4 border-emerald-500">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Home className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Regular & Scheduled Cleaning Services
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      Our services extend beyond emergencies. We provide comprehensive regular cleaning and maintenance services across all South Florida service areas for both residential and commercial properties.
                    </p>
                    <Link
                      to="/professional-cleaning-services-miami"
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <span>Learn About General Cleaning Services</span>
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Link>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-6 mt-6">
                  <p className="text-gray-700 leading-relaxed">
                    Whether you need routine maintenance, deep cleaning, or specialized cleaning services, our team is available to serve your needs throughout Miami-Dade, Broward, and Palm Beach counties.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl shadow-xl p-8 sm:p-12 text-center text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                Contact us today for immediate assistance or to schedule services in your area.
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
