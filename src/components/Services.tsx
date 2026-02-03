import {
  Droplets,
  Flame,
  Wind,
  Biohazard,
  Home,
  FlaskConical,
  Waves,
  Trash2,
  Phone,
  Bug
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Bug,
    title: 'Mold Remediation & Testing',
    description: 'Professional mold remediation services including advanced mold inspection, laboratory testing, complete mold removal, and post-verification to ensure safe indoor air quality in Miami.',
    image: '/mold_remediation_medium.png',
    slug: 'mold-remediation',
    path: '/mold-remediation-testing-miami'
  },
  {
    icon: Droplets,
    title: 'Water Mitigation & Flood Damage',
    description: 'Emergency water mitigation, water extraction, structural drying, dehumidification, and complete flood damage restoration for residential and commercial properties.',
    image: '/water_restoration_extracting_large.png',
    slug: 'water-mitigation',
    path: '/water-damage-restoration-miami'
  },
  {
    icon: Flame,
    title: 'Fire & Smoke Damage Cleanup',
    description: 'Complete fire damage restoration including smoke odor removal, soot cleanup, structural repairs, and emergency board-up services in Miami, FL.',
    image: '/fire_restoration_team_work.png',
    slug: 'fire-smoke-cleanup',
    path: '/fire-smoke-damage-restoration-miami'
  },
  {
    icon: Biohazard,
    title: 'Biohazard & Crime Scene Cleanup',
    description: 'Certified biohazard cleanup, crime scene cleanup, trauma scene remediation, blood cleanup, and hazardous material removal with complete discretion and compassion.',
    image: '/crime_scene_clean_up_large.png',
    slug: 'biohazard-cleanup',
    path: '/biohazard-crime-scene-cleanup-miami'
  },
  {
    icon: Trash2,
    title: 'Full Cleanup & Decluttering',
    description: 'Professional hoarding cleanup, estate cleanouts, and complete property decluttering services for residential and commercial spaces with compassion and efficiency.',
    image: '/declutter_services.png',
    slug: 'hoarding-cleanup',
    path: '/hoarding-cleanup-miami'
  },
  {
    icon: Wind,
    title: 'Odor Removal & Decontamination',
    description: 'Science-based odor elimination and decontamination for smoke, pet urine, chemical, bio-related, and moisture odors in homes, businesses, and vehicles.',
    image: '/odor_remediation.png',
    slug: 'odor-removal',
    path: '/odor-removal-decontamination-miami'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Restoration Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We handle every aspect of environmental restoration and remediation with certified technicians,
            advanced equipment, and proven processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <service.icon className="w-12 h-12 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to={service.path || `/services/${service.slug}`}
                  className="mt-4 text-emerald-600 font-semibold hover:text-emerald-700 flex items-center space-x-2 group"
                >
                  <span>Learn More</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="tel:+17869060355"
            className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Phone className="w-5 h-5" />
            <span>Request Emergency Service</span>
          </a>
        </div>
      </div>
    </section>
  );
}
