import { Phone, ClipboardCheck, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Emergency Contact',
    description: 'Call us 24/7 for immediate assistance. Our team will gather information and dispatch technicians to your location.'
  },
  {
    icon: ClipboardCheck,
    number: '02',
    title: 'Detailed Assessment',
    description: 'On-site inspection with advanced equipment. We identify all damage, document findings, and create a comprehensive restoration plan.'
  },
  {
    icon: Wrench,
    number: '03',
    title: 'Complete Remediation',
    description: 'Professional restoration including containment, removal, treatment, drying, and cleaning using industry-leading methods and equipment.'
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Post-Verification',
    description: 'Final testing and inspection to ensure successful remediation. We provide documentation and certification of completion.'
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(30deg, #0f172a 12%, transparent 12.5%, transparent 87%, #0f172a 87.5%, #0f172a), linear-gradient(150deg, #0f172a 12%, transparent 12.5%, transparent 87%, #0f172a 87.5%, #0f172a), linear-gradient(30deg, #0f172a 12%, transparent 12.5%, transparent 87%, #0f172a 87.5%, #0f172a), linear-gradient(150deg, #0f172a 12%, transparent 12.5%, transparent 87%, #0f172a 87.5%, #0f172a)',
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From initial contact to final verification, we follow a systematic approach
            to ensure thorough restoration and your complete satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 h-full hover:border-emerald-500 transition-all duration-300 group">
                <div className="text-6xl font-bold text-emerald-500/20 mb-4">
                  {step.number}
                </div>
                <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-500/10 rounded-full mb-6 group-hover:bg-emerald-500 transition-all duration-300">
                  <step.icon className="w-7 h-7 text-emerald-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="tel:+17869060355"
            className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Phone className="w-5 h-5" />
            <span>Start Your Restoration Today</span>
          </a>
        </div>
      </div>
    </section>
  );
}
