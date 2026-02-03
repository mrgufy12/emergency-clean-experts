import Hero from '../components/Hero';
import EmergencyBanner from '../components/EmergencyBanner';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Coverage from '../components/Coverage';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Hero />
      <EmergencyBanner />
      <Services />

      <section id="regular-cleaning" className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border-2 border-blue-200 p-10 text-center shadow-sm">
              <Sparkles className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                Do You Just Need Regular Cleaning?
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                Not an emergency? We also provide professional cleaning services for homes, apartments, and businesses.
              </p>
              <Link
                to="/professional-cleaning-services-miami"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <Sparkles className="w-5 h-5" />
                <span>View Regular Cleaning Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Process />
      <Coverage />
      <ContactForm />

      <section className="py-8 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-700 text-lg max-w-5xl mx-auto leading-relaxed">
            <strong>Beyond Emergencies:</strong> Emergency Clean Experts also provides{' '}
            <Link
              to="/professional-cleaning-services-miami"
              className="text-blue-600 hover:text-blue-700 font-semibold underline"
            >
              professional cleaning services
            </Link>
            {' '}for move-outs, post-remediation, and everyday property cleaning needs.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
