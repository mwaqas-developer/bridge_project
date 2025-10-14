import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import FsLightbox from "fslightbox-react";

// Helper component for loading state
const ServiceDetailSkeleton = () => (
   <div className="animate-pulse">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
         {/* Breadcrumbs */}
         <div className="mb-8 flex items-center text-sm space-x-2">
            <div className="h-4 bg-gray-200 rounded w-16"></div>
            <div className="h-4 w-2 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-20"></div>
            <div className="h-4 w-2 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-24"></div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16">
            {/* Image Section */}
            <div>
               <div className="sticky top-24">
                  <div className="mb-4 bg-gray-200 rounded-2xl h-[500px] w-full"></div>
                  <div className="grid grid-cols-4 gap-4">
                     <div className="bg-gray-200 rounded-lg h-24"></div>
                     <div className="bg-gray-200 rounded-lg h-24"></div>
                     <div className="bg-gray-200 rounded-lg h-24"></div>
                     <div className="bg-gray-200 rounded-lg h-24"></div>
                  </div>
               </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col mt-8 lg:mt-0">
               <div className="mb-4">
                  <div className="h-8 bg-gray-200 rounded-full w-32"></div>
               </div>
               <div className="h-12 bg-gray-200 rounded w-3/4 mb-4"></div>
               <div className="space-y-3 mb-8">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
               </div>

               <div className="mt-auto pt-6 bg-gray-50 rounded-lg p-6 border-t">
                  <div className="flex items-center justify-between">
                     <div>
                        <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                        <div className="h-10 bg-gray-200 rounded w-32"></div>
                     </div>
                     <div className="h-16 bg-gray-200 rounded-lg w-40"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Detailed Description Section */}
      <div className="bg-gray-50/70 py-16 sm:py-24">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
            <div className="space-y-4">
               <div className="h-4 bg-gray-200 rounded w-full"></div>
               <div className="h-4 bg-gray-200 rounded w-full"></div>
               <div className="h-4 bg-gray-200 rounded w-5/6"></div>
               <div className="h-4 bg-gray-200 rounded w-full"></div>
               <div className="h-4 bg-gray-200 rounded w-4/5"></div>
            </div>
         </div>
      </div>
   </div>
);


// Helper component for error messages
const ErrorDisplay = ({ message }) => (
   <div className="flex justify-center items-center h-screen">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg" role="alert">
         <strong className="font-bold">Error:</strong>
         <span className="block sm:inline"> {message}</span>
      </div>
   </div>
);

// Image Gallery Component
const ServiceImageGallery = ({ images, onImageSelect, onImageClick, activeImage }) => (
   <div className="sticky top-24">
      <div className="mb-4">
         <img
            src={activeImage}
            alt="Featured service"
            className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
            onClick={onImageClick}
         />
      </div>
      <div className="grid grid-cols-4 gap-4">
         {images.map((image, index) => (
            <div
               key={index}
               onClick={() => onImageSelect(image)}
               className={`rounded-lg overflow-hidden cursor-pointer border-2 ${activeImage === image ? "border-indigo-500" : "border-transparent"
                  } hover:border-indigo-400 transition-all duration-300`}
            >
               <img
                  src={image}
                  alt={`Service thumbnail ${index + 1}`}
                  className="w-full h-24 object-cover"
               />
            </div>
         ))}
      </div>
   </div>
);

// Service Summary Component (for top section)
const ServiceSummary = ({ service }) => (
   <div className="flex flex-col h-full">
      <div className="mb-4">
         <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-4 py-2 rounded-full self-start">
            {service.category}
         </span>
      </div>
      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{service.name}</h1>
      <p className="text-gray-500 text-lg mb-8 leading-relaxed">A brief introduction or summary of the service can go here. For now, we are showing the start of the details.</p>

      <div className="mt-auto pt-6 bg-gray-50 rounded-lg p-6 border-t border-gray-200">
         <div className="flex items-center justify-between">
            <div>
               <p className="text-sm text-gray-500">Starting from</p>
               <p className="text-4xl font-bold text-indigo-600">${service.price}</p>
            </div>
            <Link
               to="/contact"
               className="inline-block bg-green-500 text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-green-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 transform hover:-translate-y-1"
            >
               Get a Quote
            </Link>
         </div>
      </div>
   </div>
);

// Detailed Description Component
const ServiceDescription = ({ details }) => (
   <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Full Service Description</h2>
      <div
         className="prose prose-lg max-w-none text-gray-600"
         dangerouslySetInnerHTML={{ __html: details }}
      />
   </div>
);


const ServiceDetail = () => {
   const { slug } = useParams();
   const [service, setService] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [activeImage, setActiveImage] = useState("");
   const [lightboxController, setLightboxController] = useState({
      toggler: false,
      slide: 1,
   });

   useEffect(() => {
      window.scrollTo(0, 0);
      const fetchService = async () => {
         const API_URL = `https://my-json-server.typicode.com/mwaqas-developer/services-api/services?slug=${slug}`;
         try {
            const res = await fetch(API_URL);
            if (!res.ok) throw new Error("Network response was not ok.");
            const data = await res.json();
            if (data.length > 0) {
               setService(data[0]);
               setActiveImage(data[0].featured_image);
            } else {
               setError("Service not found.");
            }
         } catch (err) {
            setError(err.message);
         } finally {
            setLoading(false);
         }
      };

      fetchService();
   }, [slug]);

   if (loading) return <ServiceDetailSkeleton />;
   if (error) return <ErrorDisplay message={error} />;
   if (!service) return null;

   const galleryImages = [service.featured_image, ...service.gallery_images];

   const openLightboxOnActiveImage = () => {
      const slideIndex = galleryImages.indexOf(activeImage);
      setLightboxController({
         toggler: !lightboxController.toggler,
         slide: slideIndex !== -1 ? slideIndex + 1 : 1,
      });
   };

   return (
      <>
         <div className="bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
               {/* Breadcrumbs */}
               <div className="mb-8 text-sm text-gray-500">
                  <Link to="/" className="hover:text-indigo-600">Home</Link>
                  <span className="mx-2">/</span>
                  <Link to="/services" className="hover:text-indigo-600">Services</Link>
                  <span className="mx-2">/</span>
                  <span className="text-gray-900 font-medium">{service.name}</span>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16">
                  {/* Image Section */}
                  <div>
                     <ServiceImageGallery
                        images={galleryImages}
                        activeImage={activeImage}
                        onImageSelect={setActiveImage}
                        onImageClick={openLightboxOnActiveImage}
                     />
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col">
                     <ServiceSummary service={service} />
                  </div>
               </div>
            </div>
         </div>

         {/* Detailed Description Section */}
         <div className="bg-gray-50/70 py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
               <ServiceDescription details={service.details} />
            </div>
         </div>

         <FsLightbox
            toggler={lightboxController.toggler}
            sources={galleryImages}
            slide={lightboxController.slide}
         />
      </>
   );
};

export default ServiceDetail;