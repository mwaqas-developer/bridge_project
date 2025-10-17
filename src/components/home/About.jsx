import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'

export const About = ({ email, phone, address }) => {
   return (
      <section id="about" className="py-8 sm:py-12 w-full bg-white">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-6 sm:mb-8">
               <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">About BrightBridge</h3>
               <p className="mt-2 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">We help teams turn ideas into polished digital products.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
               {/* Main Content */}
               <div className="lg:col-span-2">
                  <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 border border-gray-100">
                     <div className="flex items-center mb-6 sm:mb-8">
                        <div className="p-2 sm:p-3 bg-indigo-600 rounded-xl">
                           <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                           </svg>
                        </div>
                        <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 ml-3 sm:ml-4">Benefits of working with us</h4>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="group bg-gradient-to-br from-indigo-50 to-blue-50 p-4 sm:p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                           <div className="flex items-start gap-3 sm:gap-4">
                              <div className="p-2 bg-indigo-100 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                 <svg className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                 </svg>
                              </div>
                              <div>
                                 <h5 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Ethical design practices</h5>
                                 <p className="text-xs sm:text-sm text-gray-600">We prioritize user privacy and ethical design principles in all our projects.</p>
                              </div>
                           </div>
                        </div>

                        <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                           <div className="flex items-start gap-3 sm:gap-4">
                              <div className="p-2 bg-green-100 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                 <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                 </svg>
                              </div>
                              <div>
                                 <h5 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Performance-minded front-ends</h5>
                                 <p className="text-xs sm:text-sm text-gray-600">Optimized for speed and efficiency to deliver exceptional user experiences.</p>
                              </div>
                           </div>
                        </div>

                        <div className="group bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                           <div className="flex items-start gap-3 sm:gap-4">
                              <div className="p-2 bg-purple-100 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                 <svg className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                 </svg>
                              </div>
                              <div>
                                 <h5 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Client-first collaboration</h5>
                                 <p className="text-xs sm:text-sm text-gray-600">Your success is our priority with transparent communication throughout.</p>
                              </div>
                           </div>
                        </div>

                        <div className="group bg-gradient-to-br from-orange-50 to-red-50 p-4 sm:p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                           <div className="flex items-start gap-3 sm:gap-4">
                              <div className="p-2 bg-orange-100 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                 <svg className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                 </svg>
                              </div>
                              <div>
                                 <h5 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Documented handoffs</h5>
                                 <p className="text-xs sm:text-sm text-gray-600">Comprehensive documentation ensures smooth project transitions.</p>
                              </div>
                           </div>
                        </div>

                        <div className="group bg-gradient-to-br from-teal-50 to-cyan-50 p-4 sm:p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                           <div className="flex items-start gap-3 sm:gap-4">
                              <div className="p-2 bg-teal-100 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                 <svg className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                 </svg>
                              </div>
                              <div>
                                 <h5 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Accessibility-focused development</h5>
                                 <p className="text-xs sm:text-sm text-gray-600">Inclusive design that works for everyone, regardless of ability.</p>
                              </div>
                           </div>
                        </div>

                        <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                           <div className="flex items-start gap-3 sm:gap-4">
                              <div className="p-2 bg-blue-100 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                 <svg className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                 </svg>
                              </div>
                              <div>
                                 <h5 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Modern and clean code</h5>
                                 <p className="text-xs sm:text-sm text-gray-600">Latest technologies and best practices for maintainable solutions.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Contact Sidebar */}
               <div className="lg:col-span-1">
                  <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 border border-gray-100 sticky top-20 sm:top-24">
                     <div className="flex items-center mb-4 sm:mb-6">
                        <div className="p-2 sm:p-3 bg-indigo-600 rounded-xl">
                           <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                           </svg>
                        </div>
                        <h4 className="text-lg sm:text-xl font-semibold text-gray-900 ml-3 sm:ml-4">Contact</h4>
                     </div>

                     <p className="text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8">For inquiries, email: <a className="text-indigo-600 hover:underline font-semibold" href={`mailto:${email}`}>{email}</a></p>

                     <div className="space-y-4 sm:space-y-6">
                        <div className="flex items-start gap-3 sm:gap-4">
                           <div className="p-2 bg-indigo-100 rounded-lg">
                              <HiLocationMarker className="text-indigo-600 w-4 h-4 sm:w-5 sm:h-5" />
                           </div>
                           <div>
                              <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Address</div>
                              <div className="text-xs sm:text-sm text-gray-900 font-semibold">{address}</div>
                           </div>
                        </div>

                        <div className="flex items-start gap-3 sm:gap-4">
                           <div className="p-2 bg-green-100 rounded-lg">
                              <HiPhone className="text-green-600 w-4 h-4 sm:w-5 sm:h-5" />
                           </div>
                           <div>
                              <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Phone</div>
                              <div className="text-xs sm:text-sm text-gray-900 font-semibold">{phone}</div>
                           </div>
                        </div>

                        <div className="flex items-start gap-3 sm:gap-4">
                           <div className="p-2 bg-purple-100 rounded-lg">
                              <HiMail className="text-purple-600 w-4 h-4 sm:w-5 sm:h-5" />
                           </div>
                           <div>
                              <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Email</div>
                              <div className="text-xs sm:text-sm text-gray-900 font-semibold">
                                 <a className="text-indigo-600 hover:underline" href={`mailto:${email}`}>{email}</a>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                        <Link to="/contact" className="w-full bg-indigo-600 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center justify-center text-sm sm:text-base">
                           <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                           </svg>
                           Send a message
                        </Link>
                     </div>
                  </div>
               </div>
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
