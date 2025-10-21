// SlugPage component
import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import ServiceDetail from "./serviceDetail";
import CategoryPage from "./category";
import SectionHeading from "../components/SectionHeading";
import NotFound from "../components/NotFound";
import { fetchMergedData } from "../utils/api";

const SlugPage = () => {
   const { slug } = useParams();
   const [data, setData] = useState({ services: [], categories: [] });
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      window.scrollTo(0, 0);
      const fetchData = async () => {
         setLoading(true);
         try {
            const merged = await fetchMergedData();
            setData(merged);
            setError(null);
         } catch (err) {
            setError(err.message || "Failed to fetch merged data.");
         } finally {
            setLoading(false);
         }
      };
      fetchData();
   }, []);

   const content = useMemo(() => {
      if (loading) {
         return (
            <div className="min-h-screen bg-gray-50 text-gray-900 antialiased pt-16 sm:pt-20">
               <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
                  <SectionHeading
                     title="Loading..."
                     subtitle="Please wait while we are fetching the data."
                     align="center"
                     size="section"
                  />
               </div>
            </div>
         );
      }

      if (error) {
         return (
            <div className="min-h-screen bg-gray-50 text-gray-900 antialiased pt-16 sm:pt-20">
               <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
                  <SectionHeading
                     title="Error"
                     subtitle={error}
                     align="center"
                     size="section"
                  />
               </div>
            </div>
         );
      }

      const { services, categories } = data;

      if (!slug) {
         return null;
      }

      const isService = services.find(s => s.slug === slug);
      if (isService) {
         return <ServiceDetail service={isService} />;
      }

      const isCategory = categories.find(c => c.slug === slug);
      if (isCategory) {
         const categoryServices = services.filter(s => s.category.slug === slug);
         return <CategoryPage category={isCategory} services={categoryServices} allCategories={categories} />;
      }

      return <NotFound />;
   }, [slug, data, loading, error]);

   return <>{content}</>;
};

export default SlugPage;