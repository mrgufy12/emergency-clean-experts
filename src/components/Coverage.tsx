import { MapPin, Clock, Phone } from 'lucide-react';

export default function Coverage() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Serving Miami & Surrounding Areas
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Emergency Clean Experts provides 24/7 water mitigation, mold remediation, biohazard cleanup,
              crime scene cleanup, hoarding cleanup, and fire damage restoration services throughout Miami-Dade County,
              Broward County, and Monroe County. Our certified teams respond immediately to minimize damage and begin restoration.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Service Coverage
                  </h3>
                  <p className="text-gray-600">
                    Emergency restoration services for residential and commercial properties throughout Miami-Dade County, Broward County, and Monroe County.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Rapid Response Time
                  </h3>
                  <p className="text-gray-600">
                    On-site within hours of your call, 24 hours a day, 365 days a year.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Always Available
                  </h3>
                  <p className="text-gray-600">
                    Real people answer your calls 24/7 - no automated systems or callbacks.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="tel:+17869060355"
                className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now: (786) 906-0355</span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/fast_response_time_large.png"
                alt="Emergency response team ready for fast service"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Average Response Time</p>
                      <p className="text-3xl font-bold text-gray-900">Under 2 Hours</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 mb-1">Customer Satisfaction</p>
                      <p className="text-3xl font-bold text-emerald-600">99.5%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
