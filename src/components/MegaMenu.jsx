// MegaMenu component
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { fetchMergedCategories } from "../utils/api";

const FEATURE_CARDS = [
   {
      title: 'All Service Categories',
      description: 'Browse all our service categories',
      button: { text: 'View All Categories →', href: '/all-categories' },
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

const CategoryItem = ({ category, onClose }) => (
   <Link
      to={`/${encodeURIComponent(category.slug)}`}
      onClick={onClose}
      className="group block p-5 rounded-xl border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all duration-300 bg-white hover:bg-indigo-50/30"
   >
      <div className="flex items-start gap-4">
         <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center group-hover:from-indigo-200 group-hover:to-indigo-300 transition-all duration-300">
               <img src={category.icon} alt={`${category.category} icon`} className="w-6 h-6" />
            </div>
         </div>
         <div className="flex-grow min-w-0">
            <h3 className="font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors duration-200 mb-3 text-base">
               {category.category}
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
      const fetchCategories = async () => {
         if (isOpen && categories.length === 0) {
            setLoading(true);
            try {
               const merged = await fetchMergedCategories();
               const formattedCategories = (merged || []).map(c => ({
                  ...c,
                  serviceCount: c.services ? c.services.length : 0
               }));
               setCategories(formattedCategories);
            } catch (error) {
               console.error(error.message);
            } finally {
               setLoading(false);
            }
         }
      };

      fetchCategories();
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

export default MegaMenu;