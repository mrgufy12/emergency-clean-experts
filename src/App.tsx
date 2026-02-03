import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import MoldRemediationPage from './pages/MoldRemediationPage';
import WaterDamageRestorationPage from './pages/WaterDamageRestorationPage';
import HoardingCleanupPage from './pages/HoardingCleanupPage';
import BiohazardCleanupPage from './pages/BiohazardCleanupPage';
import FireDamageRestorationPage from './pages/FireDamageRestorationPage';
import OdorRemovalPage from './pages/OdorRemovalPage';
import ProfessionalCleaningPage from './pages/ProfessionalCleaningPage';
import AboutUsPage from './pages/AboutUsPage';
import OurProcessPage from './pages/OurProcessPage';
import ServiceAreasPage from './pages/ServiceAreasPage';
import CertificationsPage from './pages/CertificationsPage';
import InsuranceClaimsPage from './pages/InsuranceClaimsPage';
import FAQPage from './pages/FAQPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/professional-cleaning-services-miami" element={<ProfessionalCleaningPage />} />
          <Route path="/mold-remediation-testing-miami" element={<MoldRemediationPage />} />
          <Route path="/water-damage-restoration-miami" element={<WaterDamageRestorationPage />} />
          <Route path="/hoarding-cleanup-miami" element={<HoardingCleanupPage />} />
          <Route path="/biohazard-crime-scene-cleanup-miami" element={<BiohazardCleanupPage />} />
          <Route path="/fire-smoke-damage-restoration-miami" element={<FireDamageRestorationPage />} />
          <Route path="/odor-removal-decontamination-miami" element={<OdorRemovalPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/our-process" element={<OurProcessPage />} />
          <Route path="/service-areas" element={<ServiceAreasPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/insurance-claims" element={<InsuranceClaimsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
