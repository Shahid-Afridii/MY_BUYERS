import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Components/Home"
import Header from "../Components/Common/Header"
import Footer from "../Components/Common/Footer"
import PropertyDetails from '../Components/PropertyDetails';
import WalletTransactions from '../Components/Settings/WalletTransactions';
import Feedback from '../Components/Settings/Feedback';
const MainRoutes = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
            <Route exact path={"/"} element={<Home />} />
            <Route exact path={"/propertyDetails"} element={<PropertyDetails />} />
            <Route exact path={"/walletTransactions"} element={<WalletTransactions />} />
            <Route exact path={"/feedback"} element={<Feedback />} />
           

        </Routes>
        <Footer />
    </Router>
    </div>
  )
}

export default MainRoutes
