import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FEATURE_CARDS = [
   {
      title: 'All Service Categories',
      description: 'Browse all our service categories',
      button: { text: 'View All Categories →', href: '/services' },
      bg: 'bg-gradient-to-r from-indigo-50 to-blue-50'
   },
   {
      title: 'Custom Solutions',
      description: 'Tailored to your specific needs',
      button: { text: 'Get Quote →', href: '/contact' },
      bg: 'bg-gradient-to-r from-green-50 to-emerald-50'
   },
   {
      title: 'Consultation',
      description: 'Free strategy session',
      button: { text: 'Book Now →', href: '/contact' },
      bg: 'bg-gradient-to-r from-purple-50 to-pink-50'
   }
];

// Category icon component
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

// Small presentational components for clarity
const CategoryItem = ({ category, onClose }) => (
   <Link
      to={`/category/${encodeURIComponent(category.slug)}`}
      onClick={onClose}
      className="group block p-5 rounded-xl border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all duration-300 bg-white hover:bg-indigo-50/30"
   >
      <div className="flex items-start gap-4">
         <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center group-hover:from-indigo-200 group-hover:to-indigo-300 transition-all duration-300">
               <CategoryIcon slug={category.slug} />
            </div>
         </div>
         <div className="flex-grow min-w-0">
            <h3 className="font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors duration-200 mb-3 text-base">
               {category.name}
            </h3>
            <div className="flex items-center justify-between">
               <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 group-hover:bg-indigo-100 group-hover:text-indigo-700 transition-colors duration-200">
                  {category.serviceCount} services
               </span>
               <span className="text-indigo-600 group-hover:text-indigo-700 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
               </span>
            </div>
         </div>
      </div>
   </Link>
);

const FeatureCard = ({ title, description, button, bg, onClose }) => (
   <div className={`${bg} p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 group`}>
      <h4 className="font-semibold text-gray-900 mb-3 text-lg">{title}</h4>
      <p className="text-sm text-gray-600 mb-5 leading-relaxed">{description}</p>
      <Link
         to={button.href}
         onClick={onClose}
         className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm group-hover:gap-3 transition-all duration-200"
      >
         {button.text}
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
         </svg>
      </Link>
   </div>
);

const MegaMenuSkeleton = () => (
   <div className="animate-pulse">
      {/* Header Skeleton */}
      <div className="mb-8">
         <div className="h-8 bg-gray-200 rounded w-1/3 mb-2"></div>
         <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>

      {/* Categories Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
         {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white border border-gray-100 p-5 rounded-xl">
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                  <div className="flex-grow space-y-2">
                     <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                     <div className="h-4 bg-gray-200 rounded w-full"></div>
                     <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                     <div className="flex justify-between items-center mt-3">
                        <div className="h-6 bg-gray-200 rounded-full w-16"></div>
                        <div className="h-4 bg-gray-200 rounded w-4"></div>
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </div>

      {/* Feature Cards Skeleton */}
      <div className="border-t border-gray-200 pt-8">
         <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
               <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <div className="h-6 bg-gray-200 rounded w-2/3 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-5"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
               </div>
            ))}
         </div>
      </div>
   </div>
);


export const MegaMenu = ({ isOpen, onMouseEnter, onMouseLeave, onClose }) => {
   const [categories, setCategories] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      const fetchServices = async () => {
         if (isOpen && categories.length === 0) {
            setLoading(true);
            const API_URL = "https://my-json-server.typicode.com/mwaqas-developer/services-api/db";
            try {
               const res = await fetch(API_URL);
               if (!res.ok) throw new Error("Failed to fetch services for mega menu.");
               const data = await res.json();
               const services = data.services || [];

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

               const formattedCategories = Array.from(categoryMap.values());

               setCategories(formattedCategories);
            } catch (error) {
               console.error(error.message);
            } finally {
               setLoading(false);
            }
         }
      };

      fetchServices();
   }, [isOpen, categories.length]);

   return (
      <div
         className={`fixed top-[68px] left-0 right-0 z-40 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
         aria-hidden={!isOpen}
      >
         <div className="absolute inset-0 bg-black bg-opacity-5"></div>

         <div className="relative bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-6 py-10">
               {loading ? <MegaMenuSkeleton /> : (
                  <>
                     {/* Categories Grid */}
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
                        {categories.map(category => (
                           <CategoryItem
                              key={category.slug}
                              category={category}
                              onClose={onClose}
                           />
                        ))}
                     </div>

                     {/* Feature Cards */}
                     <div className="border-t border-gray-200 pt-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                           {FEATURE_CARDS.map((feature, index) => (
                              <FeatureCard key={index} {...feature} onClose={onClose} />
                           ))}
                        </div>
                     </div>
                  </>
               )}
            </div>
         </div>
      </div>
   );
};