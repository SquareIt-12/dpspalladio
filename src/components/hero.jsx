import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Img1 from "../assets/banner1.jpg";
import Img2 from "../assets/banner2.jpg";
import Img3 from "../assets/banner3.jpg";


const slides = [
  {
    image: Img1,
  },
  {
    image: Img2,
  },
  {
    image: Img3,
  },
];

const Banner = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100); // Preload effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.image} className="w-full h-full object-cover" />
            
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Floating Animation Elements */}
      
    </section>
  );
};

export default Banner;
