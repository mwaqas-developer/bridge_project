import React, { useState } from 'react'
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
      <section id="cases" className="py-20 w-full bg-gradient-to-br from-gray-50 via-white to-gray-50">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
               <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Our Success Stories
               </div>
               <h3 className="text-5xl font-bold text-gray-900 mb-6">
                  Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Studies</span>
               </h3>
               <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                  Real results from our selected projects. Each case study represents our commitment to delivering exceptional value and measurable outcomes.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {casestudies.map((casestudy, index) => (
                  <div key={index} className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100 hover:border-indigo-200 transition-all duration-500 transform hover:-translate-y-2">
                     {/* Header with gradient background */}
                     <div className={`${casestudy.bg} h-48 flex items-center justify-center relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="relative z-10 text-center">
                           <div className="text-6xl mb-4">{casestudy.icon}</div>
                           <h4 className="text-2xl font-bold text-white mb-2">{casestudy.projectname}</h4>
                           <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                              {casestudy.category}
                           </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                        <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full"></div>
                     </div>

                     {/* Content */}
                     <div className="p-8">
                        <div className="flex items-center justify-between mb-4">
                           <h5 className="text-xl font-bold text-gray-900">{casestudy.subname}</h5>
                           <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                              {casestudy.stats}
                           </div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mb-6">{casestudy.description}</p>

                        {/* Action button */}
                        <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                           <span className="flex items-center justify-center">
                              View Details
                              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                           </span>
                        </button>
                     </div>
                  </div>
               ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
               <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                  <h4 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h4>
                  <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                     Let's discuss how we can help you achieve similar results for your business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        Start Your Project
                     </button>
                     <button className="bg-white border-2 border-indigo-200 text-indigo-600 font-semibold py-4 px-8 rounded-xl hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300">
                        View All Projects
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
