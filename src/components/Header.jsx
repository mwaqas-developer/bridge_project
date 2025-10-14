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
      { name: 'About', href: '#' },
      { name: 'Services', href: '/services', hasMegaMenu: true },
      { name: 'Case Studies', href: '#' },
      { name: 'Contact', href: '#' }
   ];

   const servicesData = [
      {
         category: 'Design & Branding',
         services: [
            { name: 'Logo Design', description: 'Professional logo creation', href: '#' },
            { name: 'Brand Identity', description: 'Complete brand guidelines', href: '#' },
            { name: 'UI/UX Design', description: 'User-centered design solutions', href: '#' },
            { name: 'Web Design', description: 'Modern, responsive websites', href: '#' }
         ]
      },
      {
         category: 'Digital Marketing',
         services: [
            { name: 'SEO Optimization', description: 'Search engine visibility', href: '#' },
            { name: 'Social Media', description: 'Engaging social strategies', href: '#' },
            { name: 'Content Marketing', description: 'Strategic content creation', href: '#' },
            { name: 'PPC Campaigns', description: 'Targeted advertising', href: '#' }
         ]
      },
      {
         category: 'Development',
         services: [
            { name: 'Web Development', description: 'Custom web applications', href: '#' },
            { name: 'Mobile Apps', description: 'iOS & Android development', href: '#' },
            { name: 'E-commerce', description: 'Online store solutions', href: '#' },
            { name: 'API Integration', description: 'Seamless system connections', href: '#' }
         ]
      },
      {
         category: 'Strategy & Consulting',
         services: [
            { name: 'Business Strategy', description: 'Growth planning & execution', href: '#' },
            { name: 'Digital Transformation', description: 'Modernize your operations', href: '#' },
            { name: 'Market Research', description: 'Data-driven insights', href: '#' },
            { name: 'Process Optimization', description: 'Efficiency improvements', href: '#' }
         ]
      }
   ];

   return (
      <>
         {/* Header */}
         <header className={`fixed top-0 left-0 right-0 z-40 shadow-sm ${isHeaderSticky ? 'bg-blue-100' : 'bg-white'} transition-all duration-300`}>
            <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
               <Link to="/" className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">B</div>
                  <div>
                     <h1 className="text-xl font-semibold">BrightBridge Co.</h1>
                     <p className="text-xs text-gray-500">Design · Strategy · Growth</p>
                  </div>
               </Link>
               <nav className="space-x-6 text-sm text-gray-900 hidden md:flex">
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
                  <Link to="#contact" className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-semibold">Get in touch</Link>
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
            <div className={`absolute top-0 right-0 w-80 max-w-sm h-full z-50 bg-white shadow-xl transform transition-transform duration-300 flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
               {/* Fixed Header */}
               <div className="p-4 border-b border-gray-200 bg-white">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">B</div>
                        <div>
                           <h2 className="text-lg font-semibold">BrightBridge Co.</h2>
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
                                       className="w-full flex items-center justify-between py-3 text-lg text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-4 rounded-lg transition-colors duration-200"
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

                                    {/* Mobile Services Submenu */}
                                    <div className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                       <div className="pl-6 pr-4 py-2 space-y-3">
                                          {servicesData.map((category, categoryIndex) => (
                                             <div key={categoryIndex} className="space-y-2">
                                                <h4 className="text-sm font-semibold text-gray-800 border-b border-gray-200 pb-1">
                                                   {category.category}
                                                </h4>
                                                <div className="space-y-1">
                                                   {category.services.map((service, serviceIndex) => (
                                                      <Link
                                                         key={serviceIndex}
                                                         to={service.href}
                                                         className="block py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-gray-50 px-3 rounded transition-colors duration-200"
                                                         onClick={toggleMobileMenu}
                                                      >
                                                         <div className="font-medium">{service.name}</div>
                                                         <div className="text-xs text-gray-500">{service.description}</div>
                                                      </Link>
                                                   ))}
                                                </div>
                                             </div>
                                          ))}
                                       </div>
                                    </div>
                                 </div>
                              ) : (
                                 <Link
                                    to={item.href}
                                    className="block py-3 text-lg text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-4 rounded-lg transition-colors duration-200"
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
                     to="#contact"
                     className="block w-full px-6 py-3 bg-indigo-600 text-white text-center rounded-lg hover:bg-indigo-700 transition-colors duration-200"
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
