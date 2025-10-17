import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const QuoteForm = ({ isOpen, onClose, serviceName, inline = false }) => {
   const navigate = useNavigate();
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: serviceName || '',
      message: '',
      budget: '',
      timeline: ''
   });

   const [isSubmitting, setIsSubmitting] = useState(false);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
         ...prev,
         [name]: value
      }));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
         // Simulate API call
         await new Promise(resolve => setTimeout(resolve, 1000));

         // Show success toast
         toast.success('Quote request submitted successfully!', {
            duration: 4000,
            position: 'top-center',
         });

         // Close modal
         onClose();

         // Navigate to thank you page
         navigate('/thank-you', {
            state: {
               formData,
               serviceName: serviceName || 'Service'
            }
         });
      } catch (error) {
         toast.error('Failed to submit quote request. Please try again.');
      } finally {
         setIsSubmitting(false);
      }
   };

   if (!inline && !isOpen) return null;

   // Inline mode: render as a card without overlay/backdrop
   if (inline) {
      return (
         <div className="w-full max-w-3xl mx-auto bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl ring-1 ring-white/50">
            <div className="flex items-center justify-between p-6 border-b border-white/60 bg-gradient-to-r from-white/60 to-white/30 rounded-t-2xl">
               <h2 className="text-2xl font-bold text-gray-900">Request a Quote</h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                     </label>
                     <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-white/60 bg-white/70 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors placeholder-gray-400"
                        placeholder="Enter your full name"
                     />
                  </div>
                  <div>
                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                     </label>
                     <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-white/60 bg-white/70 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors placeholder-gray-400"
                        placeholder="Enter your email"
                     />
                  </div>
                  <div>
                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                     </label>
                     <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-white/60 bg-white/70 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors placeholder-gray-400"
                        placeholder="Enter your phone number"
                     />
                  </div>
                  <div>
                     <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                     </label>
                     <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-white/60 bg-white/70 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors placeholder-gray-400"
                        placeholder="Enter your company name"
                     />
                  </div>
               </div>
               <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                     Service Interested In
                  </label>
                  <input
                     type="text"
                     id="service"
                     name="service"
                     value={formData.service}
                     onChange={handleChange}
                     className="w-full px-4 py-3 border border-white/60 bg-white/70 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors placeholder-gray-400"
                     placeholder="Service name"
                  />
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                     <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                     </label>
                     <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-white/60 bg-white/70 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                     >
                        <option value="">Select budget range</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-plus">$50,000+</option>
                     </select>
                  </div>
                  <div>
                     <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Timeline
                     </label>
                     <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-white/60 bg-white/70 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                     >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="2-3-months">2-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-plus-months">6+ months</option>
                     </select>
                  </div>
               </div>
               <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                     Project Details *
                  </label>
                  <textarea
                     id="message"
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                     required
                     rows={4}
                     className="w-full px-4 py-3 border border-white/60 bg-white/70 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors resize-none placeholder-gray-400"
                     placeholder="Tell us about your project requirements, goals, and any specific details..."
                  />
               </div>
               <div className="flex justify-end space-x-4 pt-4">
                  <button
                     type="submit"
                     disabled={isSubmitting}
                     className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center shadow-md shadow-indigo-500/20"
                  >
                     {isSubmitting ? (
                        <>
                           <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                           </svg>
                           Submitting...
                        </>
                     ) : (
                        'Submit Quote Request'
                     )}
                  </button>
               </div>
            </form>
         </div>
      );
   }

   // Default modal mode
   return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
         {/* Backdrop with blur */}
         <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm sm:backdrop-blur-md transition-opacity"
            onClick={onClose}
         ></div>

         {/* Modal */}
         <div className="flex min-h-full items-center justify-center p-3 sm:p-4">
            <div
               role="dialog"
               aria-modal="true"
               aria-labelledby="quote-modal-title"
               className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ring-1 ring-white/50 bg-white/80 backdrop-blur-xl"
               style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.2)" }}
            >
               {/* Header */}
               <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/60 bg-gradient-to-r from-white/60 to-white/30 backdrop-blur-xl rounded-t-2xl">
                  <h2 id="quote-modal-title" className="text-xl sm:text-2xl font-bold text-gray-900">Get a Quote</h2>
                  <button
                     onClick={onClose}
                     className="inline-flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full text-gray-500 hover:text-gray-700 hover:bg-white/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white/40"
                  >
                     <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                     </svg>
                  </button>
               </div>

               {/* Form */}
               <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                     {/* Name */}
                     <div>
                        <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                           Full Name *
                        </label>
                        <input
                           type="text"
                           id="name"
                           name="name"
                           value={formData.name}
                           onChange={handleChange}
                           required
                           className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-white/60 bg-white/70 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors placeholder-gray-400 text-sm sm:text-base"
                           placeholder="Enter your full name"
                        />
                     </div>

                     {/* Email */}
                     <div>
                        <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                           Email Address *
                        </label>
                        <input
                           type="email"
                           id="email"
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           required
                           className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-white/60 bg-white/70 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors placeholder-gray-400 text-sm sm:text-base"
                           placeholder="Enter your email"
                        />
                     </div>

                     {/* Phone */}
                     <div>
                        <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                           Phone Number *
                        </label>
                        <input
                           type="tel"
                           id="phone"
                           name="phone"
                           value={formData.phone}
                           onChange={handleChange}
                           required
                           className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-white/60 bg-white/70 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors placeholder-gray-400 text-sm sm:text-base"
                           placeholder="Enter your phone number"
                        />
                     </div>

                     {/* Company */}
                     <div>
                        <label htmlFor="company" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                           Company Name
                        </label>
                        <input
                           type="text"
                           id="company"
                           name="company"
                           value={formData.company}
                           onChange={handleChange}
                           className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-white/60 bg-white/70 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors placeholder-gray-400 text-sm sm:text-base"
                           placeholder="Enter your company name"
                        />
                     </div>
                  </div>

                  {/* Service */}
                  <div>
                     <label htmlFor="service" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Service Interested In
                     </label>
                     <input
                        type="text"
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-white/60 bg-white/70 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors placeholder-gray-400 text-sm sm:text-base"
                        placeholder="Service name"
                     />
                  </div>

                  {/* Budget and Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                     <div>
                        <label htmlFor="budget" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                           Budget Range
                        </label>
                        <select
                           id="budget"
                           name="budget"
                           value={formData.budget}
                           onChange={handleChange}
                           className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-white/60 bg-white/70 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors text-sm sm:text-base"
                        >
                           <option value="">Select budget range</option>
                           <option value="under-5k">Under $5,000</option>
                           <option value="5k-10k">$5,000 - $10,000</option>
                           <option value="10k-25k">$10,000 - $25,000</option>
                           <option value="25k-50k">$25,000 - $50,000</option>
                           <option value="50k-plus">$50,000+</option>
                        </select>
                     </div>

                     <div>
                        <label htmlFor="timeline" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                           Project Timeline
                        </label>
                        <select
                           id="timeline"
                           name="timeline"
                           value={formData.timeline}
                           onChange={handleChange}
                           className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-white/60 bg-white/70 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors text-sm sm:text-base"
                        >
                           <option value="">Select timeline</option>
                           <option value="asap">ASAP</option>
                           <option value="1-month">Within 1 month</option>
                           <option value="2-3-months">2-3 months</option>
                           <option value="3-6-months">3-6 months</option>
                           <option value="6-plus-months">6+ months</option>
                        </select>
                     </div>
                  </div>

                  {/* Message */}
                  <div>
                     <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Project Details *
                     </label>
                     <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-white/60 bg-white/70 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors resize-none placeholder-gray-400 text-sm sm:text-base"
                        placeholder="Tell us about your project requirements, goals, and any specific details..."
                     />
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 pt-3 sm:pt-4">
                     <button
                        type="button"
                        onClick={onClose}
                        className="px-4 sm:px-6 py-2.5 sm:py-3 border border-white/60 text-gray-700 rounded-lg hover:bg-white/70 transition-colors text-sm sm:text-base"
                        disabled={isSubmitting}
                     >
                        Cancel
                     </button>
                     <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 sm:px-8 py-2.5 sm:py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-md shadow-indigo-500/20 text-sm sm:text-base"
                     >
                        {isSubmitting ? (
                           <>
                              <svg className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Submitting...
                           </>
                        ) : (
                           'Submit Quote Request'
                        )}
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default QuoteForm;
