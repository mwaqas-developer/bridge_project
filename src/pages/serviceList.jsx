import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";

// --- Helper & Child Components ---

const ServiceCardSkeleton = () => (
   <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
      <div className="bg-gray-200 h-48 w-full"></div>
      <div className="p-6">
         <div className="bg-gray-200 h-4 rounded-md w-1/3 mb-4"></div>
         <div className="bg-gray-200 h-6 rounded-md w-3/4 mb-3"></div>
         <div className="space-y-2">
            <div className="bg-gray-200 h-4 rounded-md w-full"></div>
            <div className="bg-gray-200 h-4 rounded-md w-5/6"></div>
         </div>
         <div className="flex justify-between items-center mt-6">
            <div className="bg-gray-200 h-8 rounded-md w-1/4"></div>
            <div className="bg-gray-200 h-6 rounded-md w-1/3"></div>
         </div>
      </div>
   </div>
);

const ErrorDisplay = ({ message }) => (
   <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md max-w-4xl mx-auto" role="alert">
      <p className="font-bold">Oops! Something went wrong.</p>
      <p>{message}</p>
   </div>
);

const ServiceCard = ({ service }) => (
   <div key={service.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
         <img
            src={service.featured_image}
            alt={service.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
         />
         <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">{service.category}</span>
      </div>
      <div className="p-6 flex-grow flex flex-col">
         <h3 className="text-xl font-bold text-gray-800 mb-2 min-h-[56px]">{service.name}</h3>
         <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">{service.excerpt}</p>
         <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
            <p className="font-bold text-green-600 text-xl">${service.price}</p>
            <Link
               to={`/services/${service.slug}`}
               className="font-semibold text-indigo-600 flex items-center gap-2 group-hover:text-indigo-800 transition-colors duration-300"
            >
               View Details
               <span className="transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
         </div>
      </div>
   </div>
);

const CategoryFilters = ({ categories, activeCategory, onFilterChange }) => (
   <div className="flex flex-wrap justify-center gap-2 mb-12">
      <button
         onClick={() => onFilterChange("All")}
         className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${activeCategory === "All" ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-indigo-50'}`}>
         All
      </button>
      {categories.map(category => (
         <button
            key={category}
            onClick={() => onFilterChange(category)}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${activeCategory === category ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-indigo-50'}`}>
            {category}
         </button>
      ))}
   </div>
);

// --- Main Component ---

export const ServicesList = ({ limit, showTitle = true, showFilters = true, padding = "pt-32 pb-24" }) => {
   const [services, setServices] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [activeCategory, setActiveCategory] = useState("All");

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

   const categories = useMemo(() => [
      ...new Set(services.map(s => s.category))
   ], [services]);

   const filteredServices = useMemo(() => {
      const baseServices =
         activeCategory === "All"
            ? services
            : services.filter(s => s.category === activeCategory);
      return limit ? baseServices.slice(0, limit) : baseServices;
   }, [services, activeCategory, limit]);

   return (
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${padding}`}>
         {showTitle && (
            <div className="mb-16 text-center">
               <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">Our Services</h1>
               <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">Discover our comprehensive suite of services designed to meet your needs.</p>
            </div>
         )}

         {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[...Array(limit || 6)].map((_, i) => <ServiceCardSkeleton key={i} />)}
            </div>
         ) : error ? (
            <ErrorDisplay message={error} />
         ) : (
            <>
               {showFilters && <CategoryFilters categories={categories} activeCategory={activeCategory} onFilterChange={setActiveCategory} />}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredServices.map((service) => (
                     <ServiceCard service={service} key={service.slug} />
                  ))}
               </div>
               {filteredServices.length === 0 && (
                  <div className="text-center py-16">
                     <h3 className="text-2xl font-semibold text-gray-700">No Services Found</h3>
                     <p className="text-gray-500 mt-2">There are no services available in the selected category.</p>
                  </div>
               )}
            </>
         )}
      </div>
   );
};

const ServicesListPage = () => {
   return <ServicesList />;
};

export default ServicesListPage;