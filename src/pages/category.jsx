import React, { useEffect, useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

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
      <div className="relative h-40 sm:h-48 overflow-hidden">
         <img
            src={service.featured_image}
            alt={service.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
         />
         <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-indigo-600 text-white text-xs font-semibold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-md">
            {service.category.name}
         </div>
      </div>
      <div className="p-4 sm:p-6 flex-grow flex flex-col">
         <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 min-h-[48px] sm:min-h-[56px]">{service.name}</h3>
         <p className="text-gray-600 mb-4 sm:mb-6 flex-grow text-xs sm:text-sm leading-relaxed">{service.excerpt}</p>
         <div className="flex justify-between items-center mt-auto pt-3 sm:pt-4 border-t border-gray-100">
            <p className="font-bold text-green-600 text-lg sm:text-xl">${service.price}</p>
            <Link
               to={`/services/${service.slug}`}
               className="font-semibold text-indigo-600 flex items-center gap-2 group-hover:text-indigo-800 transition-colors duration-300 text-sm sm:text-base"
            >
               View Details
               <span className="transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
         </div>
      </div>
   </div>
);

// --- Sidebar helpers ---
const CategoryIcon = ({ slug }) => {
   const base = "w-5 h-5";
   switch (slug) {
      case 'development':
         return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`${base}`}>
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 5h18M3 19h18M7 5v14m10-14v14" />
            </svg>
         );
      case 'design':
         return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`${base}`}>
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 16l4-4 4 4 8-8" />
            </svg>
         );
      case 'marketing':
         return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`${base}`}>
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 12h4l3 7 4-14 3 7h4" />
            </svg>
         );
      case 'branding':
         return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`${base}`}>
               <circle cx="12" cy="12" r="3.5" strokeWidth="1.8" />
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 2v3m0 14v3M2 12h3m14 0h3M4.93 4.93l2.12 2.12m9.9 9.9l2.12 2.12m0-14.14l-2.12 2.12m-9.9 9.9l-2.12 2.12" />
            </svg>
         );
      case 'infrastructure':
         return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`${base}`}>
               <rect x="3" y="4" width="18" height="6" rx="2" strokeWidth="1.8" />
               <rect x="3" y="14" width="18" height="6" rx="2" strokeWidth="1.8" />
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M7 7h.01M11 7h.01M15 7h.01M7 17h.01M11 17h.01M15 17h.01" />
            </svg>
         );
      default:
         return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`${base}`}>
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
         );
   }
};

const CategorySidebar = ({ categories, activeCategorySlug }) => {
   const [query, setQuery] = useState("");

   const totalCount = useMemo(() => {
      return categories.reduce((sum, c) => sum + (c.serviceCount || 0), 0);
   }, [categories]);

   const filtered = useMemo(() => {
      const q = query.trim().toLowerCase();
      if (!q) return categories;
      return categories.filter(c =>
         c.name.toLowerCase().includes(q) || c.slug.toLowerCase().includes(q)
      );
   }, [categories, query]);

   return (
      <aside className="w-full md:w-1/4 lg:w-[28%]">
         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
            <div className="mb-5">
               <h3 className="text-lg font-semibold text-gray-900">Service Categories</h3>
               <p className="text-xs text-gray-500 mt-1">Browse and filter by category</p>
               <div className="mt-4">
                  <label htmlFor="category-search" className="sr-only">Search categories</label>
                  <div className="relative">
                     <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
                           <circle cx="11" cy="11" r="7" strokeWidth="1.8" />
                           <path strokeLinecap="round" strokeWidth="1.8" d="M20 20l-2-2" />
                        </svg>
                     </span>
                     <input
                        id="category-search"
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search categories..."
                        className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 placeholder:text-gray-400"
                     />
                  </div>
               </div>
            </div>

            <nav className="space-y-2">
               <Link
                  to="/services"
                  className={`flex items-center justify-between px-3 py-2.5 text-sm rounded-lg border transition-all duration-200 ${!activeCategorySlug
                     ? 'bg-indigo-50/60 text-indigo-700 border-indigo-200'
                     : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:text-indigo-600'}`}
               >
                  <span className="flex items-center gap-2">
                     <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-indigo-100 text-indigo-600">
                        <CategoryIcon slug="all" />
                     </span>
                     <span className="font-medium">All Categories</span>
                  </span>
                  <span className="inline-flex items-center justify-center min-w-[1.5rem] px-2 h-6 text-xs font-semibold rounded-full bg-gray-100 text-gray-700">{totalCount}</span>
               </Link>

               <div className="max-h-[50vh] overflow-auto pr-1 space-y-2">
                  {filtered.map(category => {
                     const isActive = activeCategorySlug === category.slug;
                     return (
                        <Link
                           key={category.slug}
                           to={`/category/${encodeURIComponent(category.slug)}`}
                           className={`flex items-center justify-between px-3 py-2.5 text-sm rounded-lg border transition-all duration-200 ${isActive
                              ? 'bg-indigo-50/60 text-indigo-700 border-indigo-200'
                              : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:text-indigo-600'}`}
                        >
                           <span className="flex items-center gap-2">
                              <span className={`inline-flex items-center justify-center w-6 h-6 rounded-md ${isActive ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-500'}`}>
                                 <CategoryIcon slug={category.slug} />
                              </span>
                              <span className="font-medium truncate">{category.name}</span>
                           </span>
                           <span className={`inline-flex items-center justify-center min-w-[1.5rem] px-2 h-6 text-xs font-semibold rounded-full ${isActive ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700'}`}>{category.serviceCount || 0}</span>
                        </Link>
                     );
                  })}
                  {filtered.length === 0 && (
                     <div className="text-xs text-gray-500 px-1 py-2">No categories match your search.</div>
                  )}
               </div>
            </nav>
         </div>
      </aside>
   );
};

