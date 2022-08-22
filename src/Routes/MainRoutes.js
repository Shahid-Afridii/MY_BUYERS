import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Components/Home"
import Header from "../Components/Common/Header"
import Footer from "../Components/Common/Footer"
import PropertyDetails from '../Components/PropertyDetails';
const MainRoutes = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
            <Route exact path={"/"} element={<Home />} />
            <Route exact path={"/propertyDetails"} element={<PropertyDetails />} />
           

        </Routes>
        <Footer />
    </Router>
    </div>
  )
}

export default MainRoutes
