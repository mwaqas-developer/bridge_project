import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

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

// Function to get appropriate image for each category
const getCategoryImage = (categorySlug) => {
   const imageMap = {
      'development': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      'design': 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
      'marketing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
      'branding': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'infrastructure': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
   };

   return imageMap[categorySlug] || 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
};

const CategoryCard = ({ category, serviceCount }) => (
   <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="relative h-40 sm:h-48 overflow-hidden">
         <img
            src={getCategoryImage(category.slug)}
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
         />
         <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-indigo-600 text-white text-xs font-semibold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-md">
            {serviceCount} Services
         </div>
      </div>
      <div className="p-4 sm:p-6 flex-grow flex flex-col">
         <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 min-h-[48px] sm:min-h-[56px]">{category.name}</h3>
         <p className="text-gray-600 mb-4 sm:mb-6 flex-grow text-xs sm:text-sm leading-relaxed">
            {category.description || `Explore our comprehensive ${category.name.toLowerCase()} services designed to meet your needs.`}
         </p>
         <div className="flex justify-between items-center mt-auto pt-3 sm:pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">{serviceCount} available services</p>
            <Link
               to={`/category/${encodeURIComponent(category.slug)}`}
               className="font-semibold text-indigo-600 flex items-center gap-2 group-hover:text-indigo-800 transition-colors duration-300 text-sm sm:text-base"
            >
               View Category
               <span className="transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
         </div>
      </div>
   </div>
);

const CategoriesPage = () => {
   const [services, setServices] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      window.scrollTo(0, 0);
      const fetchServices = async () => {
         const API_URL = "https://my-json-server.typicode.com/mwaqas-developer/services-api/db";
         try {
            const res = await fetch(API_URL);
            if (!res.ok) throw new Error("Failed to fetch services from the server.");
            const data = await res.json();
            setServices(data.services || []);
         } catch (err) {
            setError(err.message);
         } finally {
            setLoading(false);
         }
      };
      fetchServices();
   }, []);

   const categories = useMemo(() => {
      const categoryMap = new Map();
      services.forEach(service => {
         if (service.category && !categoryMap.has(service.category.slug)) {
            categoryMap.set(service.category.slug, {
               ...service.category,
               serviceCount: 1
            });
         } else if (service.category && categoryMap.has(service.category.slug)) {
            const existingCategory = categoryMap.get(service.category.slug);
            existingCategory.serviceCount += 1;
         }
      });
      return Array.from(categoryMap.values());
   }, [services]);

   return (
      <div className="min-h-screen bg-gray-50 text-gray-900 antialiased pt-16 sm:pt-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
            {/* Header */}
            <SectionHeading
               title="Our Service Categories"
               subtitle="Explore our comprehensive range of services organized by category to find exactly what you need."
               align="center"
               size="section"
            />

            {/* Categories Grid */}
            <main className="w-full">
               {loading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                     {[...Array(6)].map((_, i) => <CategoryCardSkeleton key={i} />)}
                  </div>
               ) : error ? (
                  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md max-w-4xl mx-auto" role="alert">
                     <p className="font-bold">Oops! Something went wrong.</p>
                     <p>{error}</p>
                  </div>
               ) : (
                  <>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {categories.map((category) => (
                           <CategoryCard
                              key={category.slug}
                              category={category}
                              serviceCount={category.serviceCount}
                           />
                        ))}
                     </div>
                     {categories.length === 0 && !loading && (
                        <div className="text-center py-12 sm:py-16">
                           <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12 border border-gray-100">
                              <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">No Categories Found</h3>
                              <p className="text-gray-500 mb-6 text-sm sm:text-base max-w-md mx-auto">
                                 There are no service categories available at the moment.
                              </p>
                              <Link
                                 to="/contact"
                                 className="bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center justify-center">
                                 Contact Us
                              </Link>
                           </div>
                        </div>
                     )}
                  </>
               )}
            </main>
         </div>
      </div>
   );
};

export default CategoriesPage;
