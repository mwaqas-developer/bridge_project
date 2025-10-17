import React from 'react';

export default function SectionHeading({ title, subtitle, align = 'center', size = 'page' }) {
   const isCenter = align === 'center';
   const sizeClasses = {
      page: {
         title: 'text-3xl sm:text-4xl lg:text-5xl',
         subtitle: 'text-base sm:text-lg lg:text-xl'
      },
      section: {
         title: 'text-2xl sm:text-3xl',
         subtitle: 'text-sm sm:text-base'
      },
      small: {
         title: 'text-xl sm:text-2xl',
         subtitle: 'text-sm'
      }
   };
   const titleSize = (sizeClasses[size] || sizeClasses.page).title;
   const subtitleSize = (sizeClasses[size] || sizeClasses.page).subtitle;
   const containerAlign = isCenter ? 'text-center' : '';

   return (
      <div className={`${containerAlign} mb-8 sm:mb-12`}>
         <h1 className={`${titleSize} font-extrabold text-gray-900 tracking-tight`}>{title}</h1>
         {subtitle && (
            <p className={`mt-3 sm:mt-4 ${subtitleSize} text-gray-600 ${isCenter ? 'mx-auto' : ''} max-w-3xl`}>
               {subtitle}
            </p>
         )}
      </div>
   );
}


