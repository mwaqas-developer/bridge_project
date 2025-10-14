import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
   return (
      <footer className="bg-white border-t">
         <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
            <div>© {new Date().getFullYear()} BrightBridge Co. All rights reserved..</div>
            <div className="mt-4 md:mt-0 flex items-center gap-4">
               <Link to="#" className="hover:text-gray-900">Privacy</Link>
               <Link to="#" className="hover:text-gray-900">Terms</Link>
               <Link to="#" className="hover:text-gray-900">Sitemap</Link>
            </div>
         </div>
      </footer>
   )
}
