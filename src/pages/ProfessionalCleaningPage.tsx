import { useState } from 'react';
import { Phone, CheckCircle, Sparkles, Home, Building2, Calendar, MapPin, AlertCircle, CheckCircle2 } from 'lucide-react';
import Footer from '../components/Footer';
import { supabase } from '../lib/supabase';
import { Link } from 'react-router-dom';

export default function ProfessionalCleaningPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    is_emergency: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        address: '',
        is_emergency: false,
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <>
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link to="/" className="flex flex-col items-center sm:flex-row sm:items-center gap-3">
              <img
                src="/logo_emergency_clean_experts_copy.png"
                alt="Emergency Clean Experts Logo"
                className="h-16 sm:h-20 w-auto object-contain"
              />
              <div className="text-center sm:text-left">
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                  Emergency Clean Experts
                </h1>
                <p className="text-xs sm:text-sm text-slate-600">Professional Cleaning Services</p>
              </div>
            </Link>
            <a
              href="tel:+17869060355"
              className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              <span className="text-base">(786) 906-0355</span>
            </a>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start max-w-7xl mx-auto">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Professional Cleaning Services in Miami & South Florida
              </h1>
              <p className="text-xl sm:text-2xl text-slate-700 mb-6 sm:mb-8 font-medium">
                Reliable, flexible cleaning for homes, businesses, rentals, and properties of all sizes.
              </p>
              <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                Emergency Clean Experts provides professional, non-emergency cleaning services through a trusted network of experienced cleaning professionals across South Florida. Whether you need a one-time deep clean, ongoing maintenance, or specialty cleaning for a rental or commercial property, we connect you with reliable, vetted cleaners who meet our standards for quality and consistency.
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:+17869060355"
                  className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (786) 906-0355</span>
                </a>
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto"
                >
                  <span>Get a Free Quote</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Cleaning Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="hero-name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="hero-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="hero-phone" className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="hero-phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="(786) 906-0355"
                  />
                </div>

                <div>
                  <label htmlFor="hero-address" className="block text-sm font-semibold text-slate-700 mb-2">
                    Service Address *
                  </label>
                  <textarea
                    id="hero-address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="66 W Flagler St, Miami, FL 33130"
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-green-900">Quote Request Submitted!</p>
                      <p className="text-sm text-green-700 mt-1">
                        We'll contact you shortly with pricing information.
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-red-900">Submission Failed</p>
                      <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Get Free Cleaning Quote'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
                Our Professional Cleaning Services
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
                We offer a full range of residential and commercial cleaning services designed to fit your schedule, budget, and property needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                'Deep Cleaning',
                'Standard / Regular Cleaning',
                'Maintenance Cleaning',
                'Move-In / Move-Out Cleaning',
                'Post-Construction Cleaning',
                'Post-Renovation Cleaning',
                'Airbnb & Short-Term Rental Cleaning',
                'Hotel & Hospitality Cleaning',
                'Office & Commercial Cleaning',
                'One-Time Event / Party Cleaning'
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-slate-50 border-2 border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:scale-105"
                >
                  <CheckCircle className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="text-lg font-bold text-slate-900">{service}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
                Residential & Commercial Cleaning Solutions
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 border border-slate-200">
                <Home className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-4 sm:mb-6" />
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Residential Cleaning</h3>
                <ul className="space-y-4">
                  {[
                    'Apartments & condos',
                    'Single-family homes',
                    'Rental units',
                    'Airbnb & vacation rentals'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 border border-slate-200">
                <Building2 className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-4 sm:mb-6" />
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Commercial Cleaning</h3>
                <ul className="space-y-4">
                  {[
                    'Offices',
                    'Retail spaces',
                    'Restaurants',
                    'Hotels & hospitality properties',
                    'Property management portfolios'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Calendar className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 mx-auto mb-4 sm:mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
                Flexible Scheduling & Cleaning Plans
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-8 sm:mb-12">
                We understand that every property has different needs. That's why we offer flexible cleaning schedules and subscription-based services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                'One-time cleaning',
                'Weekly cleaning',
                'Bi-weekly cleaning',
                'Monthly cleaning',
                'Custom schedules',
                'Post-event or seasonal cleaning'
              ].map((option, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-slate-50 border-2 border-blue-300 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-200"
                >
                  <h3 className="text-lg font-bold text-slate-900">{option}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 mx-auto mb-4 sm:mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
                Service Areas Across South Florida
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-slate-200">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b-2 border-blue-600">
                  Miami-Dade County
                </h3>
                <ul className="space-y-2">
                  {[
                    'Miami',
                    'Miami Beach',
                    'Hialeah',
                    'Doral',
                    'Kendall',
                    'Coral Gables',
                    'Homestead',
                    'North Miami',
                    'Aventura',
                    'Cutler Bay'
                  ].map((city, index) => (
                    <li key={index} className="text-slate-700">{city}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-slate-200">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b-2 border-blue-600">
                  Broward County
                </h3>
                <ul className="space-y-2">
                  {[
                    'Fort Lauderdale',
                    'Hollywood',
                    'Pembroke Pines',
                    'Miramar',
                    'Weston',
                    'Davie',
                    'Plantation',
                    'Sunrise',
                    'Coral Springs',
                    'Pompano Beach'
                  ].map((city, index) => (
                    <li key={index} className="text-slate-700">{city}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-slate-200">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b-2 border-blue-600">
                  Monroe County
                </h3>
                <ul className="space-y-2">
                  {[
                    'Key Largo',
                    'Tavernier',
                    'Islamorada',
                    'Marathon',
                    'Big Pine Key',
                    'Summerland Key',
                    'Cudjoe Key',
                    'Stock Island',
                    'Key West',
                    'Layton'
                  ].map((city, index) => (
                    <li key={index} className="text-slate-700">{city}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
                Why Choose Emergency Clean Experts for Professional Cleaning
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  title: 'Trusted network of vetted cleaning professionals',
                  description: 'All cleaners in our network are carefully screened and trained to our quality standards'
                },
                {
                  title: 'Residential and commercial coverage',
                  description: 'From single-family homes to large commercial properties, we handle it all'
                },
                {
                  title: 'Flexible pricing and scheduling options',
                  description: 'Choose from one-time, weekly, bi-weekly, monthly, or custom cleaning schedules'
                },
                {
                  title: 'Consistent quality standards',
                  description: 'Every cleaning is performed to the same high standards you expect from us'
                },
                {
                  title: 'Single point of contact for multiple properties',
                  description: 'Perfect for property managers and owners with multiple units'
                },
                {
                  title: 'Professional coordination and customer support',
                  description: 'We handle all scheduling, coordination, and quality assurance for you'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-slate-50 border-2 border-blue-200 rounded-xl p-8 hover:shadow-lg transition-all duration-200"
                >
                  <CheckCircle className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-12 sm:py-20 bg-gradient-to-br from-blue-600 to-slate-700 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Get Professional Cleaning Without the Hassle
            </h2>
            <p className="text-lg sm:text-xl mb-8 sm:mb-10 text-blue-100">
              Whether you need a one-time deep clean or ongoing service, we make professional cleaning simple and reliable across South Florida.
            </p>
            <div className="flex flex-col gap-4 justify-center items-center">
              <a
                href="tel:+17869060355"
                className="inline-flex items-center justify-center space-x-3 bg-white text-blue-600 hover:bg-blue-50 px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl transition-all duration-200 shadow-2xl hover:shadow-xl w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Call (786) 906-0355</span>
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="inline-flex items-center justify-center space-x-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl transition-all duration-200 shadow-2xl hover:shadow-xl w-full sm:w-auto"
              >
                <span>Request a Free Quote</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
