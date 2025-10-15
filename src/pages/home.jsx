import React from "react";
import { Hero } from "../components/home/Hero";
import { Services } from "../components/home/Services";
import { CaseStudies } from "../components/home/CaseStudies";
import { About } from "../components/home/About";
import { AssistingClient } from "../components/home/AssistingClient";
import { FAQ } from "../components/home/FAQ";


const contactInfo = {
   email: "hello@brightbridge.example",
   phone: "+1 (555) 123-4567",
   address: "123 Market Lane, Cityville"
};

export default function BusinessTemplate() {
   return (
      <div className="min-h-screen bg-gray-50 text-gray-900 antialiased pt-20">
         <Hero />
         <Services />
         <CaseStudies />
         <AssistingClient />
         <FAQ />
         <About {...contactInfo} />
      </div>
   );
}
