import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// A simple, clean SVG illustration for the 404 page.
const NotFoundIllustration = () => (
   <svg
      className="w-40 h-40 text-indigo-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
   >
      <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={1.5}
         d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
   </svg>
);

/**
 * A modern, animated 404 "Not Found" page component using Tailwind CSS transitions.
 */
const NotFound = () => {
   const [animate, setAnimate] = useState(false);

   useEffect(() => {
      // Trigger the animation shortly after the component mounts
      const timer = setTimeout(() => setAnimate(true), 100);
      return () => clearTimeout(timer);
   }, []);

   return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center text-center p-4">
         <div
            className={`flex flex-col items-center transform transition-all duration-500 ease-out ${animate ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4'
               }`}
         >
            <NotFoundIllustration />

            <h1 className="mt-8 text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
               404
            </h1>

            <p className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
               Oops! Page not found.
            </p>
            <p className="mt-2 text-base text-gray-500">
               The page you are looking for does not exist or has been moved.
            </p>

            <Link
               to="/"
               className="mt-10 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition-all duration-300 transform hover:scale-105"
            >
               Go Home
            </Link>
         </div>
      </div>
   );
};

export default NotFound;