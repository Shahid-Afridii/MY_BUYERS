import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Components/Home"
import Header from "../Components/Common/Header"
import Footer from "../Components/Common/Footer"
import CategoryDetails from '../Components/CategoryDetails';
import WalletTransactions from '../Components/Settings/WalletTransactions';
import Feedback from '../Components/Settings/Feedback';
import Chat from '../Components/NavBar/Chat';
import MyADs from '../Components/NavBar/MyADs';
import WishList from '../Components/NavBar/WishList';
import Forms from '../Components/NavBar/Forms';
import ProductDetails from '../Components/ProductDetails';
import Categories from '../Components/Categories';
import Help from '../Components/NavBar/Help';
import Login from '../Components/Auth/Login';
import Otp from '../Components/Auth/Otp';
import Register from '../Components/Auth/Register';
const MainRoutes = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
            <Route exact path={"/"} element={<Home />} />
            <Route exact path={"/CategoryDetails"} element={<CategoryDetails />} />
            <Route exact path={"/walletTransactions"} element={<WalletTransactions />} />
            <Route exact path={"/feedback"} element={<Feedback />} />
            <Route exact path={"/chat"} element={<Chat />} />
            <Route exact path={"/myADs"} element={<MyADs />} />
            <Route exact path={"/wishlist"} element={<WishList />} />
            <Route exact path={"/forms"} element={<Forms />} />
            <Route exact path={"/productDetails"} element={<ProductDetails />} />
            <Route exact path={"/categories"} element={<Categories />} />
            <Route exact path={"/help"} element={<Help />} />
            <Route exact path={"/login"} element={<Login />} />
            <Route exact path={"/otp"} element={<Otp />} />
            <Route exact path={"/register"} element={<Register />} />
           

        </Routes>
        <Footer />
    </Router>
    </div>
  )
}

export default MainRoutes
