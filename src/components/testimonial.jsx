import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { CheckCircle } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Amit Sharma",
    position: "Entrepreneur",
    company: "Resident at DPS Palladio",
    content:
      "Choosing DPS Palladio was the best decision for my family. The blend of luxury and comfort, along with a vibrant community, makes every day special.",
  },
  {
    id: 2,
    name: "Neha Verma",
    position: "Architect",
    company: "Resident at DPS Palladio",
    content:
      "As an architect, I truly appreciate the thoughtful design and attention to detail. Palladio has set a new benchmark for modern living in Lucknow.",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    position: "Software Engineer",
    company: "Resident at DPS Palladio",
    content:
      "The amenities here are world-class. From the gym to the landscaped gardens, every facility adds immense value to our lifestyle.",
  },
  {
    id: 4,
    name: "Priya Kapoor",
    position: "Interior Designer",
    company: "Resident at DPS Palladio",
    content:
      "Palladio is not just a home, it’s an experience. The open spaces and premium interiors make it a dream come true.",
  },
  {
    id: 5,
    name: "Sanjay Gupta",
    position: "Business Consultant",
    company: "Resident at DPS Palladio",
    content:
      "The security and convenience offered here give me complete peace of mind. It’s a perfect place for families.",
  },
  {
    id: 6,
    name: "Ananya Singh",
    position: "Doctor",
    company: "Resident at DPS Palladio",
    content:
      "After a long day at work, coming back to Palladio feels like entering a sanctuary. The calm environment and greenery are refreshing.",
  },
  {
    id: 7,
    name: "Vikram Khanna",
    position: "Banker",
    company: "Resident at DPS Palladio",
    content:
      "The balance of luxury and affordability here is unmatched. Palladio truly lives up to its promise of elevating lifestyles.",
  },
  {
    id: 8,
    name: "Ritika Malhotra",
    position: "Professor",
    company: "Resident at DPS Palladio",
    content:
      "What I love most is the sense of community. Neighbors quickly become friends, and the shared spaces encourage meaningful connections.",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="w-full mx-auto px-4 py-6 bg-gray-100">
      <div className="text-center mb-5">
        <div className="text-center mb-3">
          <div className="inline-flex items-center bg-[#C5A46D] text-white px-6 py-2 rounded-full text-lg font-semibold shadow-sm">
            <CheckCircle className="w-5 h-5 mr-2" />
            What Our Clients Say
          </div>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover why thousands of businesses trust us to deliver exceptional
          results
        </p>
      </div>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-blue-500 !w-3 !h-3",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-blue-600",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="testimonial-swiper pb-12"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 h-full border border-gray-100 mb-10">
              {/* Quote Icon */}
              <div className="mb-6">
                <svg
                  className="w-8 h-8 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 flex-grow">
                "{testimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="border-t border-gray-100 pt-6">
                <div className="font-semibold text-gray-900 text-lg mb-1">
                  {testimonial.name}
                </div>
                <div className="text-blue-600 font-medium mb-1">
                  {testimonial.position}
                </div>
                <div className="text-gray-500 text-sm">
                  {testimonial.company}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button className="swiper-button-prev !static !w-12 !h-12 !mt-0 hover:bg-[#C5A46D]  text-white rounded-full transition-colors duration-200 flex items-center justify-center shadow-lg"></button>
        <button className="swiper-button-next !static !w-12 !h-12 !mt-0  hover:bg-[#C5A46D]  text-white rounded-full transition-colors duration-200 flex items-center justify-center shadow-lg"></button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
