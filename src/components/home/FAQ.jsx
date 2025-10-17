import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const FAQ = () => {
   const [openItem, setOpenItem] = useState(0);

   const faqItems = [
      {
         id: 0,
         question: "How long do we take to build a website?",
         answer: "Every project has different specifications. So, the time for website development varies with each project. But, you can rely on us to complete your project within your assigned deadline. After all, your satisfaction is all that matters to us. For further information, feel free to call us."
      },
      {
         id: 1,
         question: "What technologies do you use for web development?",
         answer: "We use modern, industry-standard technologies including React, Next.js, Node.js, and various databases depending on your project requirements. Our team stays updated with the latest frameworks and tools to deliver cutting-edge solutions that are scalable, secure, and performant."
      },
      {
         id: 2,
         question: "How much does a website cost?",
         answer: "Website costs vary based on complexity, features, and requirements. We offer competitive pricing tailored to your specific needs. Contact us for a detailed quote based on your project scope, and we'll provide transparent pricing with no hidden fees."
      },
      {
         id: 3,
         question: "Do you provide ongoing support and maintenance?",
         answer: "Yes, we offer comprehensive support and maintenance services to keep your website running smoothly. This includes regular updates, security patches, performance monitoring, and technical support to ensure your site remains secure and up-to-date."
      },
      {
         id: 4,
         question: "Can you help with SEO optimization?",
         answer: "Absolutely! We provide SEO optimization services to help improve your website's visibility in search engines. Our approach includes technical SEO, content optimization, keyword research, and ongoing monitoring to help drive organic traffic to your site."
      }
   ];

   const toggleItem = (id) => {
      setOpenItem(openItem === id ? null : id);
   };

   return (
      <section className="py-8 sm:py-12 w-full bg-white">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-6 sm:mb-8">
               <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">Frequently asked questions</h3>
               <p className="mt-2 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">Quick answers to common questions.</p>
            </div>

            <div className="space-y-4 sm:space-y-6">
               {faqItems.map((item) => (
                  <div key={item.id} className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md overflow-hidden transition-shadow">
                     {/* Header Button */}
                     <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                     >
                        <div className="flex items-start gap-4 sm:gap-6">
                           <div className="flex-shrink-0 p-2 sm:p-3 bg-gray-100 rounded-xl">
                              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                           </div>
                           <h4 className="text-base sm:text-lg font-medium text-gray-900 leading-relaxed">{item.question}</h4>
                        </div>
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-gray-900 text-white transition-transform ${openItem === item.id ? 'rotate-180' : ''}`}>
                           {openItem === item.id ? (
                              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                              </svg>
                           ) : (
                              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                              </svg>
                           )}
                        </div>
                     </button>

                     {/* Answer Section with Animation */}
                     <div
                        className={`px-4 sm:px-6 transition-all duration-300 ease-in-out overflow-hidden ${openItem === item.id
                           ? 'max-h-96 opacity-100 pb-4 sm:pb-6'
                           : 'max-h-0 opacity-0 pb-0'
                           }`}
                     >
                        <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-xl">
                           <div className="flex-shrink-0 mt-2">
                              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                           </div>
                           <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">{item.answer}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* Call to Action */}
            <div className="mt-8 sm:mt-10 text-center">
               <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-100">
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">Still have questions?</h4>
                  <p className="mt-2 text-xs sm:text-sm lg:text-base text-gray-500 max-w-2xl mx-auto">
                     Can't find the answer you're looking for? We're here to help.
                  </p>
                  <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                     <Link to="/contact" className="bg-indigo-600 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center justify-center text-sm sm:text-base">Contact support</Link>
                     <Link to="/contact" className="bg-white border border-gray-300 text-gray-700 font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center text-sm sm:text-base">Schedule a call</Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
