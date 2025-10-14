import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Layout from './components/Layout'
import ServiceDetail from './pages/serviceDetail'
import ServicesList from './pages/serviceList'

function App() {
   return (
      <BrowserRouter>
         <Layout>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/services/:slug" element={<ServiceDetail />} />
               <Route path="/services" element={<ServicesList />} />
            </Routes>
         </Layout>
      </BrowserRouter>
   )
}

export default App
