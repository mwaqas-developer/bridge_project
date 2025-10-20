import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Layout from './components/Layout'
import ThankYou from './components/ThankYou'
import Contact from './pages/contact'
import About from './pages/about'
import CaseStudies from './pages/caseStudies'
import ScrollToTop from './components/ScrollToTop'
import SlugPage from './pages/slug'
import AllCategories from './pages/allcategories'
import NotFound from './components/NotFound'

function App() {
   return (
      <BrowserRouter>
         <ScrollToTop />
         <Layout>
            <Routes>
               {/* Most specific static routes first */}
               <Route path="/" element={<Home />} />
               <Route path="/all-categories" element={<AllCategories />} />
               <Route path="/thank-you" element={<ThankYou />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/about" element={<About />} />
               <Route path="/case-studies" element={<CaseStudies />} />

               {/* Your dynamic slug route */}
               <Route path="/:slug" element={<SlugPage />} />

               {/* The catch-all 404 route is last */}
               <Route path="*" element={<NotFound />} />
            </Routes>
         </Layout>
      </BrowserRouter>
   )
}

export default App
