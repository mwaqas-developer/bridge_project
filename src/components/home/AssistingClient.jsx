import React, { useState } from 'react';

export const AssistingClient = () => {
   const [activeTab, setActiveTab] = useState(0);

   const tabs = [
      {
         id: 0,
         title: "Retain & Grow Customers",
         icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l3-3 3 3" />
            </svg>
         ),
         gradient: "bg-gradient-to-r from-indigo-50 to-blue-50",
         shadowColor: "shadow-indigo-200/50",
         borderColor: "border-indigo-200",
         content: {
            title: "Build a Strong Customer Retention Strategy",
            paragraphs: [
               "Customer retention and expansion is a strategy focused on keeping existing customers engaged, encouraging continued use of your products or services, and identifying opportunities to increase their engagement and spend. This approach is critical for building a loyal customer base and achieving sustainable long-term growth.",
               "A key aspect of customer retention is deeply understanding your customer needs, preferences, and behaviors. This involves collecting and analyzing data on customer interactions, soliciting feedback, and conducting research to better understand their motivations. With this insight, businesses can tailor their offerings and communications to meet customer needs and build stronger relationships.",
               "Exceptional customer service and support is another important element of customer retention. This means responding quickly and effectively to customer inquiries and complaints, providing personalized assistance, and going above and beyond to exceed customer expectations."
            ]
         }
      },
      {
         id: 1,
         title: "Optimize Operations Scale",
         icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
         ),
         gradient: "bg-gradient-to-r from-green-50 to-emerald-50",
         shadowColor: "shadow-green-200/50",
         borderColor: "border-green-200",
         content: {
            title: "Scale Your Operations Efficiently",
            paragraphs: [
               "Operational scaling involves systematically expanding your business capabilities while maintaining efficiency and quality. This includes optimizing processes, implementing automation, and building scalable systems that can handle increased demand without proportional increases in costs or complexity.",
               "Key strategies include process standardization, technology integration, and workforce development. By establishing clear procedures and leveraging technology solutions, businesses can scale operations while maintaining consistency and reducing manual errors.",
               "Effective scaling also requires careful resource management and strategic planning. This involves forecasting demand, investing in infrastructure, and building flexible systems that can adapt to changing market conditions and business needs."
            ]
         }
      },
      {
         id: 2,
         title: "Achieve Innovative Status",
         icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
         ),
         gradient: "bg-gradient-to-r from-purple-50 to-pink-50",
         shadowColor: "shadow-purple-200/50",
         borderColor: "border-purple-200",
         content: {
            title: "Drive Innovation and Market Leadership",
            paragraphs: [
               "Achieving innovative status requires a culture of continuous improvement and forward-thinking approaches. This involves investing in research and development, encouraging creative problem-solving, and staying ahead of industry trends and technological advancements.",
               "Innovation is not just about new products or services, but also about improving existing processes, exploring new markets, and finding creative solutions to complex challenges. Companies that achieve innovative status often have strong leadership commitment to innovation and invest significantly in their people and technology.",
               "Building an innovative organization requires fostering a culture where experimentation is encouraged, failure is viewed as a learning opportunity, and employees are empowered to think creatively and take calculated risks in pursuit of breakthrough solutions."
            ]
         }
      },
      {
         id: 3,
         title: "Generate Positive Revenue",
         icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
         ),
         gradient: "bg-gradient-to-r from-orange-50 to-yellow-50",
         shadowColor: "shadow-orange-200/50",
         borderColor: "border-orange-200",
         content: {
            title: "Maximize Revenue Growth and Profitability",
            paragraphs: [
               "Generating positive revenue requires a comprehensive approach to business growth that focuses on both increasing income and optimizing costs. This involves identifying new revenue streams, improving existing offerings, and implementing strategies that drive sustainable financial growth.",
               "Key revenue generation strategies include market expansion, product diversification, pricing optimization, and customer lifetime value enhancement. By understanding market dynamics and customer needs, businesses can develop targeted approaches that maximize revenue potential while maintaining customer satisfaction.",
               "Successful revenue generation also requires effective financial management, including cash flow optimization, cost control, and strategic investment decisions. Companies that consistently generate positive revenue often have strong financial planning processes and clear metrics for measuring and tracking performance."
            ]
         }
      }
   ];

   return (
      <section className="py-8 w-full bg-white">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
               <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  How We Assist Our Clients
               </h3>
               <p className="text-lg  text-gray-600 max-w-3xl mx-auto">
                  Strategic approaches to drive your business forward.
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
               {/* Left Column - Tab Navigation */}
               <div className="lg:col-span-4 space-y-3">
                  {tabs.map((tab) => (
                     <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full p-4 rounded-lg shadow-sm flex items-center space-x-3 transition-all duration-300 ${activeTab === tab.id
                           ? `${tab.gradient} border-2 ${tab.borderColor} shadow-lg ${tab.shadowColor} transform scale-[1.02]`
                           : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md'
                           }`}
                     >
                        <div className={`flex-shrink-0 p-1.5 rounded-lg ${activeTab === tab.id ? 'bg-white/80' : 'bg-gray-50'
                           }`}>
                           <div className={`${activeTab === tab.id ? 'text-indigo-600' : 'text-gray-600'
                              }`}>
                              {tab.icon}
                           </div>
                        </div>
                        <div className="flex-grow text-left">
                           <h4 className={`font-semibold text-sm ${activeTab === tab.id ? 'text-indigo-800' : 'text-gray-900'
                              }`}>
                              {tab.title}
                           </h4>
                        </div>
                     </button>
                  ))}
               </div>

               {/* Right Column - Tab Content */}
               <div className="lg:col-span-8 bg-white rounded-lg shadow-sm p-8">
                  <div className="space-y-6">
                     <h4 className="text-2xl font-bold text-gray-900 leading-tight">
                        {tabs[activeTab].content.title}
                     </h4>

                     <div className="space-y-4 text-gray-600 leading-relaxed">
                        {tabs[activeTab].content.paragraphs.map((paragraph, index) => (
                           <p key={index}>
                              {paragraph}
                           </p>
                        ))}
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};