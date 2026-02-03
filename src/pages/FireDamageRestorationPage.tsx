import { Link } from 'react-router-dom';
import { Phone, ArrowLeft, Flame, Shield, Droplets, Package, CheckCircle, Clock, FileText, AlertTriangle } from 'lucide-react';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { useEffect } from 'react';

export default function FireDamageRestorationPage() {
  useEffect(() => {
    document.title = 'Fire & Smoke Damage Restoration Miami | Soot Removal & Cleanup | 24/7 - Emergency Clean Experts';

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Emergency fire damage cleanup and smoke odor removal in Miami. We handle soot cleaning, water extraction, and content pack-outs. Insurance approved.';

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
              className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm sm:text-base">Emergency: (786) 906-0355</span>
            </a>
          </div>
        </nav>
      </div>

      <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-amber-50 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/fire_restoration_team_work.png"
            alt="Fire damage restoration service"
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

              <div className="inline-flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-full font-semibold text-sm mb-6">
                <Flame className="w-4 h-4" />
                <span>EMERGENCY SERVICE • INSURANCE APPROVED • 24/7</span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Emergency Fire & Smoke Damage Restoration in Miami
              </h1>

              <p className="text-2xl font-bold text-red-700 mb-4">
                The fire is out, but the damage continues. We stop corrosion and remove smoke odor for good.
              </p>

              <div className="prose prose-lg mb-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  A fire is one of the most traumatic events a property owner can face. But often, the worst damage begins
                  <strong className="text-red-700"> after the flames are extinguished</strong>. Within minutes, acidic soot
                  settles on surfaces and starts to discolor plastics, etch glass, and corrode metal. Within hours, the water
                  used to fight the fire can trigger mold growth.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Emergency Clean Experts provides <strong>rapid 24/7 stabilization</strong>. We arrive immediately to secure
                  the property, extract water, and begin the delicate process of removing smoke and soot before the damage
                  becomes permanent.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <a
                  href="tel:+17869060355"
                  className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call for Immediate Fire Damage Assessment</span>
                </a>
                <p className="text-sm text-gray-600 flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Available 24/7 • Rapid Response Teams • Direct Insurance Billing</span>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Emergency Response</h3>
              <p className="text-gray-600 mb-6">Available 24/7 for immediate fire damage restoration</p>
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
                It's Not Just Fire — It's Smoke, Soot & Water
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Fire restoration is never a single-step cleanup. <strong>Smoke travels, soot embeds, and water
                saturates</strong> materials. Restoring a property correctly requires trained professionals and specialized
                equipment.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-t-4 border-red-600">
                <Flame className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Acidic Soot</h3>
                <p className="text-gray-700 leading-relaxed">
                  Soot contains acids that etch glass, corrode metals, and permanently discolor plastics within hours. The
                  faster we remove it, the more we can save.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border-t-4 border-amber-600">
                <AlertTriangle className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Penetrating Smoke</h3>
                <p className="text-gray-700 leading-relaxed">
                  Smoke travels through HVAC systems, wall cavities, and insulation. Standard cleaning cannot reach these
                  hidden areas. Professional equipment is required.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-t-4 border-blue-600">
                <Droplets className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Firefighting Water</h3>
                <p className="text-gray-700 leading-relaxed">
                  Water used to extinguish the fire saturates floors, walls, and contents. Without immediate drying, mold
                  begins growing within 24-48 hours.
                </p>
              </div>
            </div>

            <div className="bg-red-700 text-white rounded-2xl p-8 text-center">
              <p className="text-xl font-bold mb-2">
                Every hour of delay means more permanent damage and higher restoration costs.
              </p>
              <p className="text-lg">
                Immediate professional intervention is critical to saving your property and belongings.
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
                Our Fire-Related Services
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Comprehensive fire damage restoration requires multiple specialized services working in coordination.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-10 border-l-4 border-orange-600">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <Flame className="w-12 h-12 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Smoke & Soot Removal</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      Smoke penetrates behind walls, into HVAC systems, insulation, and attic spaces. We use{' '}
                      <strong>thermal fogging, ozone, and hydroxyl generators</strong> to neutralize odor molecules at the
                      source. Soot is carefully removed using chemical sponges and HEPA filtration to avoid scratching or
                      permanent staining of delicate surfaces.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        'Chemical sponge dry-cleaning',
                        'HEPA vacuum filtration',
                        'Thermal fogging deodorization',
                        'Hydroxyl generator air scrubbing'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-10 border-l-4 border-blue-600">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <Droplets className="w-12 h-12 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Water Damage from Firefighting</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      Most fire losses also involve significant water damage. We immediately extract standing water and dry the
                      structure to prevent secondary mold growth and structural decay. Our industrial dehumidifiers and air
                      movers work around the clock to restore normal moisture levels.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        'Emergency water extraction',
                        'Structural drying & monitoring',
                        'Dehumidification services',
                        'Mold prevention protocols'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-10 border-l-4 border-emerald-600">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <Package className="w-12 h-12 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Contents Cleaning & Pack-Outs</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      Furniture, clothing, electronics, and personal items are carefully inventoried, wrapped, and transported
                      to a secure facility for cleaning, deodorization, and storage until your home is ready. Every item is
                      documented with photos for insurance purposes.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        'Complete inventory documentation',
                        'Professional pack-out services',
                        'Secure climate-controlled storage',
                        'Specialized content cleaning'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-10 border-l-4 border-slate-600">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <Shield className="w-12 h-12 text-slate-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Board-Up & Security</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      Fire often leaves properties vulnerable to weather, theft, and additional damage. We immediately secure
                      broken windows, damaged roofs, and compromised entry points with professional board-up services to protect
                      your property while restoration is underway.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        'Window & door boarding',
                        'Roof tarping services',
                        'Property security measures',
                        'Weather protection systems'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
              <Shield className="w-16 h-16 text-blue-700 mx-auto mb-6" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Fire Restoration Process
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                A systematic, proven approach to fire damage restoration that minimizes losses and accelerates recovery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  number: '1',
                  title: 'Emergency Board-Up',
                  description: 'Secure broken windows and damaged roofs to prevent theft or weather damage',
                  icon: Shield
                },
                {
                  number: '2',
                  title: 'Safety Assessment',
                  description: 'Inspect structural integrity before restoration begins to ensure worker and occupant safety',
                  icon: CheckCircle
                },
                {
                  number: '3',
                  title: 'Water Removal & Drying',
                  description: 'Prevent mold and rot caused by firefighting efforts using industrial extraction and drying equipment',
                  icon: Droplets
                },
                {
                  number: '4',
                  title: 'Soot Cleanup',
                  description: 'HEPA vacuums and chem-sponges remove toxic residues from all affected surfaces',
                  icon: Flame
                },
                {
                  number: '5',
                  title: 'Odor Control',
                  description: 'Hydroxyl generators scrub carcinogenic smoke particles from the air and neutralize odor molecules',
                  icon: AlertTriangle
                },
                {
                  number: '6',
                  title: 'Restoration & Reconstruction',
                  description: 'Rebuild damaged structures, replace materials, and restore your property to pre-loss condition',
                  icon: Package
                }
              ].map((step, idx) => (
                <div key={idx} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 border-l-4 border-blue-700">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-xl">
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

            <div className="mt-12 bg-gradient-to-br from-blue-700 to-slate-700 text-white rounded-2xl p-10 text-center">
              <Clock className="w-16 h-16 mx-auto mb-6" />
              <p className="text-2xl font-bold mb-4">Speed Saves Property and Money</p>
              <p className="text-lg leading-relaxed max-w-2xl mx-auto">
                The first 24-48 hours after a fire are critical. Our rapid response teams arrive quickly to stabilize the
                damage and begin restoration immediately, preventing further deterioration and reducing overall costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <FileText className="w-16 h-16 text-blue-700 mx-auto mb-6" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Working With Your Insurance
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Fire damage claims are complex and expensive. One documentation mistake can cost thousands.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <FileText className="w-10 h-10 text-blue-700 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Documentation</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mt-2"></div>
                    <p className="text-gray-700 text-lg">
                      <strong>Xactimate Software:</strong> We document damage using insurance-standard software for accurate estimates
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mt-2"></div>
                    <p className="text-gray-700 text-lg">
                      <strong>Detailed Itemization:</strong> Every affected surface and item is documented and photographed
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mt-2"></div>
                    <p className="text-gray-700 text-lg">
                      <strong>Timeline Documentation:</strong> We track all work performed with dates, times, and progress photos
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <Shield className="w-10 h-10 text-emerald-700 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Direct Insurance Coordination</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2"></div>
                    <p className="text-gray-700 text-lg">
                      <strong>Adjuster Communication:</strong> We submit documentation and invoices directly to your adjuster
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2"></div>
                    <p className="text-gray-700 text-lg">
                      <strong>Reduced Delays:</strong> Professional documentation reduces claim disputes and speeds up payment
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2"></div>
                    <p className="text-gray-700 text-lg">
                      <strong>Your Advocate:</strong> We help ensure you receive fair compensation for all covered damages
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-700 text-white rounded-2xl p-10 text-center">
              <p className="text-2xl font-bold mb-4">We Understand the Insurance Process</p>
              <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                Our goal is to reduce delays and disputes while you focus on recovery. We handle the paperwork, documentation,
                and communication so you can concentrate on getting your life back to normal.
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
          <Flame className="w-16 h-16 mx-auto mb-6" />

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            24/7 Rapid Response Teams
          </h2>

          <p className="text-2xl mb-4 max-w-3xl mx-auto leading-relaxed font-bold">
            The longer soot sits, the harder it is to remove.
          </p>

          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Immediate action saves money, property, and irreplaceable belongings. Our emergency teams are standing by right
            now to respond to your fire damage emergency.
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
              <Clock className="w-12 h-12 mx-auto mb-3" />
              <p className="text-lg font-semibold">Rapid Response</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Shield className="w-12 h-12 mx-auto mb-3" />
              <p className="text-lg font-semibold">IICRC Certified</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <FileText className="w-12 h-12 mx-auto mb-3" />
              <p className="text-lg font-semibold">Insurance Approved</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <CheckCircle className="w-12 h-12 mx-auto mb-3" />
              <p className="text-lg font-semibold">Proven Process</p>
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
