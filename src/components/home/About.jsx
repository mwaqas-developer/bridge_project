import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'

export const About = ({ email, phone, address }) => {
   return (
      <section id="about" className="py-8 w-full bg-white">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
               <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  About BrightBridge
               </h3>
               <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We're a small studio that helps companies translate ideas into polished digital products. This template is intentionally static — drop in your real copy and assets to make it yours.
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
               <div className="lg:col-span-7 bg-gradient-to-b from-white to-gray-50 p-10 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-lg text-gray-900">Benefits of working with us</h4>
                  <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                     <li className="flex items-start gap-3">
                        <span className="inline-block mt-1 w-2 h-2 bg-indigo-600 rounded-full" />
                        <span>Ethical design practices</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <span className="inline-block mt-1 w-2 h-2 bg-indigo-600 rounded-full" />
                        <span>Performance-minded front-ends</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <span className="inline-block mt-1 w-2 h-2 bg-indigo-600 rounded-full" />
                        <span>Client-first collaboration</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <span className="inline-block mt-1 w-2 h-2 bg-indigo-600 rounded-full" />
                        <span>Documented handoffs</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <span className="inline-block mt-1 w-2 h-2 bg-indigo-600 rounded-full" />
                        <span>Accessibility-focused development</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <span className="inline-block mt-1 w-2 h-2 bg-indigo-600 rounded-full" />
                        <span>Modern and clean code</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <span className="inline-block mt-1 w-2 h-2 bg-indigo-600 rounded-full" />
                        <span>Responsive design</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <span className="inline-block mt-1 w-2 h-2 bg-indigo-600 rounded-full" />
                        <span>User-friendly interfaces</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <span className="inline-block mt-1 w-2 h-2 bg-indigo-600 rounded-full" />
                        <span>Cross-browser compatibility</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <span className="inline-block mt-1 w-2 h-2 bg-indigo-600 rounded-full" />
                        <span>Scalable architecture</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <span className="inline-block mt-1 w-2 h-2 bg-indigo-600 rounded-full" />
                        <span>Secure and reliable solutions</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <span className="inline-block mt-1 w-2 h-2 bg-indigo-600 rounded-full" />
                        <span>Timely project delivery</span>
                     </li>
                  </ul>
               </div>

               <aside id="contact" className="lg:col-span-5 bg-white rounded-xl p-6 shadow-md sticky top-24">
                  <h4 className="font-semibold text-lg text-gray-900">Contact</h4>
                  <p className="mt-2 text-sm text-gray-500">For inquiries, email: <a className="text-indigo-600 hover:underline" href={`mailto:${email}`}>{email}</a></p>

                  <div className="mt-6 space-y-4 text-sm text-gray-700">
                     <div className="flex items-center gap-3">
                        <HiLocationMarker className="text-indigo-500 w-5 h-5" />
                        <div>
                           <div className="text-xs text-gray-500">Address</div>
                           <div className="text-sm">{address}</div>
                        </div>
                     </div>

                     <div className="flex items-center gap-3">
                        <HiPhone className="text-indigo-500 w-5 h-5" />
                        <div>
                           <div className="text-xs text-gray-500">Phone</div>
                           <div className="text-sm">{phone}</div>
                        </div>
                     </div>

                     <div className="flex items-center gap-3">
                        <HiMail className="text-indigo-500 w-5 h-5" />
                        <div>
                           <div className="text-xs text-gray-500">Email</div>
                           <div className="text-sm"><a className="text-indigo-600 hover:underline" href={`mailto:${email}`}>{email}</a></div>
                        </div>
                     </div>
                  </div>

                  <div className="mt-6">
                     <a href={`mailto:${email}`} className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300">Send a message</a>
                  </div>
               </aside>
            </div>
         </div>
      </section>
   )
}

// PropTypes definition
About.propTypes = {
   email: PropTypes.string.isRequired,
   // allow phone as string or number for flexibility
   phone: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
   address: PropTypes.string.isRequired
}
