import React, { useEffect, useState, useMemo, Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import NotFound from "../components/NotFound";

// Lazy load components for better performance
const ServiceDetail = lazy(() => import("./serviceDetail"));
const CategoryPage = lazy(() => import("./category"));

// Modern loading component with skeleton animation
const LoadingState = ({ type = "default" }) => (
   <div className="min-h-screen bg-gray-50 text-gray-900 antialiased pt-16 sm:pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
         {type === "service" ? (
            // Service detail skeleton
            <div className="animate-pulse">
               <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
               <div className="h-4 bg-gray-200 rounded w-2/3 mb-12"></div>
               
               <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-2/3">
                     <div className="h-64 bg-gray-200 rounded mb-6"></div>
                     <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
                     <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
                     <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
                     
                     <div className="h-6 bg-gray-200 rounded w-1/4 mb-4 mt-8"></div>
                     <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
                     <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
                  </div>
                  
                  <div className="w-full md:w-1/3">
                     <div className="h-64 bg-gray-200 rounded mb-4"></div>
                     <div className="h-10 bg-blue-200 rounded mb-4"></div>
                  </div>
               </div>
            </div>
         ) : type === "category" ? (
            // Category page skeleton
            <div className="animate-pulse">
               <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
               <div className="h-4 bg-gray-200 rounded w-2/3 mb-12"></div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                     <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="h-48 bg-gray-200"></div>
                        <div className="p-4">
                           <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
                           <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                           <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         ) : (
            // Default skeleton
            <div className="animate-pulse">
               <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
               <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
               
               <div className="h-64 bg-gray-200 rounded mb-8"></div>
               
               <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
               <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
               <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
               <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
               <div className="h-4 bg-gray-200 rounded w-5/6 mb-3"></div>
            </div>
         )}
      </div>
   </div>
);

// Error component for better reusability
const ErrorState = ({ message }) => (
   <div className="min-h-screen bg-gray-50 text-gray-900 antialiased pt-16 sm:pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
         <SectionHeading
            title="Error"
            subtitle={message}
            align="center"
            size="section"
         />
      </div>
   </div>
);

const SlugPage = () => {
   const { slug } = useParams();
   const [data, setData] = useState({ services: [], categories: [] });
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      window.scrollTo(0, 0);
      const fetchData = async () => {
         setLoading(true);
         const API_URL = "https://my-json-server.typicode.com/mwaqas-developer/services-api/db";
         try {
            const res = await fetch(API_URL);
            if (!res.ok) throw new Error("Failed to fetch data from the server.");
            const fetchedData = await res.json();

            const categoriesWithServiceCount = (fetchedData.categories || []).map(c => ({
               ...c,
               serviceCount: c.services ? c.services.length : 0
            }));

            const services = categoriesWithServiceCount.flatMap(category =>
               category.services.map(service => ({
                  ...service,
                  category: {
                     name: category.category,
                     slug: category.slug,
                     image: category.image
                  }
               }))
            );

            setData({ services, categories: categoriesWithServiceCount });
         } catch (err) {
            setError(err.message);
         } finally {
            setLoading(false);
         }
      };
      fetchData();
   }, []);

   const content = useMemo(() => {
      if (loading) {
         return <LoadingState />;
      }

      if (error) {
         return <ErrorState message={error} />;
      }

      const { services, categories } = data;

      if (!slug) {
         return null;
      }

      const isService = services.find(s => s.slug === slug);
      if (isService) {
         return (
            <Suspense fallback={<LoadingState message="Loading service details..." />}>
               <ServiceDetail service={isService} />
            </Suspense>
         );
      }

      const isCategory = categories.find(c => c.slug === slug);
      if (isCategory) {
         const categoryServices = services.filter(s => s.category.slug === slug);
         return (
            <Suspense fallback={<LoadingState message="Loading category details..." />}>
               <CategoryPage category={isCategory} services={categoryServices} allCategories={categories} />
            </Suspense>
         );
      }

      return <NotFound />;
   }, [slug, data, loading, error]);

   return <>{content}</>;
};

export default SlugPage;