import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Img1 from "/images/banner1.jpg";
import Img2 from "/images/banner2.jpg";
import Img3 from "/images/banner4.jpg";


const slides = [
  {
    image: Img3,
  },
  {
    image: Img2,
  },
  {
    image: Img1,
  },
];

const Banner = () => {


  return (
    // <section className="relative w-full h-[90vh] mt-20 overflow-hidden">
    //   <Swiper
    //     modules={[Autoplay, Pagination, EffectFade]}
    //     autoplay={{ delay: 4000, disableOnInteraction: false }}
    //     pagination={{ clickable: true }}
    //     effect="fade"
    //     loop
    //     className="w-full h-full"
    //   >
    //     {slides.map((slide, index) => (
    //       <SwiperSlide key={index}>
    //         <img
    //           src={slide.image}
    //           loading="lazy"
    //           className="w-full h-full object-fill"
    //         />
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>

    //   {/* Floating Animation Elements */}
    // </section>
    <section className="relative w-full h-[80vh] mt-20 overflow-hidden">
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
        <img
          src={slide.image}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
    ))}
  </Swiper>
</section>

  );
};

export default Banner;
