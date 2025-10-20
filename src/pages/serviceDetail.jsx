import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QuoteForm from "../components/QuoteForm";
import { Toaster } from "react-hot-toast";

const ServiceImageGallery = ({ image }) => (
   <div className="sticky top-24">
      <div className="mb-4">
         <img
            src={image}
            alt="Featured service"
            className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg transition-shadow duration-300"
         />
      </div>
   </div>
);

const ServiceSummary = ({ service, onOpenQuote }) => (
   <div className="flex flex-col h-full">
      <div className="mb-3 sm:mb-4">
         <Link
            to={`/category/${encodeURIComponent(service.category.slug)}`}
            className="inline-block bg-indigo-100 text-indigo-800 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full self-start hover:bg-indigo-200 transition-colors duration-300"
         >
            {service.category.name}
         </Link>
      </div>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">{service.name}</h1>
      <p className="text-gray-500 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">{service.desc}</p>

      <div className="mt-auto pt-4 sm:pt-6 bg-gray-50 rounded-lg p-4 sm:p-6 border-t border-gray-200">
         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
               <p className="text-xs sm:text-sm text-gray-500">Starting from</p>
               <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-600">${service.price}</p>
            </div>
            <button
               onClick={onOpenQuote}
               className="inline-block bg-green-500 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-md hover:bg-green-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
            >
               Get a Quote
            </button>
         </div>
      </div>
   </div>
);

const ServiceDescription = ({ description }) => (
   <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Full Service Description</h2>
      <div
         className="prose prose-sm sm:prose-lg max-w-none text-gray-600"
      ><p>{description}</p></div>
   </div>
);


const ServiceDetail = ({ service }) => {
   const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [service]);

   if (!service) {
      return <div>Loading...</div>; // Or a skeleton loader
   }

   return (
      <>
         <div className="bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 sm:pb-16">
               {/* Breadcrumbs */}
               <div className="mb-6 sm:mb-8 text-xs sm:text-sm text-gray-500">
                  <Link to="/" className="hover:text-indigo-600">Home</Link>
                  <span className="mx-2">/</span>
                  <Link to="/services" className="hover:text-indigo-600">Service Categories</Link>
                  <span className="mx-2">/</span>
                  <span className="text-gray-900 font-medium">{service.name}</span>
               </div>

               <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                  {/* Image Section */}
                  <div>
                     <ServiceImageGallery
                        image={service.category.image}
                     />
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col">
                     <ServiceSummary service={service} onOpenQuote={() => setIsQuoteFormOpen(true)} />
                  </div>
               </div>
            </div>
         </div>

         {/* Detailed Description Section */}
         <div className="bg-gray-50/70 py-12 sm:py-16 lg:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
               <ServiceDescription description={service.desc} />
            </div>
         </div>

         {/* Quote Form Modal */}
         <QuoteForm
            isOpen={isQuoteFormOpen}
            onClose={() => setIsQuoteFormOpen(false)}
            serviceName={service?.name}
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
      </>
   );
};

export default ServiceDetail;