import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QuoteForm from '../components/QuoteForm';
import { Toaster } from 'react-hot-toast';

const Contact = () => {
   const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

   return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
         {/* Hero Section */}
         <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
               <div className="text-center">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8">
                     <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                     </svg>
                     We're here to help
                  </div>
                  <h1 className="text-6xl font-bold text-gray-900 mb-8 tracking-tight">
                     Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Connect</span>
                  </h1>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                     Ready to transform your business? Our team of experts is standing by to help you achieve your goals with personalized solutions.
                  </p>
               </div>
            </div>
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
               {/* Contact Information Cards */}
               <div className="lg:col-span-1 space-y-6">
                  <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2">
                     <div className="flex items-center mb-6">
                        <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                           <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                           </svg>
                        </div>
                        <div className="ml-4">
                           <h3 className="text-2xl font-bold text-gray-900">Email Us</h3>
                           <p className="text-blue-600 font-medium">24/7 Support</p>
                        </div>
                     </div>
                     <p className="text-gray-600 mb-6 text-sm">Send us a detailed message and we'll respond within 24 hours with a comprehensive solution.</p>
                     <a href="mailto:hello@company.com" className="inline-flex items-center text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors group">
                        hello@company.com
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                     </a>
                  </div>

                  <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 hover:border-green-200 transition-all duration-500 transform hover:-translate-y-2">
                     <div className="flex items-center mb-6">
                        <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                           <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                           </svg>
                        </div>
                        <div className="ml-4">
                           <h3 className="text-2xl font-bold text-gray-900">Call Us</h3>
                           <p className="text-green-600 font-medium">Instant Response</p>
                        </div>
                     </div>
                     <p className="text-gray-600 mb-6 text-sm">Speak directly with our expert team for immediate assistance and personalized consultation.</p>
                     <a href="tel:+15551234567" className="inline-flex items-center text-green-600 font-semibold text-lg hover:text-green-700 transition-colors group">
                        (555) 123-4567
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                     </a>
                  </div>

                  <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 hover:border-purple-200 transition-all duration-500 transform hover:-translate-y-2">
                     <div className="flex items-center mb-6">
                        <div className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                           <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                           </svg>
                        </div>
                        <div className="ml-4">
                           <h3 className="text-2xl font-bold text-gray-900">Visit Us</h3>
                           <p className="text-purple-600 font-medium">In-Person Meeting</p>
                        </div>
                     </div>
                     <p className="text-gray-600 mb-6 text-sm">Schedule a visit to our modern office for a face-to-face consultation and project discussion.</p>
                     <address className="text-purple-600 font-semibold text-lg not-italic">
                        123 Business Street<br />
                        City, State 12345
                     </address>
                  </div>
               </div>

               {/* Main Content Area */}
               <div className="lg:col-span-2">
                  {/* Quick Actions */}
                  <div className="bg-white rounded-3xl shadow-xl p-10 mb-8 border border-gray-100">
                     <div className="text-center mb-10">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
                        <p className="text-lg text-gray-600">
                           Choose your preferred way to connect with us. We're committed to providing exceptional service and personalized solutions.
                        </p>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        <button
                           onClick={() => setIsQuoteFormOpen(true)}
                           className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden"
                        >
                           <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                           <div className="relative z-10">
                              <div className="flex items-center justify-start mb-4">
                                 <svg className="h-10 w-10 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                 </svg>
                                 <h3 className="text-2xl font-bold">Get a Quote</h3>
                              </div>
                              <p className="text-blue-100 text-left text-sm">Request a detailed, personalized quote for your project</p>
                           </div>
                        </button>

                        <Link
                           to="/services"
                           className="group bg-white border-2 border-gray-200 text-gray-700 p-8 rounded-2xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
                        >
                           <div className="flex items-center justify-start mb-4">
                              <svg className="h-10 w-10 mr-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                              </svg>
                              <h3 className="text-2xl font-bold">Browse Services</h3>
                           </div>
                           <p className="text-gray-600 text-sm">Explore our comprehensive range of professional services</p>
                        </Link>
                     </div>

                     <div className="text-center p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl">
                        <p className="text-gray-600 mb-4 text-sm">Prefer to speak directly?</p>
                        <a
                           href="tel:+15551234567"
                           className="inline-flex items-center text-blue-600 font-bold text-2xl hover:text-blue-700 transition-colors group"
                        >
                           <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                           </svg>
                           (555) 123-4567
                           <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                           </svg>
                        </a>
                     </div>
                  </div>

                  {/* Business Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                           <svg className="h-8 w-8 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                           </svg>
                           Business Hours
                        </h3>
                        <div className="space-y-3 text-gray-600">
                           <div className="flex justify-between items-center py-2 border-b border-gray-100">
                              <span className="font-semibold">Monday - Friday</span>
                              <span className="text-gray-500">9:00 AM - 6:00 PM</span>
                           </div>
                           <div className="flex justify-between items-center py-2 border-b border-gray-100">
                              <span className="font-semibold">Saturday</span>
                              <span className="text-gray-500">10:00 AM - 4:00 PM</span>
                           </div>
                           <div className="flex justify-between items-center py-2">
                              <span className="font-semibold">Sunday</span>
                              <span className="text-gray-500">Closed</span>
                           </div>
                        </div>
                     </div>

                     <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                           <svg className="h-8 w-8 text-green-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                           </svg>
                           Response Time
                        </h3>
                        <div className="space-y-3 text-gray-600">
                           <div className="flex justify-between items-center py-2 border-b border-gray-100">
                              <span className="font-semibold">Email</span>
                              <span className="text-green-600 font-medium">Within 24 hours</span>
                           </div>
                           <div className="flex justify-between items-center py-2 border-b border-gray-100">
                              <span className="font-semibold">Phone</span>
                              <span className="text-green-600 font-medium">Immediate</span>
                           </div>
                           <div className="flex justify-between items-center py-2">
                              <span className="font-semibold">Quote</span>
                              <span className="text-green-600 font-medium">Within 48 hours</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Quote Form Modal */}
         <QuoteForm
            isOpen={isQuoteFormOpen}
            onClose={() => setIsQuoteFormOpen(false)}
            serviceName="General Inquiry"
         />

         {/* Toast Notifications */}
         <Toaster
            position="top-center"
            toastOptions={{
               duration: 4000,
               style: {
                  background: '#363636',
                  color: '#fff',
               },
               success: {
                  duration: 4000,
                  iconTheme: {
                     primary: '#10B981',
                     secondary: '#fff',
                  },
               },
               error: {
                  duration: 4000,
                  iconTheme: {
                     primary: '#EF4444',
                     secondary: '#fff',
                  },
               },
            }}
         />
      </div>
   );
};

export default Contact;
