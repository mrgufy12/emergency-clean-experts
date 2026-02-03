import { useParams, Link } from 'react-router-dom';
import { Phone, ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const serviceData: Record<string, { title: string; image: string; metaDescription: string }> = {
  'mold-remediation': {
    title: 'Mold Remediation & Testing',
    image: 'https://images.pexels.com/photos/4207909/pexels-photo-4207909.jpeg?auto=compress&cs=tinysrgb&w=1920',
    metaDescription: 'Professional mold remediation and testing services in Miami-Dade County, Broward County, and Monroe County. Expert mold removal and certified laboratory testing.'
  },
  'water-mitigation': {
    title: 'Water Mitigation & Flood Damage',
    image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1920',
    metaDescription: 'Emergency water mitigation and flood damage restoration services in Miami-Dade County, Broward County, and Monroe County. 24/7 water damage response.'
  },
  'fire-smoke-cleanup': {
    title: 'Fire & Smoke Damage Cleanup',
    image: 'https://images.pexels.com/photos/16274679/pexels-photo-16274679.jpeg?auto=compress&cs=tinysrgb&w=1920',
    metaDescription: 'Fire and smoke damage cleanup services in Miami-Dade County, Broward County, and Monroe County. Professional fire restoration and smoke odor removal.'
  },
  'biohazard-cleanup': {
    title: 'Biohazard & Crime Scene Cleanup',
    image: 'https://images.pexels.com/photos/4167544/pexels-photo-4167544.jpeg?auto=compress&cs=tinysrgb&w=1920',
    metaDescription: 'Certified biohazard and crime scene cleanup services in Miami-Dade County, Broward County, and Monroe County. Discreet trauma scene remediation.'
  },
  'hoarding-cleanup': {
    title: 'Hoarding Cleanup & Odor Removal',
    image: 'https://images.pexels.com/photos/4107278/pexels-photo-4107278.jpeg?auto=compress&cs=tinysrgb&w=1920',
    metaDescription: 'Professional hoarding cleanup and odor removal services in Miami-Dade County, Broward County, and Monroe County. Compassionate and discreet service.'
  },
  'structural-drying': {
    title: 'Emergency Structural Drying',
    image: 'https://images.pexels.com/photos/5691607/pexels-photo-5691607.jpeg?auto=compress&cs=tinysrgb&w=1920',
    metaDescription: 'Emergency structural drying services in Miami-Dade County, Broward County, and Monroe County. Fast-response water damage prevention.'
  }
};

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : null;

  useEffect(() => {
    if (service) {
      document.title = `${service.title} - Emergency Clean Experts | Miami-Dade, Broward, Monroe Counties`;

      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', service.metaDescription);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = service.metaDescription;
        document.head.appendChild(meta);
      }
    }
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/" className="text-emerald-600 hover:text-emerald-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

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

      <div className="container mx-auto px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
          {service.title}
        </h1>

        <div className="mb-12">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg mb-12">
          <p className="text-lg text-gray-800">
            <strong>Service Areas:</strong> Miami-Dade County, Broward County, Monroe County
          </p>
        </div>

        <div className="text-center py-12">
          <a
            href="tel:+17869060355"
            className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Phone className="w-5 h-5" />
            <span>Call for Emergency Service: (786) 906-0355</span>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
