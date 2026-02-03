import { Shield, Lock, Eye, FileText, Mail, Phone } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-12 h-12 text-emerald-400" />
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-slate-300 text-lg">
            Last Updated: February 3, 2026
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed">
              Emergency Clean Experts LLC ("we," "our," or "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or request our specialized cleaning services.
            </p>

            <div className="mt-8 space-y-8">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-slate-900 m-0">1. Information We Collect</h2>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  We collect information that is necessary to provide you with an accurate estimate and emergency service response. This includes:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li><strong>Personal Information:</strong> Name, phone number, email address, and physical address of the property requiring service.</li>
                  <li><strong>Incident Details:</strong> Information regarding the nature of the emergency (e.g., water leak source, mold location, biohazard type) to ensure our team arrives with the correct equipment.</li>
                  <li><strong>Digital Data:</strong> IP addresses, browser data, cookies, and usage information to improve our website's performance and user experience.</li>
                  <li><strong>Communication Records:</strong> Records of our communications with you, including phone calls, emails, and text messages for quality assurance and training purposes.</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-slate-900 m-0">2. How We Use Your Information</h2>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  We use your data strictly for legitimate business purposes, including:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>Providing rapid response quotes and scheduling services</li>
                  <li>Communicating with insurance companies on your behalf (only with your explicit permission)</li>
                  <li>Internal record keeping and legal compliance</li>
                  <li>Sending invoicing, service completion reports, and appointment reminders</li>
                  <li>Improving our services and customer experience</li>
                  <li>Sending service-related communications (we do not send marketing emails without consent)</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-slate-900 m-0">3. Sharing of Information</h2>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  <strong>We do not sell, rent, or trade your personal information.</strong> We may share your data only with:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li><strong>Trusted Subcontractors:</strong> If specialized third-party equipment or expertise is needed for your restoration project.</li>
                  <li><strong>Legal Authorities:</strong> If required by law or to protect the safety of our team and the public (e.g., in biohazard/crime scene scenarios).</li>
                  <li><strong>Service Providers:</strong> We use secure third-party tools (such as Supabase for data storage) to manage our customer database. These providers are contractually obligated to protect your data.</li>
                  <li><strong>Insurance Companies:</strong> With your explicit authorization, we share necessary information to process your claims.</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-slate-900 m-0">4. Data Security</h2>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  We implement industry-standard security measures to protect your personal information from unauthorized access, including:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>Encrypted data transmission (SSL/TLS)</li>
                  <li>Secure database storage with access controls</li>
                  <li>Regular security audits and updates</li>
                  <li>Employee training on data privacy and security</li>
                </ul>
                <p className="text-slate-700 leading-relaxed mt-4">
                  However, please note that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-slate-900 m-0">5. Cookies and Tracking Technologies</h2>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Our website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small files stored on your device that help us:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>Remember your preferences</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Improve website functionality</li>
                </ul>
                <p className="text-slate-700 leading-relaxed mt-4">
                  You can control cookie settings through your browser preferences. Note that disabling cookies may affect website functionality.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-slate-900 m-0">6. Your Privacy Rights</h2>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal record-keeping requirements)</li>
                  <li><strong>Opt-Out:</strong> Opt out of marketing communications at any time</li>
                  <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                </ul>
                <p className="text-slate-700 leading-relaxed mt-4">
                  <strong>California Residents (CCPA):</strong> California residents have additional rights under the California Consumer Privacy Act, including the right to know what personal information is collected and the right to opt-out of the sale of personal information (note: we do not sell personal information).
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-slate-900 m-0">7. Data Retention</h2>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Service records may be retained for up to 7 years for legal and business purposes.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-slate-900 m-0">8. Third-Party Links</h2>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-slate-900 m-0">9. Children's Privacy</h2>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-slate-900 m-0">10. Changes to This Privacy Policy</h2>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date.
                </p>
              </section>

              <section className="bg-blue-50 rounded-xl p-6 mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-slate-900 m-0">11. Contact Us</h2>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or wish to exercise your privacy rights, please contact us at:
                </p>
                <div className="space-y-2 text-slate-700">
                  <p><strong>Emergency Clean Experts LLC</strong></p>
                  <p>Email: <a href="mailto:service@emergencyclean.com" className="text-blue-600 hover:text-blue-700 font-semibold">service@emergencyclean.com</a></p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone: <a href="tel:+17869060355" className="text-blue-600 hover:text-blue-700 font-semibold">(786) 906-0355</a>
                  </p>
                  <p>Location: Miami, FL, USA</p>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
