import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        "AV Communication executed our team-building retreat flawlessly. Great experience!",
      author: "HR Manager",
      company: "Apollo Tyres",
      rating: 5,
      logo: "AT", // Mock logo initials
    },
    {
      id: 2,
      quote:
        "Professional, impactful, and smooth coordination throughout the event.",
      author: "Event Head",
      company: "Dabur",
      rating: 5,
      logo: "DB", // Mock logo initials
    },
    {
      id: 3,
      quote:
        "Outstanding service delivery and attention to detail. Highly recommended for corporate events.",
      author: "Marketing Director",
      company: "Tech Solutions Inc",
      rating: 5,
      logo: "TS", // Mock logo initials
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="max-w-6xl mx-auto p-8 mb-10">
      {/* Section Header */}
      <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-3 rounded-full lg:text-3xl md:text-2xl font-semibold mb-8 border border-blue-100">
                        <CheckCircle className="w-4 h-4" />
                        <h2 className="text-3xl font-bold ">
                  Testimonials
                </h2>
              </div>
            </div>

      {/* Testimonials Slider */}
      <div className="relative">
        {/* Main Slider Container */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full flex-shrink-0 p-8 md:p-12"
              >
                <div className="max-w-4xl mx-auto text-center">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <Quote className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Star Rating */}
                  <div className="flex justify-center gap-1 mb-6">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center justify-center gap-4">
                    {/* Company Logo/Initial */}
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.logo}
                    </div>

                    {/* Author Details */}
                    <div className="text-left">
                      <div className="font-semibold text-gray-800 text-lg">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-600">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {/* Navigation Arrows */}
{/* Desktop Arrows (Side Center) */}
<div className="hidden md:block">
  <button
    onClick={prevSlide}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
    aria-label="Previous testimonial"
  >
    <ChevronLeft className="w-6 h-6 text-gray-600" />
  </button>

  <button
    onClick={nextSlide}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
    aria-label="Next testimonial"
  >
    <ChevronRight className="w-6 h-6 text-gray-600" />
  </button>
</div>

{/* Mobile Arrows (Below Card Centered) */}
<div className="flex justify-center gap-6 mt-6 md:hidden">
  <button
    onClick={prevSlide}
    className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
    aria-label="Previous testimonial"
  >
    <ChevronLeft className="w-5 h-5 text-gray-600" />
  </button>

  <button
    onClick={nextSlide}
    className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
    aria-label="Next testimonial"
  >
    <ChevronRight className="w-5 h-5 text-gray-600" />
  </button>
</div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-blue-600 w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      
    </div>
  );
};

export default TestimonialsSection;
