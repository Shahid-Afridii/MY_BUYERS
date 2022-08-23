import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Components/Home"
import Header from "../Components/Common/Header"
import Footer from "../Components/Common/Footer"
import PropertyDetails from '../Components/PropertyDetails';
import WalletTransactions from '../Components/Settings/WalletTransactions';
import Feedback from '../Components/Settings/Feedback';
import Chat from '../Components/NavBar/Chat';
import MyADs from '../Components/NavBar/MyADs';
import WishList from '../Components/NavBar/WishList';
import Forms from '../Components/NavBar/Forms';
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
            <Route exact path={"/chat"} element={<Chat />} />
            <Route exact path={"/myADs"} element={<MyADs />} />
            <Route exact path={"/wishlist"} element={<WishList />} />
            <Route exact path={"/forms"} element={<Forms />} />
           

        </Routes>
        <Footer />
    </Router>
    </div>
  )
}

export default MainRoutes
