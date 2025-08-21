import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  CheckCircle,
} from "lucide-react";

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "Amit Sharma",
      role: "Software Engineer",
      company: "IT Professional",
      content:
        "Buying my first flat felt overwhelming, but the Rishita Mulberry team made it so easy. They patiently explained everything and helped me secure a beautiful 2BHK within my budget. Truly grateful!",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Verma",
      role: "HR Manager",
      company: "Corporate Sector",
      content:
        "I was looking for a premium property in Lucknow to settle my parents. The project exceeded our expectations – excellent location, world-class amenities, and smooth documentation process.",
      rating: 5,
    },
    {
      id: 3,
      name: "Rahul Khanna",
      role: "Business Consultant",
      company: "NRI Investor",
      content:
        "As an NRI, I wanted a reliable investment in India. The Rishita team guided me through everything online and helped me invest in a luxury apartment. Great returns and a trustworthy experience.",
      rating: 5,
    },
    {
      id: 4,
      name: "Sneha Iyer",
      role: "UI/UX Designer",
      company: "Tech Industry",
      content:
        "We wanted a modern, spacious apartment with amenities for our growing family. Mulberry Heights offered everything – from clubhouse to green surroundings. A perfect choice for us!",
      rating: 5,
    },
    {
      id: 5,
      name: "Rajesh Patel",
      role: "Entrepreneur",
      company: "Real Estate Investor",
      content:
        "I was impressed with the transparency and professionalism of the sales team. The project quality is excellent, and possession was exactly on time. Highly recommended for anyone looking to invest in Lucknow.",
      rating: 5,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 8 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-orange-500 fill-orange-500" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="testimonial" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-orange-500 text-white px-6 py-2 mb-5 rounded-full text-lg font-semibold shadow-sm">
            <CheckCircle className="w-5 h-5 mr-2" />
            What Our Buyers Say About Us
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about their experience.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          {/* Main Testimonial Display */}
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-xl p-8 sm:p-12 relative overflow-hidden">
            {/* Decorative Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-16 h-16 text-orange-500" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-xl sm:text-2xl text-gray-800 text-center mb-8 leading-relaxed font-medium">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author Info */}
              <div className="text-center">
                <div className="inline-flex flex-col items-center">
                  {/* Name Circle */}
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-xl">
                      {testimonials[currentIndex].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h4 className="font-bold text-lg text-gray-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-orange-600 font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-orange-50 text-orange-500 hover:text-orange-600 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-orange-50 text-orange-500 hover:text-orange-600 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-orange-500 w-8"
                  : "bg-gray-300 hover:bg-orange-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Indicator */}
        <div className="text-center mt-6">
          {/* <p className="text-sm text-gray-500">
            {isAutoPlaying ? (
              <span className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span>Auto-playing</span>
              </span>
            ) : (
              "Paused - will resume automatically"
            )}
          </p> */}
        </div>

        {/* Additional Trust Elements */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6 bg-orange-50 rounded-xl">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-700">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-xl">
            <div className="text-3xl font-bold text-orange-600 mb-2">4.9/5</div>
            <div className="text-gray-700">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-xl">
            <div className="text-3xl font-bold text-orange-600 mb-2">99%</div>
            <div className="text-gray-700">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