// --- Main Component ---

const CategoryPage = () => {
   const { categoryName } = useParams();
   const [services, setServices] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      window.scrollTo(0, 0);
      const fetchServices = async () => {
         setLoading(true);
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
         if (!service.category) return;
         const slug = service.category.slug;
         if (!categoryMap.has(slug)) {
            categoryMap.set(slug, { ...service.category, serviceCount: 1 });
         } else {
            const existing = categoryMap.get(slug);
            existing.serviceCount += 1;
         }
      });
      return Array.from(categoryMap.values());
   }, [services]);

   const categoryServices = useMemo(() => {
      if (!categoryName) return [];
      return services.filter(s => s.category.slug === decodeURIComponent(categoryName));
   }, [services, categoryName]);

   const currentCategorySlug = categoryName ? decodeURIComponent(categoryName) : null;

   const currentCategoryObject = useMemo(() => {
      if (!currentCategorySlug || categories.length === 0) return null;
      return categories.find(c => c.slug === currentCategorySlug);
   }, [categories, currentCategorySlug]);

   return (
      <div className="min-h-screen bg-gray-50 text-gray-900 antialiased pt-16 sm:pt-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
            {/* Header */}
            <SectionHeading
               title={currentCategoryObject ? `${currentCategoryObject.name} Services` : 'Category Services'}
               subtitle={currentCategoryObject ? currentCategoryObject.description : 'Discover our comprehensive suite of services designed to meet your needs.'}
               align="center"
               size="section"
            />

            <div className="flex flex-col md:flex-row gap-6">
               <CategorySidebar categories={categories} activeCategorySlug={currentCategorySlug} />

               {/* Services Grid */}
               <main className="w-full">
                  {loading ? (
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[...Array(6)].map((_, i) => <ServiceCardSkeleton key={i} />)}
                     </div>
                  ) : error ? (
                     <ErrorDisplay message={error} />
                  ) : (
                     <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                           {categoryServices.map((service) => (
                              <ServiceCard service={service} key={service.slug} />
                           ))}
                        </div>
                        {categoryServices.length === 0 && !loading && (
                           <div className="text-center py-12 sm:py-16">
                              <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12 border border-gray-100">
                                 <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">No Services Found</h3>
                                 <p className="text-gray-500 mb-6 text-sm sm:text-base max-w-md mx-auto">
                                    There are no services available in the {currentCategoryObject?.name} category at the moment.
                                 </p>
                                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                    <Link
                                       to="/services"
                                       className="bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center justify-center">
                                       View All Categories
                                    </Link>
                                    <Link
                                       to="/contact"
                                       className="bg-white border border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center">
                                       Contact Us
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        )}
                     </>
                  )}
               </main>
            </div>
         </div>
      </div>
   );
};

export default CategoryPage;
