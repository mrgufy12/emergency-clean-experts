import { AlertTriangle, Phone } from 'lucide-react';

export default function EmergencyBanner() {
  return (
    <div className="bg-red-600 text-white py-4 sm:py-4">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 animate-pulse" />
            <p className="font-semibold text-base sm:text-lg">
              Emergency? We're Available 24/7/365
            </p>
          </div>
          <a
            href="tel:+17869060355"
            className="flex items-center justify-center space-x-2 bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors w-full sm:w-auto"
          >
            <Phone className="w-5 h-5" />
            <span className="text-base">(786) 906-0355</span>
          </a>
        </div>
      </div>
    </div>
  );
}
