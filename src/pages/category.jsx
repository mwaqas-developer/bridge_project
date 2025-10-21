import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

const ServiceCard = ({ service, categoryImage }) => (
   <div key={service.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="relative h-40 sm:h-48 overflow-hidden">
         <img
            src={categoryImage}
            alt={service.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
         />
         <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-indigo-600 text-white text-xs font-semibold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-md">
            {service.category.name}
         </div>
      </div>
      <div className="p-4 sm:p-6 flex-grow flex flex-col">
         <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 min-h-[48px] sm:min-h-[56px]">{service.name}</h3>
         <p className="text-gray-600 mb-4 sm:mb-6 flex-grow text-xs sm:text-sm leading-relaxed">{service.desc}</p>
         <div className="flex justify-between items-center mt-auto pt-3 sm:pt-4 border-t border-gray-100">
            <p className="font-bold text-green-600 text-lg sm:text-xl">${service.price}</p>
            <Link
               to={`/${service.slug}`}
               className="font-semibold text-indigo-600 flex items-center gap-2 group-hover:text-indigo-800 transition-colors duration-300 text-sm sm:text-base"
            >
               View Details
               <span className="transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
         </div>
      </div>
   </div>
);

const CategorySidebar = ({ categories, activeCategorySlug }) => {
   const [query, setQuery] = useState("");

   const normalizedCategories = useMemo(() => {
      return categories.map((c) => {
         const count = c.serviceCount ?? (Array.isArray(c.services) ? c.services.length : 0);
         return { ...c, serviceCount: count };
      });
   }, [categories]);

   const totalCount = useMemo(() => {
      return normalizedCategories.reduce((sum, c) => sum + (c.serviceCount || 0), 0);
   }, [normalizedCategories]);

   const filtered = useMemo(() => {
      const q = query.trim().toLowerCase();
      if (!q) return normalizedCategories;
      return normalizedCategories.filter((c) => {
         const name = (c.category || c.slug || "").toLowerCase();
         const slug = (c.slug || "").toLowerCase();
         return name.includes(q) || slug.includes(q);
      });
   }, [normalizedCategories, query]);

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
                  to="/all-categories"
                  className={`flex items-center justify-between px-3 py-2.5 text-sm rounded-lg border transition-all duration-200 ${!activeCategorySlug
                     ? 'bg-indigo-50/60 text-indigo-700 border-indigo-200'
                     : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:text-indigo-600'}`}
               >
                  <span className="flex items-center gap-2">
                     <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-indigo-100 text-indigo-600">
                        <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2024%2024'%20stroke='currentColor'%20stroke-width='1.8'%3E%3Cpath%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M4%206h16M4%2012h16M4%2018h16'/%3E%3C/svg%3E" alt="All Categories" className="w-5 h-5" />
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
                           to={`/${encodeURIComponent(category.slug)}`}
                           className={`flex items-center justify-between px-3 py-2.5 text-sm rounded-lg border transition-all duration-200 ${isActive
                              ? 'bg-indigo-50/60 text-indigo-700 border-indigo-200'
                              : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:text-indigo-600'}`}
                        >
                           <span className="flex items-center gap-2">
                              <span className={`inline-flex items-center justify-center w-6 h-6 rounded-md ${isActive ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-500'}`}>
                                 <img src={category.icon} alt={`${category.category} icon`} className="w-5 h-5" />
                              </span>
                              <span className="font-medium truncate">{category.category}</span>
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

const CategoryPage = ({ category, services, allCategories }) => {
   const { slug } = useParams();

   const currentCategorySlug = slug ? decodeURIComponent(slug) : null;

   return (
      <div className="min-h-screen bg-gray-50 text-gray-900 antialiased pt-16 sm:pt-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
            <SectionHeading
               title={category ? `${category.category} Services` : 'Category Services'}
               subtitle={category?.description || 'Discover our comprehensive suite of services designed to meet your needs.'}
               align="center"
               size="section"
            />

            <div className="flex flex-col md:flex-row gap-6">
               <CategorySidebar categories={allCategories} activeCategorySlug={currentCategorySlug} />

               <main className="w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                     {services.map((service) => (
                        <ServiceCard service={service} categoryImage={category.image} key={service.slug} />
                     ))}
                  </div>
                  {services.length === 0 && (
                     <div className="text-center py-12 sm:py-16">
                        <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12 border border-gray-100">
                           <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">No Services Found</h3>
                           <p className="text-gray-500 mb-6 text-sm sm:text-base max-w-md mx-auto">
                              There are no services available in the {category?.category} category at the moment.
                           </p>
                           <div className="flex flex-col sm:flex-row gap-3 justify-center">
                              <Link
                                 to="/all-categories"
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
               </main>
            </div>
         </div>
      </div>
   );
};

export default CategoryPage;