import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

const CategoryCard = ({ category }) => {
   const serviceCount = category.services ? category.services.length : 0;

   return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
         <div className="relative h-40 sm:h-48 overflow-hidden">
            <img
               src={category.image}
               alt={category.category}
               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-indigo-600 text-white text-xs font-semibold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-md">
               {serviceCount} Services
            </div>
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white p-2 rounded-full shadow-md">
               <img
                  src={category.icon}
                  alt={`${category.category} icon`}
                  className="w-6 h-6"
               />
            </div>
         </div>
         <div className="p-4 sm:p-6 flex-grow flex flex-col">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 min-h-[48px] sm:min-h-[56px]">{category.category}</h3>
            <div className="flex justify-between items-center mt-auto pt-3 sm:pt-4 border-t border-gray-100">
               <p className="text-sm text-gray-500">{serviceCount} available services</p>
               <Link
                  to={`/${encodeURIComponent(category.slug)}`}
                  className="font-semibold text-indigo-600 flex items-center gap-2 group-hover:text-indigo-800 transition-colors duration-300 text-sm sm:text-base"
               >
                  View Category
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
               </Link>
            </div>
         </div>
      </div>
   );
};

const AllCategories = () => {
   const [categories, setCategories] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchData = async () => {
         setLoading(true);
         const API_URL = "https://my-json-server.typicode.com/mwaqas-developer/services-api/db";
         try {
            const res = await fetch(API_URL);
            if (!res.ok) throw new Error("Failed to fetch data from the server.");
            const fetchedData = await res.json();
            setCategories(fetchedData.categories || []);
         } catch (err) {
            setError(err.message);
         } finally {
            setLoading(false);
         }
      };
      fetchData();
   }, []);

   return (
      <div className="min-h-screen bg-gray-50 text-gray-900 antialiased pt-16 sm:pt-20">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
            <SectionHeading
               title="Our Service Categories"
               subtitle="Explore our comprehensive range of services organized by category to find exactly what you need."
               align="center"
               size="section"
            />
            <main className="w-full">
               {loading && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                     {[...Array(6)].map((_, i) => <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse h-96"></div>)}
                  </div>
               )}
               {error && <p className="text-center text-red-500">{error}</p>}
               {!loading && !error && categories.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                     {categories.map((category) => (
                        <CategoryCard
                           key={category.slug}
                           category={category}
                        />
                     ))}
                  </div>
               ) : (
                  !loading && !error && (
                     <div className="text-center py-12 sm:py-16">
                        <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12 border border-gray-100">
                           <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">No Categories Found</h3>
                           <p className="text-gray-500 mb-6 text-sm sm:text-base max-w-md mx-auto">
                              There are no service categories available at the moment.
                           </p>
                           <Link
                              to="/contact"
                              className="bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center justify-center"
                           >
                              Contact Us
                           </Link>
                        </div>
                     </div>
                  )
               )}
            </main>
         </div>
      </div>
   );
};

export default AllCategories;