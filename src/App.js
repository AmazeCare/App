import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import PrivateRoute from 'config/routes/privateRoute'
import PublicRoute from 'config/routes/publicRoute'
import HomePage from 'pages/HomePage'
import AboutUs from 'pages/AboutUs'
import Resources from 'pages/Resources'
import ContactUs from 'pages/ContactUs'
import Blog from 'pages/Blog'
import NsGovtHelp from 'pages/NsGovtHelp'
import AssociateCare from 'pages/service/associate-care'
import CancerCare from 'pages/service/cancer-care'
import HomeCare from 'pages/service/home-care'
import HospitalCare from 'pages/service/hospital-care'
import PalliativeCare from 'pages/service/palliative-care'
import ParkinsonCare from 'pages/service/parkinson-care'
import RecreationCare from 'pages/service/recreation-care'
import StrokeCare from 'pages/service/stroke-care'
import SubstituteHomeCare from 'pages/service/substitute-home-care'

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
            <Route path="/resources" element={<Resources />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/ns-govt-help" element={<NsGovtHelp />} />
            <Route path="/associate-care" element={<AssociateCare />} />
            <Route path="/cancer-care" element={<CancerCare />} />
            <Route path="/home-care" element={<HomeCare />} />
            <Route path="/hospital-care" element={<HospitalCare />} />
            <Route path="/palliative-care" element={<PalliativeCare />} />
            <Route path="/parkinson-care" element={<ParkinsonCare />} />
            <Route path="/recreation-care" element={<RecreationCare />} />
            <Route path="/stroke-care" element={<StrokeCare />} />
            <Route path="/substitute-care" element={<SubstituteHomeCare />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
