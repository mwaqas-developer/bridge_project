import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ThankYou = () => {
   const location = useLocation();
   const { formData, serviceName } = location.state || {};

   return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center px-4 pt-28 pb-8">
         <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-8">
               <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100">
                  <svg
                     className="h-12 w-12 text-green-600"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                     />
                  </svg>
               </div>
            </div>

            {/* Main Content */}
            <div className="mb-8">
               <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Thank You for Your Quote Request!
               </h1>
               <p className="text-xl text-gray-600 mb-6">
                  We've received your request for <span className="font-semibold text-indigo-600">{serviceName || 'our service'}</span> and will get back to you within 24 hours.
               </p>
            </div>

            {/* Summary Card */}
            {formData && (
               <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Request Summary</h3>
                  <div className="space-y-3">
                     <div className="flex justify-between">
                        <span className="text-gray-600">Name:</span>
                        <span className="font-medium">{formData.name}</span>
                     </div>
                     <div className="flex justify-between">
                        <span className="text-gray-600">Email:</span>
                        <span className="font-medium">{formData.email}</span>
                     </div>
                     {formData.company && (
                        <div className="flex justify-between">
                           <span className="text-gray-600">Company:</span>
                           <span className="font-medium">{formData.company}</span>
                        </div>
                     )}
                     {formData.budget && (
                        <div className="flex justify-between">
                           <span className="text-gray-600">Budget:</span>
                           <span className="font-medium">
                              {formData.budget === 'under-5k' && 'Under $5,000'}
                              {formData.budget === '5k-10k' && '$5,000 - $10,000'}
                              {formData.budget === '10k-25k' && '$10,000 - $25,000'}
                              {formData.budget === '25k-50k' && '$25,000 - $50,000'}
                              {formData.budget === '50k-plus' && '$50,000+'}
                           </span>
                        </div>
                     )}
                     {formData.timeline && (
                        <div className="flex justify-between">
                           <span className="text-gray-600">Timeline:</span>
                           <span className="font-medium">
                              {formData.timeline === 'asap' && 'ASAP'}
                              {formData.timeline === '1-month' && 'Within 1 month'}
                              {formData.timeline === '2-3-months' && '2-3 months'}
                              {formData.timeline === '3-6-months' && '3-6 months'}
                              {formData.timeline === '6-plus-months' && '6+ months'}
                           </span>
                        </div>
                     )}
                  </div>
               </div>
            )}

            {/* Next Steps */}
            <div className="bg-indigo-50 rounded-2xl p-6 mb-8">
               <h3 className="text-lg font-semibold text-indigo-900 mb-3">What happens next?</h3>
               <div className="space-y-2 text-indigo-800">
                  <p>• Our team will review your requirements</p>
                  <p>• We'll prepare a detailed proposal</p>
                  <p>• You'll receive a response within 24 hours</p>
                  <p>• We'll schedule a consultation if needed</p>
               </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link
                  to="/"
                  className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
               >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Back to Home
               </Link>
               <Link
                  to="/all-categories"
                  className="inline-flex items-center justify-center px-8 py-3 border border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
               >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Browse Services
               </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-12 text-center">
               <p className="text-gray-600 mb-2">Need immediate assistance?</p>
               <p className="text-indigo-600 font-semibold">
                  Call us at <span className="font-bold">(555) 123-4567</span> or email{' '}
                  <span className="font-bold">hello@company.com</span>
               </p>
            </div>
         </div>
      </div>
   );
};

export default ThankYou;
