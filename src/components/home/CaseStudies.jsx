import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMoon, HiSun } from 'react-icons/hi'

export const CaseStudies = () => {
   const casestudies = [
      {
         projectname: 'Project Aurora',
         subname: 'E-commerce refresh',
         description: 'A redesign that increased clarity and reduced bounce rate by 40% while improving user engagement.',
         bg: 'bg-gradient-to-br from-indigo-500 to-blue-600',
         icon: '🛒',
         stats: '+40% conversion',
         category: 'E-commerce'
      },
      {
         projectname: 'Project Sol',
         subname: 'SaaS landing overhaul',
         description: 'Polished copy and a simpler funnel for trial signups, resulting in 60% more qualified leads.',
         bg: 'bg-gradient-to-br from-green-500 to-emerald-600',
         icon: '🚀',
         stats: '+60% leads',
         category: 'SaaS'
      },
      {
         projectname: 'Project Verde',
         subname: 'B2B platform launch',
         description: 'Brand and product pages prepared for market entry with comprehensive user research and testing.',
         bg: 'bg-gradient-to-br from-purple-500 to-pink-600',
         icon: '💼',
         stats: '100% success',
         category: 'B2B'
      },
   ]

   return (
      <section id="cases" className="py-8 sm:py-12 w-full bg-white">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-6 sm:mb-8">
               <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">Case studies</h3>
               <p className="mt-2 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">A few highlights from recent work.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
               {casestudies.map((casestudy, index) => (
                  <div key={index} className="group bg-white rounded-2xl shadow-sm hover:shadow-md overflow-hidden border border-gray-100 transition-shadow">
                     {/* Header with gradient background */}
                     <div className={`${casestudy.bg} h-48 flex items-center justify-center relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="relative z-10 text-center">
                           <div className="text-3xl sm:text-4xl mb-2">{casestudy.icon}</div>
                           <h4 className="text-lg sm:text-xl font-semibold text-white mb-1">{casestudy.projectname}</h4>
                           <div className="inline-flex items-center px-2 sm:px-2.5 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                              {casestudy.category}
                           </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full"></div>
                        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full"></div>
                     </div>

                     {/* Content */}
                     <div className="p-4 sm:p-6">
                        <h5 className="text-base sm:text-lg font-semibold text-gray-900">{casestudy.subname}</h5>
                        <div className="px-2 sm:px-2.5 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium inline-block mb-3">
                           {casestudy.stats}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 sm:mb-5">{casestudy.description}</p>

                        {/* Action button */}
                        <Link to="/all-categories" className="w-full bg-gray-900 text-white font-medium py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center justify-center text-sm sm:text-base">View details</Link>
                     </div>
                  </div>
               ))}
            </div>

            {/* Call to Action */}
            <div className="mt-8 sm:mt-10 text-center">
               <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-100">
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2">Ready to start your project?</h4>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-500 mb-4 sm:mb-5 max-w-2xl mx-auto">
                     Let's discuss how we can help you achieve similar results for your business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                     <Link to="/contact" className="bg-indigo-600 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center justify-center text-sm sm:text-base">Start your project</Link>
                     <Link to="/all-categories" className="bg-white border border-gray-300 text-gray-700 font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center text-sm sm:text-base">View all projects</Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
