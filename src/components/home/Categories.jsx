// Categories component
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchMergedCategories } from "../../utils/api";

const CategoryCardSkeleton = () => (
   <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
      <div className="bg-gray-200 h-48 w-full"></div>
      <div className="p-6">
         <div className="bg-gray-200 h-6 rounded-md w-3/4 mb-3"></div>
         <div className="space-y-2">
            <div className="bg-gray-200 h-4 rounded-md w-full"></div>
            <div className="bg-gray-200 h-4 rounded-md w-5/6"></div>
         </div>
         <div className="flex justify-between items-center mt-6">
            <div className="bg-gray-200 h-6 rounded-md w-1/3"></div>
            <div className="bg-gray-200 h-8 rounded-md w-1/4"></div>
         </div>
      </div>
   </div>
);

const CategoryCard = ({ category, serviceCount }) => (
   <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="relative h-40 sm:h-48 overflow-hidden">
         <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
         />
         <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-indigo-600 text-white text-xs font-semibold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-md">
            {serviceCount} Services
         </div>
      </div>
      <div className="p-4 sm:p-6 flex-grow flex flex-col">
         <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 min-h-[48px] sm:min-h-[56px]">{category.name}</h3>
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

export const Categories = () => {
   const [categories, setCategories] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchCategories = async () => {
         try {
            const merged = await fetchMergedCategories();
            const formattedCategories = (merged || []).map(c => ({
               ...c,
               name: c.category,
               serviceCount: c.services ? c.services.length : 0
            }));
            setCategories(formattedCategories);
            setError(null);
         } catch (err) {
            setError(err.message || "Failed to fetch categories.");
         } finally {
            setLoading(false);
         }
      };
      fetchCategories();
   }, []);

   return (
      <section id="categories" className="py-8 sm:py-12 bg-white">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-6 sm:mb-8">
               <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
                  Our Service Categories
               </h2>
               <p className="mt-2 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
                  Explore our comprehensive range of services organized by category to find exactly what you need.
               </p>
            </div>

            {/* Categories Grid */}
            <div className="mb-6 sm:mb-8">
               {loading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                     {[...Array(6)].map((_, i) => <CategoryCardSkeleton key={i} />)}
                  </div>
               ) : error ? (
                  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md" role="alert">
                     <p className="font-bold">Oops! Something went wrong.</p>
                     <p>{error}</p>
                  </div>
               ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                     {categories.map((category) => (
                        <CategoryCard
                           key={category.slug}
                           category={category}
                           serviceCount={category.serviceCount}
                        />
                     ))}
                  </div>
               )}
            </div>

            {/* Call to Action */}
            <div className="text-center">
               <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 border border-gray-100">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">Ready to get started?</h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
                     Discover how our services can help you achieve your goals.
                  </p>
                  <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                     <Link
                        to="/all-categories"
                        className="bg-indigo-600 text-white font-medium py-3 px-4 sm:px-6 rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center justify-center text-sm sm:text-base"
                     >
                        View all categories
                     </Link>
                     <Link
                        to="/contact"
                        className="bg-white border border-gray-300 text-gray-700 font-medium py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center text-sm sm:text-base"
                     >
                        Get a quote
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
