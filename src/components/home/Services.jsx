import React from "react";
import { Link } from "react-router-dom";
import { ServicesList } from "../../pages/serviceList";

export const Services = () => {
   return (
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
               <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Our Services
               </div>
               <h2 className="text-5xl font-bold text-gray-900 mb-6">
                  Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Services</span>
               </h2>
               <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                  Comprehensive solutions designed to help your business grow and succeed in today's competitive market.
               </p>
            </div>

            {/* Services Grid */}
            <div className="mb-16">
               <ServicesList limit={3} showTitle={false} showFilters={false} padding="" />
            </div>

            {/* Call to Action */}
            <div className="text-center">
               <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                  <div className="flex items-center justify-center mb-6">
                     <div className="p-3 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl shadow-lg">
                        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                     </div>
                     <h3 className="text-3xl font-bold text-gray-900 ml-4">Ready to Get Started?</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                     Discover how our services can transform your business and help you achieve your goals with our expert team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <Link
                        to="/services"
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center group"
                     >
                        <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        View All Services
                     </Link>
                     <Link
                        to="/contact"
                        className="bg-white border-2 border-indigo-200 text-indigo-600 font-semibold py-4 px-8 rounded-xl hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 inline-flex items-center justify-center group"
                     >
                        <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Get a Quote
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};