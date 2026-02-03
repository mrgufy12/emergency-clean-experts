import { useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service_type: '',
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
        service_type: '',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Request Service
          </h2>
          <p className="text-xl text-slate-600">
            Fill out the form below and we'll get back to you right away
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="service_type" className="block text-sm font-semibold text-slate-700 mb-2">
                What service do you need? *
              </label>
              <select
                id="service_type"
                name="service_type"
                required
                value={formData.service_type}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">Select a service...</option>
                <option value="Water Damage Restoration">Water Damage Restoration</option>
                <option value="Fire & Smoke Damage">Fire & Smoke Damage</option>
                <option value="Mold Remediation">Mold Remediation</option>
                <option value="Biohazard Cleanup">Biohazard Cleanup</option>
                <option value="Hoarding Cleanup">Hoarding Cleanup</option>
                <option value="Odor Removal">Odor Removal</option>
                <option value="Professional Cleaning">Professional Cleaning</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="(786) 906-0355"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-semibold text-slate-700 mb-2">
                Service Address *
              </label>
              <textarea
                id="address"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="66 W Flagler St, Miami, FL 33130"
              />
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
              <label className="flex items-start cursor-pointer group">
                <input
                  type="checkbox"
                  name="is_emergency"
                  checked={formData.is_emergency}
                  onChange={handleChange}
                  className="w-5 h-5 mt-0.5 text-red-600 border-red-300 rounded focus:ring-red-500 focus:ring-2 cursor-pointer"
                />
                <div className="ml-3">
                  <span className="block text-base font-semibold text-slate-900 group-hover:text-red-600 transition-colors">
                    This is an emergency
                  </span>
                  <span className="block text-sm text-slate-600 mt-1">
                    Check this box if you need immediate assistance
                  </span>
                </div>
              </label>
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-900">Request Submitted Successfully!</p>
                  <p className="text-sm text-green-700 mt-1">
                    We'll contact you shortly to confirm your service appointment.
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
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>

            <p className="text-center text-sm text-slate-500">
              Or call us directly at{' '}
              <a href="tel:+17869060355" className="text-blue-600 hover:text-blue-700 font-semibold">
                (786) 906-0355
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
