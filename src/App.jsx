import { PhoneCall } from 'lucide-react'
import './App.css'
import EnquiryFormPopup from './components/enquiry-form'
import FeaturesSection from './components/features'
import FloorPlanSection from './components/floorplan-section'
import ContactSection from './components/footer'
import GallerySection from './components/gallery-section'
import Header from './components/header'
import Banner from './components/hero'
import OverviewSection from './components/overview-section'
import PaymentPlanSection from './components/payment-section'
import PricePlanSection from './components/priceplan-section'

function App() {

  return (
    <>
    {/* Floating CTA Buttons */}
      <Header />
      <Banner />
      <OverviewSection  />
      <FeaturesSection />
      <FloorPlanSection />
      <GallerySection />
      <PricePlanSection />
      {/* <PaymentPlanSection /> */}
      <ContactSection />
      <EnquiryFormPopup />
    </>
  )
}

export default App
