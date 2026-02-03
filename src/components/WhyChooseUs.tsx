import {
  Award,
  Clock,
  Shield,
  Users,
  CheckCircle2,
  Microscope,
  TrendingUp,
  FileCheck
} from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Certified Professionals',
    description: 'Licensed, insured, and certified technicians with extensive training in all restoration disciplines.'
  },
  {
    icon: Clock,
    title: '24/7 Emergency Response',
    description: 'Immediate response any time, day or night. On-site assessment within hours of your call.'
  },
  {
    icon: Microscope,
    title: 'Laboratory Testing',
    description: 'Advanced mold inspection with laboratory-based testing for accurate diagnosis and verification.'
  },
  {
    icon: Shield,
    title: 'Full Insurance Support',
    description: 'We work directly with your insurance company to streamline claims and documentation.'
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Decades of combined experience in environmental restoration and emergency response.'
  },
  {
    icon: FileCheck,
    title: 'Complete Documentation',
    description: 'Detailed assessments, photo documentation, and post-remediation verification reports.'
  },
  {
    icon: TrendingUp,
    title: 'Advanced Equipment',
    description: 'Industrial-grade restoration equipment including thermal imaging, moisture meters, and air scrubbers.'
  },
  {
    icon: CheckCircle2,
    title: 'Quality Guarantee',
    description: 'We stand behind our work with comprehensive warranties and satisfaction guarantees.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Emergency Clean Experts?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving Miami with water mitigation, mold remediation, biohazard cleanup, crime scene cleanup,
            hoarding cleanup, and comprehensive environmental restoration services backed by certified technicians.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4 group-hover:bg-emerald-600 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-12 text-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Residential & Commercial Services
              </h3>
              <p className="text-emerald-100 text-lg mb-6 leading-relaxed">
                Whether you're a homeowner dealing with water damage or a property manager handling
                a large-scale remediation, we have the expertise and resources to restore your property
                quickly and completely.
              </p>
              <ul className="space-y-3">
                {[
                  'Single-family homes and apartments',
                  'Office buildings and retail spaces',
                  'Industrial and warehouse facilities',
                  'Healthcare and educational institutions'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="/before_and_after_combo_large.png"
                alt="Before and after restoration results"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
