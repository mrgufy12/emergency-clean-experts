import { Phone, Clock, Shield, Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-700 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(/hero-section-clean-experts.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-transparent"></div>

      <nav className="relative z-10 container mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center sm:flex-row sm:items-center gap-3 justify-center sm:justify-start">
            <img
              src="/logo_emergency_clean_experts_copy.png"
              alt="Emergency Clean Experts Logo"
              className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                Emergency Clean Experts
              </h1>
              <p className="text-sm sm:text-base text-gray-300">Miami's Trusted Restoration Team</p>
            </div>
          </div>
          <a
            href="tel:+17869060355"
            className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
          >
            <Phone className="w-5 h-5" />
            <span className="text-sm sm:text-base">Call Now: (786) 906-0355</span>
          </a>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-20 lg:py-32">
        <div className="max-w-4xl text-center sm:text-left mx-auto sm:mx-0">
          <div className="flex flex-wrap gap-3 mb-6 justify-center sm:justify-start">
            <a
              href="#contact-form"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Clock className="w-4 h-4 mr-2" />
              24/7 Emergency Response
            </a>
            <a
              href="#regular-cleaning"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Regular Cleaning
            </a>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-7xl font-bold mb-6 leading-tight px-4 sm:px-0">
            Miami's Trusted Emergency
            <span className="block text-emerald-400">Restoration Experts</span>
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl px-4 sm:px-0">
            Expert water mitigation, mold remediation, biohazard cleanup, crime scene cleanup, hoarding cleanup,
            fire damage restoration, and complete environmental remediation services in Miami, FL.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 px-4 sm:px-0">
            <a
              href="tel:+17869060355"
              className="inline-flex items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 border border-white/20 w-full sm:w-auto"
            >
              <span>Request Service</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 px-4 sm:px-0">
            {[
              { icon: Clock, title: '24/7 Available', desc: 'Emergency response anytime' },
              { icon: Shield, title: 'Certified Experts', desc: 'Licensed & insured professionals' },
              { icon: Phone, title: 'Fast Response', desc: 'On-site within hours' },
              { icon: Search, title: 'Mold Inspections', desc: 'Mold inspections, laboratory testing, and certified mold reports' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3 bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-white/10">
                <item.icon className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-base sm:text-lg">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
