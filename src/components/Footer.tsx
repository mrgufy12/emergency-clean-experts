import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex flex-col items-center md:items-start gap-3 mb-6 group cursor-pointer"
            >
              <img
                src="/logo_emergency_clean_experts_copy.png"
                alt="Emergency Clean Experts Logo"
                className="h-20 md:h-24 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <h3 className="text-xl md:text-2xl font-bold text-center md:text-left group-hover:text-emerald-400 transition-colors">
                Emergency Clean Experts
              </h3>
            </a>
            <p className="text-gray-400 leading-relaxed mb-6">
              Miami's trusted water mitigation, mold remediation, biohazard cleanup, crime scene cleanup,
              and emergency restoration company serving residential and commercial properties 24/7.
            </p>
            <div className="flex items-center space-x-2 text-emerald-400">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">24/7 Emergency Service</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                { name: 'Water Mitigation', path: '/water-damage-restoration-miami' },
                { name: 'Mold Remediation', path: '/mold-remediation-testing-miami' },
                { name: 'Biohazard Cleanup', path: '/biohazard-crime-scene-cleanup-miami' },
                { name: 'Crime Scene Cleanup', path: '/biohazard-crime-scene-cleanup-miami' },
                { name: 'Hoarding Cleanup', path: '/hoarding-cleanup-miami' },
                { name: 'Fire Damage Restoration', path: '/fire-smoke-damage-restoration-miami' },
                { name: 'Odor Removal', path: '/odor-removal-decontamination-miami' }
              ].map((service, idx) => (
                <li key={idx}>
                  <Link to={service.path} className="text-gray-400 hover:text-emerald-400 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about-us' },
                { name: 'Our Process', path: '/our-process' },
                { name: 'Service Areas', path: '/service-areas' },
                { name: 'Certifications', path: '/certifications' },
                { name: 'Insurance Claims', path: '/insurance-claims' },
                { name: 'FAQ', path: '/faq' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-gray-400 hover:text-emerald-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">24/7 Emergency Hotline</p>
                  <a href="tel:+17869060355" className="text-white font-semibold hover:text-emerald-400 text-lg">
                    (786) 906-0355
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a href="mailto:service@emergencycleanexperts.com" className="text-white hover:text-emerald-400 break-all">
                    service@emergencycleanexperts.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Miami Office</p>
                  <p className="text-white">66 W Flagler St<br />Miami, FL 33130</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
              <a href="#" className="hover:text-emerald-400 transition-colors">Sitemap</a>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors group"
              >
                <ArrowUp className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform" />
                <span>Back to Top</span>
              </button>
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Emergency Clean Experts. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-600 py-4 sm:py-4">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2">
            <p className="font-semibold text-base sm:text-lg flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>Need Immediate Help? Call Our 24/7 Emergency Line:</span>
            </p>
            <a href="tel:+17869060355" className="underline hover:no-underline font-bold text-lg sm:text-xl">
              (786) 906-0355
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
