import React from "react";
import {
  Building2,
  Bus ,
  Truck,
  Clock ,
  Cpu ,
  BarChart4 ,
  ArrowRight,
  CheckCircle,
  TimerReset,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const services = [
    {
      title: "LED Billboards",
      description: "Dynamic ads placed at strategic high-traffic locations.",
      icon: Building2,
      color: "bg-blue-500",
    },
    {
      title: "Dynamic Content Delivery",
      description: "Real-time ads triggered by time, location, or weather.",
      icon: TimerReset,
      color: "bg-green-500",
    },
    {
      title: "LED Vans",
      description: "Mobile LED vehicles for impactful on-the-go branding.",
      icon: Truck,
      color: "bg-yellow-500",
    },
    {
      title: "Media Inventory Access",
      description: "Access prime LED spots across high-traffic city zones.",
      icon: MapPin,
      color: "bg-red-500",
    },
    {
      title: "Programmatic Advertising",
      description: "Automated ad delivery using smart, real-time data.",
      icon: Cpu,
      color: "bg-purple-500",
    },
    {
      title: "Brand Impact Measurement",
      description: "Track campaign reach, footfall, and audience response.",
      icon: BarChart4,
      color: "bg-indigo-500",
    },
  ];
  

  return (
    <div className="mx-auto p-8 py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100 mb-10">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 px-8 py-4 rounded-full mb-8 border border-blue-100 shadow-sm">
          <CheckCircle className="w-5 h-5" />
          <h2 className="text-3xl lg:text-4xl font-bold">What We Do?</h2>
        </div>

        {/* Enhanced Paragraph Section */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
           
            {/* Main content container */}
            <div className="relative">
              {/* Decorative elements */}
             
              {/* Main paragraph */}
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed font-light text-center relative z-10">
                At{" "}
                <span className="font-semibold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AV Communication
                </span>
                , we specialize in
                  Digital Out-of-Home (DOOH)
                advertising that transforms how brands connect with their
                audiences in Lucknow.From eye-catching LED billboards at high-traffic locations to mobile LED vans 
                that bring your message directly to the streets, we help brands
                stand out and drive real-world impact.
              </p>
             
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon */}
              <div
                className={`relative w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <IconComponent className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-semibold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="relative text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>

              {/* Hover indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <button className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-10 py-4 rounded-xl font-semibold hover:from-gray-800 hover:to-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-gray-300/30 transform hover:-translate-y-1">
          View All Services
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default ServicesOverview;
