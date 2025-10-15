import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Layout from './components/Layout'
import ServiceDetail from './pages/serviceDetail'
import ServicesList from './pages/serviceList'
import ThankYou from './components/ThankYou'
import Contact from './pages/contact'

function App() {
   return (
      <BrowserRouter>
         <Layout>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/services/:slug" element={<ServiceDetail />} />
               <Route path="/services" element={<ServicesList />} />
               <Route path="/thank-you" element={<ThankYou />} />
               <Route path="/contact" element={<Contact />} />
            </Routes>
         </Layout>
      </BrowserRouter>
   )
}

export default App
