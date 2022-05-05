import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import PrivateRoute from 'config/routes/privateRoute'
import PublicRoute from 'config/routes/publicRoute'
import HomePage from 'pages/HomePage'
import AboutUs from 'pages/AboutUs'
import OurServices from 'pages/OurServices'
import Resources from 'pages/Resources'
import ContactUs from 'pages/ContactUs'
import NsGovtHelp from 'pages/NsGovtHelp'

import './App.css'

function App() {
  return (
    <div className="App bg-primary">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/ns-govt-help" element={<NsGovtHelp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
