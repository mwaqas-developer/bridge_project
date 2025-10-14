import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Hero = () => {
   const [years, setYears] = useState(0)
   const [projects, setProjects] = useState(0)
   const [satisfaction, setSatisfaction] = useState(0)

   useEffect(() => {
      const targetYears = 10
      const targetProjects = 200
      const targetSatisfaction = 100
      const durationMs = 900
      const frameMs = 20
      const totalSteps = Math.ceil(durationMs / frameMs)
      let currentStep = 0
      const timer = setInterval(() => {
         currentStep += 1
         const nextYears = Math.round((targetYears * currentStep) / totalSteps)
         const nextProjects = Math.round((targetProjects * currentStep) / totalSteps)
         const nextSatisfaction = Math.round((targetSatisfaction * currentStep) / totalSteps)
         setYears(nextYears)
         setProjects(nextProjects)
         setSatisfaction(nextSatisfaction)
         if (currentStep >= totalSteps) clearInterval(timer)
      }, frameMs)
      return () => clearInterval(timer)
   }, [])

   const sliderSettings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2800,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      pauseOnHover: true,
      adaptiveHeight: true
   }

   const slideImages = [
      { imgsrc: '/images/wedding-slider-01.jpg', alt: "Work preview 1", rounded: "rounded-xl" },
      { imgsrc: '/images/wedding-slider-02.jpg', alt: "Work preview 2", rounded: "rounded-2xl" },
      { imgsrc: '/images/wedding-slider-03.jpg', alt: "Work preview 3", rounded: "rounded-3xl" }
   ]
   return (
      <section className="relative bg-white overflow-hidden">
         {/* Geometric Background Pattern */}
         <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f1f5f9' fill-opacity='0.4'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '40px 40px'
            }}></div>
         </div>

         {/* Floating Elements */}
         <div className="absolute top-20 left-10 w-20 h-20 bg-indigo-100 rounded-full opacity-60 animate-pulse"></div>
         <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-200 rounded-full opacity-40 animate-bounce"></div>
         <div className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-100 rounded-full opacity-50 animate-pulse"></div>

         {/* Main Content */}
         <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               {/* Left Content */}
               <div className="space-y-8">
                  {/* Trust Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full border border-indigo-200">
                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                     <span className="text-sm font-medium text-indigo-700">Trusted by 200+ Companies</span>
                  </div>

                  {/* Main Heading */}
                  <div className="space-y-6">
                     <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        We craft digital experiences that{' '}
                        <span className="relative">
                           <span className="text-indigo-600">scale</span>
                           <div className="absolute -bottom-2 left-0 w-full h-3 bg-indigo-100 -z-10"></div>
                        </span>
                     </h1>
                     <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                        Static, beautiful, and ready to represent your brand — a clean starting point for portfolios, agencies, and small businesses.
                     </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                     <Link
                        to="#services"
                        className="group relative px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1"
                     >
                        <span>Our Services</span>
                        <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                     </Link>
                     <Link
                        to="#cases"
                        className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:border-indigo-600 hover:text-indigo-600 hover:bg-indigo-50"
                     >
                        See case studies
                     </Link>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-8 pt-8">
                     <div className="text-center">
                        <div className="text-3xl font-bold text-indigo-600 mb-1">{years}+</div>
                        <div className="text-sm text-gray-600 font-medium">Years combined</div>
                     </div>
                     <div className="text-center">
                        <div className="text-3xl font-bold text-indigo-600 mb-1">{projects}+</div>
                        <div className="text-sm text-gray-600 font-medium">Projects delivered</div>
                     </div>
                     <div className="text-center">
                        <div className="text-3xl font-bold text-indigo-600 mb-1">{satisfaction}%</div>
                        <div className="text-sm text-gray-600 font-medium">Satisfaction</div>
                     </div>
                  </div>
               </div>

               {/* Right Content - Image Slider */}
               <div className="relative">
                  <div className="relative">
                     <Slider {...sliderSettings} className="[&_.slick-slide]:px-2 [&_.slick-list]:-mx-2 [&_.slick-dots]:bottom-[-40px] [&_.slick-dots_li_button]:bg-gray-300 [&_.slick-dots_li.slick-active_button]:bg-indigo-600">
                        {slideImages.map((img, index) => (
                           <div key={index} className="outline-none focus:outline-none">
                              <div className="relative group">
                                 <img
                                    src={img.imgsrc}
                                    alt={img.alt}
                                    className={`w-full h-80 lg:h-96 object-cover ${img.rounded} shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2`}
                                 />
                                 <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-inherit"></div>
                              </div>
                           </div>
                        ))}
                     </Slider>
                  </div>

                  {/* Decorative Cards */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-100 rounded-2xl rotate-12 opacity-80"></div>
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-indigo-200 rounded-xl -rotate-12 opacity-60"></div>
               </div>
            </div>
         </div>

         {/* Bottom Wave */}
         <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>
   )
}


