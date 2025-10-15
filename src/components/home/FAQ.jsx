import React, { useState } from 'react';

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
      <section className="py-20 w-full bg-gradient-to-br from-gray-50 via-white to-gray-50">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
               <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Help Center
               </div>
               <h3 className="text-5xl font-bold text-gray-900 mb-6">
                  Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Questions</span>
               </h3>
               <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                  Find answers to common questions about our services and get the information you need to make informed decisions.
               </p>
            </div>

            <div className="space-y-6">
               {faqItems.map((item) => (
                  <div key={item.id} className="group bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2">
                     {/* Header Button */}
                     <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full p-8 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300"
                     >
                        <div className="flex items-start gap-6">
                           <div className="flex-shrink-0 p-4 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                           </div>
                           <h4 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 leading-relaxed">{item.question}</h4>
                        </div>
                        <div
                           className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 transform transition-all duration-500 shadow-lg hover:shadow-xl group-hover:scale-110 ${openItem === item.id ? 'rotate-180 scale-110' : 'hover:scale-110'}`}
                        >
                           {openItem === item.id ? (
                              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                              </svg>
                           ) : (
                              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                              </svg>
                           )}
                        </div>
                     </button>

                     {/* Answer Section with Animation */}
                     <div
                        className={`px-8 transition-all duration-500 ease-in-out overflow-hidden ${openItem === item.id
                           ? 'max-h-96 opacity-100 pb-8'
                           : 'max-h-0 opacity-0 pb-0'
                           }`}
                     >
                        <div className="flex items-start gap-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl">
                           <div className="flex-shrink-0 mt-2">
                              <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                           </div>
                           <p className="text-lg text-gray-600 leading-relaxed">{item.answer}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
               <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                  <div className="flex items-center justify-center mb-6">
                     <div className="p-3 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl shadow-lg">
                        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                     </div>
                     <h4 className="text-3xl font-bold text-gray-900 ml-4">Still Have Questions?</h4>
                  </div>
                  <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                     Can't find the answer you're looking for? Our team is here to help you with any questions you might have.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Contact Support
                     </button>
                     <button className="group bg-white border-2 border-indigo-200 text-indigo-600 font-semibold py-4 px-8 rounded-xl hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 inline-flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Schedule a Call
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
