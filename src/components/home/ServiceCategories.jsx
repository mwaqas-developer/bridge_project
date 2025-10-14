import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../../supabaseClient'

const titleToSlug = (title) =>
   title?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || ''

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1556655848-f3a7049761e6?w=400&h=300&fit=crop'

export const ServiceCategories = () => {
   const navigate = useNavigate()
   const { slug } = useParams()
   const [categories, setCategories] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
   const [currentPage, setCurrentPage] = useState(1)
   const itemsPerPage = 3
   const isMountedRef = useRef(true)

   useEffect(() => {
      isMountedRef.current = true
      return () => {
         isMountedRef.current = false
      }
   }, [])

   const fetchCategories = useCallback(async () => {
      try {
         if (isMountedRef.current) {
            setLoading(true)
            setError(null)
         }

         let query = supabase
            .from('services')
            .select('id, slug, title, description, image, created_at')
            .order('created_at', { ascending: false })

         if (slug) {
            query = query.eq('slug', slug)
         }

         const { data, error: supabaseError } = await query

         if (supabaseError) throw supabaseError
         if (!data?.length) throw new Error('No services found in database')

         const processed = data.map(service => ({
            ...service,
            slug: service.slug || titleToSlug(service.title),
            title: service.title || 'Untitled Service',
            description: service.description || 'No description available',
            image: service.image || FALLBACK_IMAGE
         }))

         if (!isMountedRef.current) return

         setCategories(processed)
      } catch (err) {
         if (!isMountedRef.current) return
         setError(err.message)
         setCategories([])
      } finally {
         if (isMountedRef.current) setLoading(false)
      }
   }, [slug])

   useEffect(() => {
      fetchCategories()
      setCurrentPage(1)
   }, [fetchCategories, slug])

   // Pagination
   const totalPages = useMemo(() => Math.max(1, Math.ceil(categories.length / itemsPerPage)), [categories.length])
   const indexOfLastItem = currentPage * itemsPerPage
   const indexOfFirstItem = indexOfLastItem - itemsPerPage
   const currentCategories = useMemo(() => categories.slice(indexOfFirstItem, indexOfLastItem), [categories, indexOfFirstItem, indexOfLastItem])

   const pageItems = useMemo(() => {
      const delta = 1
      const total = totalPages
      const items = []
      const middle = []

      for (let i = Math.max(2, currentPage - delta); i <= Math.min(total - 1, currentPage + delta); i++) {
         middle.push(i)
      }

      if (currentPage - delta > 1) {
         items.push(1)
         if (currentPage - delta > 2) items.push('...')
      }

      items.push(...middle)

      if (currentPage + delta < total) {
         if (currentPage + delta < total - 1) items.push('...')
         items.push(total)
      }

      return items.filter((item, index, arr) => arr.indexOf(item) === index)
   }, [currentPage, totalPages])

   const paginate = useCallback((page) => {
      if (page === '...') return
      const clamped = Math.max(1, Math.min(totalPages, Number(page)))
      if (clamped !== currentPage) setCurrentPage(clamped)
   }, [currentPage, totalPages])

   if (loading) {
      return (
         <section className="py-8 w-full bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
               <p className="text-gray-600">Loading service categories...</p>
            </div>
         </section>
      )
   }

   if (error) {
      return (
         <section className="py-10 w-full bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
               <h3 className="text-2xl font-semibold text-red-600 mb-2">Error</h3>
               <p className="text-gray-700 mb-6">{error}</p>
               <button
                  onClick={fetchCategories}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
               >
                  Retry
               </button>
            </div>
         </section>
      )
   }

   if (!categories.length) {
      return (
         <section className="py-16 w-full bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
               <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  No Services Available
               </h3>
               <p className="text-gray-600 mb-6">
                  We couldn’t find any services to display. Try again later.
               </p>
               <button
                  onClick={fetchCategories}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
               >
                  Refresh
               </button>
            </div>
         </section>
      )
   }

   return (
      <section id="service-categories" className="py-16 w-full bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
               <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  Services Categories
               </h3>
               <p className="text-text-lg  text-gray-600 max-w-3xl mx-auto">
                  Explore our comprehensive range of professional services
               </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {currentCategories.map((category, index) => (
                  <div
                     key={category.id || index}
                     className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                     onClick={() => navigate(`/services/${category.slug}`)}
                     role="button"
                     tabIndex={0}
                  >
                     <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
                        <img
                           src={category.image}
                           alt={category.title}
                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                           onError={(e) => {
                              e.target.src = FALLBACK_IMAGE
                           }}
                        />
                     </div>
                     <div className="p-6">
                        <h5 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-1">
                           {category.title}
                        </h5>
                        <p className="text-gray-600 leading-relaxed line-clamp-2 mb-4">
                           {category.description}
                        </p>
                        <span className="text-indigo-600 font-semibold group-hover:text-indigo-700 flex items-center">
                           View Details
                           <HiChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                     </div>
                  </div>
               ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
               <div className="flex justify-center items-center space-x-3 mt-16">
                  <button
                     onClick={() => paginate(currentPage - 1)}
                     disabled={currentPage === 1}
                     className="p-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-gray-300 transition-colors flex items-center justify-center shadow-md"
                  >
                     <HiChevronLeft className="w-5 h-5" />
                  </button>

                  <div className="flex items-center space-x-2">
                     {pageItems.map((item, index) =>
                        item === '...' ? (
                           <span key={index} className="px-3 py-2 text-gray-500">
                              ...
                           </span>
                        ) : (
                           <button
                              key={item}
                              onClick={() => paginate(item)}
                              className={`px-4 py-2 rounded-lg font-semibold min-w-[44px] transition-all duration-200 ${currentPage === item
                                 ? 'bg-indigo-600 text-white shadow-lg scale-105'
                                 : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                                 }`}
                           >
                              {item}
                           </button>
                        )
                     )}
                  </div>

                  <button
                     onClick={() => paginate(currentPage + 1)}
                     disabled={currentPage === totalPages}
                     className="p-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-gray-300 transition-colors flex items-center justify-center shadow-md"
                  >
                     <HiChevronRight className="w-5 h-5" />
                  </button>
               </div>
            )}

            <div className="text-center mt-8 text-sm text-gray-500">
               Showing {Math.min(indexOfFirstItem + 1, categories.length)}-
               {Math.min(indexOfLastItem, categories.length)} of {categories.length} services
            </div>
         </div>
      </section>
   )
}
