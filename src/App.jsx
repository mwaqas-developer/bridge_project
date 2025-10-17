import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Layout from './components/Layout'
import ServiceDetail from './pages/serviceDetail'
import ThankYou from './components/ThankYou'
import Contact from './pages/contact'
import About from './pages/about'
import CaseStudies from './pages/caseStudies'
import CategoryPage from './pages/category'
import CategoriesPage from './pages/categories'
import ScrollToTop from './components/ScrollToTop'

function App() {
   return (
      <BrowserRouter>
         <ScrollToTop />
         <Layout>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/services/:slug" element={<ServiceDetail />} />
               <Route path="/services" element={<CategoriesPage />} />
               <Route path="/category/:categoryName" element={<CategoryPage />} />
               <Route path="/thank-you" element={<ThankYou />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/about" element={<About />} />
               <Route path="/case-studies" element={<CaseStudies />} />
            </Routes>
         </Layout>
      </BrowserRouter>
   )
}

export default App
