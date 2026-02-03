import { FileText, AlertTriangle, Shield, DollarSign, Scale, Phone, Mail } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-12 h-12 text-emerald-400" />
            <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
          </div>
          <p className="text-slate-300 text-lg">
            Effective Date: February 3, 2026
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-yellow-900 text-lg mb-2">Important Legal Agreement</h3>
                <p className="text-yellow-800">
                  By accessing our website or authorizing our services, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully before using our services.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900 m-0">1. Services Provided</h2>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Emergency Clean Experts LLC specializes in emergency restoration and specialized cleaning services, including but not limited to:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>Mold Remediation and Testing</li>
                <li>Water Damage Mitigation and Restoration</li>
                <li>Fire and Smoke Damage Restoration</li>
                <li>Biohazard and Trauma Scene Cleanup</li>
                <li>Crime Scene Cleanup</li>
                <li>Hoarding Cleanup Services</li>
                <li>Odor Removal and Air Quality Restoration</li>
                <li>Professional Cleaning Services</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                All services are performed in accordance with industry standards including IICRC (Institute of Inspection, Cleaning and Restoration Certification), EPA guidelines, and OSHA safety regulations.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900 m-0">2. Authorization & Property Access</h2>
              </div>
              <p className="text-slate-700 leading-relaxed">
                By requesting our service, you authorize Emergency Clean Experts LLC and its technicians to:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>Enter the property to perform inspections, assessments, and estimates</li>
                <li>Conduct necessary remediation and restoration work</li>
                <li>Use specialized equipment including air movers, dehumidifiers, and containment systems</li>
                <li>Remove affected materials as necessary for proper restoration</li>
                <li>Document the work process through photos and videos for insurance purposes</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                <strong>You represent and warrant that:</strong> You are the property owner or have the legal authority to authorize these services. You will notify all tenants, occupants, and relevant parties of our work. You have disclosed all known hazards on the property.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900 m-0">3. Estimates and Payments</h2>
              </div>
              <div className="space-y-4 text-slate-700">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Estimates</h3>
                  <p className="leading-relaxed">
                    Initial visual estimates are provided in good faith based on visible conditions at the time of inspection. These estimates are non-binding and may be adjusted based on:
                  </p>
                  <ul className="space-y-1 mt-2">
                    <li>Hidden damage discovered during the remediation process (e.g., mold behind walls, water damage to subflooring)</li>
                    <li>Changes in scope requested by the client or insurance adjuster</li>
                    <li>Unforeseen complications or hazardous materials requiring specialized handling</li>
                  </ul>
                  <p className="mt-2 leading-relaxed">
                    We will notify you of any significant changes to the scope or cost before proceeding with additional work.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Insurance Claims</h3>
                  <p className="leading-relaxed">
                    We work directly with insurance companies and can assist with the claims process. However:
                  </p>
                  <ul className="space-y-1 mt-2">
                    <li>The policyholder (you) is ultimately responsible for payment</li>
                    <li>You are responsible for your insurance deductible</li>
                    <li>You are responsible for any costs not covered by your insurance policy</li>
                    <li>Insurance approval does not guarantee full payment of all services</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Payment Terms</h3>
                  <p className="leading-relaxed">
                    Payment is due upon completion of services unless otherwise agreed to in writing. We accept:
                  </p>
                  <ul className="space-y-1 mt-2">
                    <li>Cash, check, or credit card payments</li>
                    <li>Insurance assignment of benefits (with proper authorization)</li>
                    <li>Financing options (subject to credit approval)</li>
                  </ul>
                  <p className="mt-2 leading-relaxed">
                    <strong>Late Payment:</strong> Accounts not paid within 30 days may be subject to a 1.5% monthly finance charge (18% APR) or the maximum rate allowed by law, whichever is less.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900 m-0">4. Health & Safety Requirements</h2>
              </div>
              <p className="text-slate-700 leading-relaxed">
                For your safety and the safety of our technicians:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Biohazard & Mold Containment:</strong> Our team utilizes specialized Personal Protective Equipment (PPE) and containment systems. Clients, family members, and pets must remain outside designated containment zones until the area is declared safe.</li>
                <li><strong>Compliance with Instructions:</strong> You must follow all safety instructions provided by our technicians, including evacuation requirements and re-entry restrictions.</li>
                <li><strong>Health Conditions:</strong> Notify us immediately if anyone in the household has respiratory issues, allergies, or compromised immune systems.</li>
                <li><strong>Pets:</strong> Secure all pets during our work. We are not responsible for pets that escape or are injured due to your failure to secure them.</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4 font-semibold">
                We are not liable for health issues resulting from failure to adhere to our safety instructions or premature re-entry into work areas.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900 m-0">5. Limitation of Liability</h2>
              </div>
              <p className="text-slate-700 leading-relaxed">
                While we strive to restore property to pre-loss condition or better:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>Emergency Clean Experts LLC is not liable for pre-existing structural damage, code violations, or defects present before our arrival</li>
                <li>We are not liable for secondary damage caused by the initial incident (e.g., water rot that existed prior to our service)</li>
                <li>We are not responsible for damage to personal property that was not properly disclosed or moved prior to service</li>
                <li>Our total liability shall not exceed the amount paid for the specific service in question</li>
                <li>We maintain comprehensive general liability insurance and workers' compensation coverage as required by law</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                <strong>No Warranties:</strong> Services are provided "as is" without warranties of any kind, express or implied. We do not guarantee that all damage can be repaired or that all contaminants can be completely eliminated, though we use industry-standard methods to achieve the best possible results.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900 m-0">6. Cancellation Policy</h2>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Due to the emergency nature of our business, resources (technicians, equipment, vehicles) are dispatched immediately upon service authorization:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Before Dispatch:</strong> Cancellations made before crew dispatch are not subject to fees</li>
                <li><strong>After Dispatch:</strong> Cancellations made after the crew has been dispatched may incur a service call fee of up to $250 to cover mobilization costs</li>
                <li><strong>On-Site Cancellation:</strong> If you cancel after our crew arrives on-site, you will be charged the full service call fee plus any assessment fees</li>
                <li><strong>Rescheduling:</strong> We understand emergencies evolve. Please contact us as soon as possible if you need to reschedule</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900 m-0">7. Equipment and Materials</h2>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Our equipment remains our property throughout the service period:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>You are responsible for the security of our equipment placed on your property</li>
                <li>Daily monitoring fees may apply if equipment must remain on-site for extended periods</li>
                <li>You must provide reasonable access to utilities (electricity, water) necessary for equipment operation</li>
                <li>Report any equipment malfunctions immediately</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900 m-0">8. Indemnification</h2>
              </div>
              <p className="text-slate-700 leading-relaxed">
                You agree to indemnify and hold harmless Emergency Clean Experts LLC, its employees, and contractors from any claims, damages, or expenses arising from:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>Your failure to disclose known hazards or property conditions</li>
                <li>Your failure to follow safety instructions provided by our team</li>
                <li>Your breach of these Terms and Conditions</li>
                <li>Any third-party claims related to your property or the incident requiring service</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900 m-0">9. Dispute Resolution</h2>
              </div>
              <div className="space-y-4 text-slate-700">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Governing Law</h3>
                  <p className="leading-relaxed">
                    These Terms and Conditions are governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Arbitration Agreement</h3>
                  <p className="leading-relaxed">
                    Any dispute arising from these Terms or our services shall first be attempted to be resolved through good faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration in Miami-Dade County, Florida, in accordance with the rules of the American Arbitration Association. You waive your right to participate in class action lawsuits.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Jurisdiction</h3>
                  <p className="leading-relaxed">
                    Any disputes not subject to arbitration shall be subject to the exclusive jurisdiction of the state and federal courts located in Miami-Dade County, Florida.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900 m-0">10. Emergency Services Disclaimer</h2>
              </div>
              <p className="text-slate-700 leading-relaxed">
                While we provide 24/7 emergency response services:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>Response times may vary based on weather, distance, and availability</li>
                <li>We are not liable for delays caused by circumstances beyond our control</li>
                <li>In life-threatening situations, always contact 911 first</li>
                <li>We reserve the right to refuse service in unsafe conditions</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900 m-0">11. Intellectual Property</h2>
              </div>
              <p className="text-slate-700 leading-relaxed">
                All content on our website, including text, graphics, logos, and images, is the property of Emergency Clean Experts LLC and protected by copyright law. You may not reproduce, distribute, or use any content without our written permission.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900 m-0">12. Severability</h2>
              </div>
              <p className="text-slate-700 leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that the remaining Terms remain in full force and effect.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900 m-0">13. Changes to Terms</h2>
              </div>
              <p className="text-slate-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. Material changes will be posted on our website with an updated effective date. Your continued use of our services after changes are posted constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900 m-0">14. Entire Agreement</h2>
              </div>
              <p className="text-slate-700 leading-relaxed">
                These Terms, together with any written service agreement and our Privacy Policy, constitute the entire agreement between you and Emergency Clean Experts LLC regarding our services and supersede all prior agreements and understandings.
              </p>
            </section>

            <section className="bg-blue-50 rounded-xl p-6 mt-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900 m-0">15. Contact Information</h2>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                For any questions regarding these Terms and Conditions or our services, please contact:
              </p>
              <div className="space-y-2 text-slate-700">
                <p><strong>Emergency Clean Experts LLC</strong></p>
                <p>Email: <a href="mailto:service@emergencyclean.com" className="text-blue-600 hover:text-blue-700 font-semibold">service@emergencyclean.com</a></p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone: <a href="tel:+17869060355" className="text-blue-600 hover:text-blue-700 font-semibold">(786) 906-0355</a>
                </p>
                <p>Location: Miami, Florida, USA</p>
                <p className="mt-4 text-sm text-slate-600">
                  Licensed and Insured | IICRC Certified | EPA Compliant | OSHA Trained
                </p>
              </div>
            </section>
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
