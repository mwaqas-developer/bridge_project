import React, { useState } from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'

export const CaseStudies = () => {
   const [isDark, setIsDark] = useState(() => {
      // Get the saved state from localStorage on component mount
      const savedMode = localStorage.getItem('caseStudiesDarkMode');
      return savedMode ? JSON.parse(savedMode) : false;
   });

   // Update localStorage when isDark changes
   const toggleDarkMode = () => {
      const newMode = !isDark;
      setIsDark(newMode);
      localStorage.setItem('caseStudiesDarkMode', JSON.stringify(newMode));
   };

   const casestudies = [
      {
         projectname: 'Project Aurora',
         subname: 'E-commerce refresh',
         description: 'A redesign that increased clarity and reduced bounce (statistic placeholder).',
         bg: 'bg-gradient-to-r from-indigo-50 to-blue-50'
      },
      {
         projectname: 'Project Sol',
         subname: 'SaaS landing overhaul',
         description: 'Polished copy and a simpler funnel for trial signups.',
         bg: 'bg-gradient-to-r from-green-50 to-emerald-50'
      },
      {
         projectname: 'Project Verde',
         subname: 'B2B platform launch',
         description: 'Brand and product pages prepared for market entry.',
         bg: 'bg-gradient-to-r from-purple-50 to-pink-50'
      },
   ]

   return (
      <section id="cases" className="py-8 w-full bg-white">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
               <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  Case Studies
               </h3>
               <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Static highlights from selected projects.
               </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {casestudies.map((casestudy, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                     <div className={`${casestudy.bg} h-40 flex items-center justify-center font-bold text-indigo-700`}>{casestudy.projectname}</div>
                     <div className="p-4">
                        <h5 className="font-semibold">{casestudy.subname}</h5>
                        <p className="mt-2 text-sm text-gray-500">{casestudy.description}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}
