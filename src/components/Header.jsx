import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LiaTimesSolid } from 'react-icons/lia';
import { MegaMenu } from './MegaMenu';

export const Header = () => {
   const [isHeaderSticky, setIsHeaderSticky] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
   const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
   const location = useLocation();

   useEffect(() => {
      const handleScroll = () => setIsHeaderSticky(window.scrollY > 0);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   useEffect(() => {
      closeMegaMenu();
   }, [location.pathname]);

   const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
   };

   const closeMegaMenu = () => {
      setIsMegaMenuOpen(false);
   };

   const toggleMobileServices = () => {
      setIsMobileServicesOpen(!isMobileServicesOpen);
   };
   const menuitems = [
      { name: 'About', href: '/about' },
      { name: 'Service Categories', href: '/services-categories', hasMegaMenu: true },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Contact', href: '/contact' }
   ];

   const [categoriesData, setCategoriesData] = useState([]);
   const [loadingCategories, setLoadingCategories] = useState(false);

   useEffect(() => {
      const fetchServices = async () => {
         if (categoriesData.length === 0) {
            setLoadingCategories(true);
            const API_URL = "https://my-json-server.typicode.com/mwaqas-developer/services-api/db";
            try {
               const res = await fetch(API_URL);
               if (!res.ok) throw new Error("Failed to fetch services for mobile menu.");
               const data = await res.json();
               const services = data.services || [];

               const categoryMap = new Map();
               services.forEach(service => {
                  if (service.category && !categoryMap.has(service.category.slug)) {
                     categoryMap.set(service.category.slug, {
                        name: service.category.name,
                        slug: service.category.slug,
                        serviceCount: 1
                     });
                  } else if (service.category && categoryMap.has(service.category.slug)) {
                     const existingCategory = categoryMap.get(service.category.slug);
                     existingCategory.serviceCount += 1;
                  }
               });

               const formattedCategories = Array.from(categoryMap.values());

               setCategoriesData(formattedCategories);
            } catch (error) {
               console.error(error.message);
               // Fallback data in case API fails
               setCategoriesData([
                  { name: 'Design & Branding', slug: 'design-branding', serviceCount: 4 },
                  { name: 'Digital Marketing', slug: 'digital-marketing', serviceCount: 4 },
                  { name: 'Web Development', slug: 'web-development', serviceCount: 3 },
                  { name: 'Consulting', slug: 'consulting', serviceCount: 2 }
               ]);
            } finally {
               setLoadingCategories(false);
            }
         }
      };

      fetchServices();
   }, [categoriesData.length]);

   return (
      <>
         {/* Header */}
         <header className={`fixed top-0 left-0 right-0 z-40 shadow-sm ${isHeaderSticky ? 'bg-blue-100' : 'bg-white'} transition-all duration-300`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
               <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm sm:text-base">B</div>
                  <div>
                     <h1 className="text-lg sm:text-xl font-semibold">BrightBridge Co.</h1>
                     <p className="text-xs text-gray-500 hidden sm:block">Design · Strategy · Growth</p>
                  </div>
               </Link>
               <nav className="space-x-4 lg:space-x-6 text-sm text-gray-900 hidden md:flex">
                  {menuitems.map((item, index) => (
                     <div key={index} className="relative">
                        {item.hasMegaMenu ? (
                           <div
                              className="relative"
                              onMouseEnter={() => setIsMegaMenuOpen(true)}
                              onMouseLeave={() => setIsMegaMenuOpen(false)}
                           >
                              <Link to={item.href} className="hover:text-[#4f39f6] flex items-center">
                                 {item.name}
                                 <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                 </svg>
                              </Link>
                              {/* Invisible bridge to connect menu item with mega menu */}
                              <div className="absolute inset-x-0 -bottom-4 h-4" />
                           </div>
                        ) : (
                           <Link to={item.href} className="hover:text-[#4f39f6]">{item.name}</Link>
                        )}
                     </div>
                  ))}
               </nav>
               <div className="hidden md:block">
                  <Link to="/contact" className="px-3 lg:px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-semibold hover:bg-indigo-700 transition-colors">Get in touch</Link>
               </div>

               {/* Mobile menu button */}
               <button
                  onClick={toggleMobileMenu}
                  className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
                  aria-label="Toggle mobile menu"
               >
                  <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
               </button>
            </div>
         </header>

         {/* Mega Menu Component */}
         <MegaMenu
            isOpen={isMegaMenuOpen}
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
            onClose={closeMegaMenu}
         />

         {/* Mobile menu overlay */}
         <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className="absolute inset-0 bg-black/50" onClick={toggleMobileMenu}></div>
            <div className={`absolute top-0 right-0 w-80 max-w-[85vw] h-full z-50 bg-white shadow-xl transform transition-transform duration-300 flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
               {/* Fixed Header */}
               <div className="p-4 border-b border-gray-200 bg-white">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">B</div>
                        <div>
                           <h2 className="text-base sm:text-lg font-semibold">BrightBridge Co.</h2>
                           <p className="text-xs text-gray-500">Design · Strategy · Growth</p>
                        </div>
                     </div>
                     <button
                        onClick={toggleMobileMenu}
                        className="w-8 h-8 flex items-center justify-center"
                        aria-label="Close mobile menu"
                     >
                        <LiaTimesSolid className="text-gray-600 text-2xl" />
                     </button>
                  </div>
               </div>

               {/* Scrollable Content */}
               <div className="flex-1 overflow-y-auto">
                  <div className="p-4 pb-20">

                     <nav className="space-y-4">
                        {menuitems.map((item, index) => (
                           <div key={index}>
                              {item.hasMegaMenu ? (
                                 <div>
                                    <button
                                       onClick={toggleMobileServices}
                                       className="w-full flex items-center justify-between py-3 text-base sm:text-lg text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-4 rounded-lg transition-colors duration-200"
                                    >
                                       <span>{item.name}</span>
                                       <svg
                                          className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                       >
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                       </svg>
                                    </button>

                                    {/* Mobile Categories Submenu */}
                                    <div className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                       <div className="pl-6 pr-4 py-2 space-y-3">
                                          {loadingCategories ? (
                                             <div className="space-y-3">
                                                <div className="animate-pulse">
                                                   <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                                                   <div className="space-y-2">
                                                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                                                      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                                                      <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                                                   </div>
                                                </div>
                                             </div>
                                          ) : (
                                             <div className="space-y-2">
                                                <Link
                                                   to="/services"
                                                   className="block py-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 px-3 rounded transition-colors duration-200"
                                                   onClick={toggleMobileMenu}
                                                >
                                                   View All Service Categories
                                                </Link>
                                                {categoriesData.map((category, categoryIndex) => (
                                                   <Link
                                                      key={categoryIndex}
                                                      to={`/category/${encodeURIComponent(category.slug)}`}
                                                      className="block py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-gray-50 px-3 rounded transition-colors duration-200"
                                                      onClick={toggleMobileMenu}
                                                   >
                                                      <div className="font-medium">{category.name}</div>
                                                      <div className="text-xs text-gray-500">{category.serviceCount} services available</div>
                                                   </Link>
                                                ))}
                                             </div>
                                          )}
                                       </div>
                                    </div>
                                 </div>
                              ) : (
                                 <Link
                                    to={item.href}
                                    className="block py-3 text-base sm:text-lg text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-4 rounded-lg transition-colors duration-200"
                                    onClick={toggleMobileMenu}
                                 >
                                    {item.name}
                                 </Link>
                              )}
                           </div>
                        ))}
                     </nav>
                  </div>
               </div>

               {/* Fixed Footer */}
               <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
                  <Link
                     to="/contact"
                     className="block w-full px-4 sm:px-6 py-3 bg-indigo-600 text-white text-center rounded-lg hover:bg-indigo-700 transition-colors duration-200 text-sm sm:text-base font-medium"
                     onClick={toggleMobileMenu}
                  >
                     Get in touch
                  </Link>
               </div>
            </div>
         </div>
      </>
   )
}
