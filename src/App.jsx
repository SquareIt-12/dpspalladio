import { PhoneCall } from "lucide-react";
import "./App.css";
import EnquiryFormPopup from "./components/enquiry-form";
import FeaturesSection from "./components/features";
import FloorPlanSection from "./components/floorplan-section";
import ContactSection from "./components/footer";
import GallerySection from "./components/gallery-section";
import Header from "./components/header";
import Banner from "./components/hero";
import OverviewSection from "./components/overview-section";
import PricePlanSection from "./components/priceplan-section";
import { FaLongArrowAltUp, FaWhatsapp } from "react-icons/fa";
import Footer from "./components/footer-end";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior: "smooth",
    })
  }
  return (
    <>
      {/* Floating CTA Buttons */}
      <div className="fixed bottom-4 left-4 flex flex-col gap-3 z-50">
        <a
          href="tel:+918808698649"
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition duration-300"
        >
          <PhoneCall className="w-5 h-5" />
        </a>

        <a
          href="https://wa.me/918808698649"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition duration-300"
        >
          <FaWhatsapp className="w-5 h-5" />
        </a>
      </div>

      <Header />
      <Banner />
      <OverviewSection />
      <FeaturesSection />
      <FloorPlanSection />
      <GallerySection />
      <PricePlanSection />
      <ContactSection />
      <EnquiryFormPopup />
      <Footer />
      {/* <ToastContainer position="bottom-left" autoClose={3000} /> */}
      <div className="lg:flex hidden fixed bottom-24 right-7 flex flex-col gap-3 z-50 bg-red-700 rounded-full p-3"
      >
        <button onClick={scrollToTop}>
      <FaLongArrowAltUp color="white" className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}

export default App;
