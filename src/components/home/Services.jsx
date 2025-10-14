import React from "react";
import { Link } from "react-router-dom";
import { ServicesList } from "../../pages/serviceList";

export const Services = () => {
   return (
      <div className="py-12 bg-white">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
               <h2 className="text-4xl font-extrabold text-gray-900">Explore Our Services</h2>
               <p className="mt-4 text-lg text-gray-600">A glimpse into what we offer to help your business grow.</p>
            </div>
            <ServicesList limit={3} showTitle={false} showFilters={false} padding="" />
            <div className="text-center mt-12">
               <Link
                  to="/services"
                  className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300"
               >
                  View All Services
               </Link>
            </div>
         </div>
      </div>
   );
};