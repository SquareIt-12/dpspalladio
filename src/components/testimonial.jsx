import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      designation: "Software Engineer",
    //   location: "Lucknow",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      testimonial: "Excellent service and beautiful property! The team was very professional and helped us find our dream home. The location is perfect with all amenities nearby."
    },
    {
      id: 2,
      name: "Priya Sharma",
      designation: "Marketing Manager",
    //   location: "Gomti Nagar",
      rating: 5,
      image:"/images/test1.jpg",
      testimonial: "Amazing experience with Ganesham Adept! The property quality is outstanding and the customer service exceeded our expectations. Highly recommended for anyone looking for premium homes."
    },
    {
      id: 3,
      name: "Amit Singh",
      designation: "Business Owner",
    //   location: "Indira Nagar",
      rating: 4,
      image: "/images/test5.jpg",
      testimonial: "Great investment opportunity! The construction quality is top-notch and the location has excellent connectivity. The team was transparent throughout the process."
    },
    {
      id: 4,
      name: "Sunita Gupta",
      designation: "Doctor",
    //   location: "Hazratganj",
      rating: 5,
      image: "/images/test2.jpg",
      testimonial: "Perfect home for our family! The amenities are fantastic and the neighborhood is very safe. The buying process was smooth and hassle-free."
    },
    {
      id: 5,
      name: "Vikash Mishra",
      designation: "CA",
    //   location: "Aliganj",
      rating: 5,
      image: "/images/test6.jpg",
      testimonial: "Outstanding service from start to finish! The property exceeded our expectations and the team was always available to address our concerns. Best decision we made!"
    },
    {
      id: 6,
      name: "Neha Agarwal",
      designation: "Teacher",
    //   location: "Mahanagar",
      rating: 5,
      image: "/images/test3.jpg",
      testimonial: "Wonderful experience! The team was patient with all our queries and helped us make the right choice. The property has all modern amenities and great connectivity."
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16" id='testimonial' >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with us.
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet custom-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
            }}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="testimonial-swiper pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 mx-2 relative overflow-hidden group h-full">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="w-16 h-16 text-blue-600" />
                  </div>
                  
                  {/* Profile Section */}
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-1">
                        <Quote className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                      <p className="text-blue-600 font-medium text-sm">{testimonial.designation}</p>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="ml-2 text-gray-600 text-sm font-medium">
                      {testimonial.rating}/5
                    </span>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 leading-relaxed text-base italic">
                    "{testimonial.testimonial}"
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border-2 border-gray-200 flex items-center justify-center cursor-pointer hover:border-blue-500 hover:scale-110 transition-all duration-300 md:flex hidden">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border-2 border-gray-200 flex items-center justify-center cursor-pointer hover:border-blue-500 hover:scale-110 transition-all duration-300 md:flex hidden">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Ready to become our next satisfied client?</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .testimonial-swiper .swiper-slide {
          height: auto;
          display: flex;
        }
        
        .testimonial-swiper .swiper-slide > div {
          width: 100%;
        }
        
        .custom-bullet {
          width: 12px !important;
          height: 12px !important;
          background: #3b82f6 !important;
          opacity: 0.3 !important;
          margin: 0 4px !important;
        }
        
        .custom-bullet-active {
          opacity: 1 !important;
          transform: scale(1.2) !important;
        }
        
        .swiper-pagination {
          bottom: 0 !important;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;