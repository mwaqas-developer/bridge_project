import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FEATURE_CARDS = [
   {
      title: 'Popular Services',
      description: 'Our most requested solutions',
      button: { text: 'View All Services →', href: '/services' },
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

// Small presentational components for clarity
const ServiceItem = ({ name, href, onClose }) => (
   <Link to={href} onClick={onClose} className="block group hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200">
      <div className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
         {name}
      </div>
   </Link>
);

const ServiceCategoryColumn = ({ category, services, onClose }) => (
   <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 border-b border-indigo-100 pb-2">
         {category}
      </h3>
      <div className="space-y-3">
         {services.map((service, index) => (
            <ServiceItem key={index} {...service} onClose={onClose} />
         ))}
      </div>
   </div>
);

const FeatureCard = ({ title, description, button, bg, onClose }) => (
   <div className={`${bg} p-6 rounded-lg`}>
      <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <Link to={button.href} onClick={onClose} className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">
         {button.text}
      </Link>
   </div>
);

const MegaMenuSkeleton = () => (
   <div className="animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-4">
               <div className="h-6 bg-gray-200 rounded w-3/4"></div>
               <div className="space-y-3">
                  <div className="h-8 bg-gray-200 rounded w-full"></div>
                  <div className="h-8 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-8 bg-gray-200 rounded w-full"></div>
                  <div className="h-8 bg-gray-200 rounded w-4/5"></div>
               </div>
            </div>
         ))}
      </div>
      <div className="mt-8 pt-8 border-t border-gray-200">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
               <div key={i} className="bg-gray-100 p-6 rounded-lg">
                  <div className="h-5 bg-gray-200 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
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

               const servicesByCategories = services.reduce((acc, service) => {
                  const { category, name, slug } = service;
                  if (!acc[category]) {
                     acc[category] = [];
                  }
                  acc[category].push({
                     name,
                     href: `/services/${slug}`
                  });
                  return acc;
               }, {});

               const formattedCategories = Object.keys(servicesByCategories).map(category => ({
                  category: category,
                  services: servicesByCategories[category]
               }));

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
            <div className="max-w-6xl mx-auto px-6 py-8">
               {loading ? <MegaMenuSkeleton /> : (
                  <>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categories.map((category, categoryIndex) => (
                           <ServiceCategoryColumn
                              key={categoryIndex}
                              category={category.category}
                              services={category.services}
                              onClose={onClose}
                           />
                        ))}
                     </div>

                     <div className="mt-8 pt-8 border-t border-gray-200">
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