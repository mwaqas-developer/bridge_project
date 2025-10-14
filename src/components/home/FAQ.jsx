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
      <section className="py-8 w-full bg-white">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
               <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
               </h3>
               <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Find answers to common questions about our services.
               </p>
            </div>

            <div className="space-y-4">
               {faqItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300">
                     {/* Header Button */}
                     <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                     >
                        <h4 className="text-lg font-semibold text-gray-900">{item.question}</h4>
                        <div
                           className={`w-8 h-8 rounded-full flex items-center justify-center bg-indigo-600 transform transition-transform duration-300 ${openItem === item.id ? 'rotate-180' : ''}`}
                        >
                           {openItem === item.id ? (
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                              </svg>
                           ) : (
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                              </svg>
                           )}
                        </div>
                     </button>

                     {/* Answer Section with Animation */}
                     <div
                        className={`px-6 transition-all duration-500 ease-in-out overflow-hidden ${openItem === item.id
                           ? 'max-h-96 opacity-100 pb-6'
                           : 'max-h-0 opacity-0 pb-0'
                           }`}
                     >
                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};
