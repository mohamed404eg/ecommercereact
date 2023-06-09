import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useParams } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Header/Header";
import SignUp from "./Pages/Sign/Sign Up/SignUp";
import Footer from "./Pages/Footer/Footer";
import MenuSecond from "./components/MenuSecond/MenuSecond";
import { useEffect, useLayoutEffect } from "react";
import Cart from "./Pages/Cart/Cart";
import CategotyPage from "./Pages/categoty/CategotyPage";
import Pagecustom from "./Pages/pagecustom/Pagecustom";
import Product from "./Pages/product/Product";
import Success from "./Pages/success/Success";
import Dashboard from "./Pages/dashboard/Dashboard";
import SignIn from "./Pages/Sign/SignIn/SignIn";
import Search from "./Pages/Search/Search";
import Order from "./Pages/dashboard/order/Order";
import SinglesPage from "./Pages/SinglesPage/SinglesPage";

import Error from "./Pages/error/Error"
// /success?success=false
function App() {
  return (
    <div className="App ">
      <Header />
      <MenuSecond />
      <Routes>
        <Route path="/success/:success" element={<Success />} />
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:itemId" element={<Product />}></Route>
        <Route path="/dashboard/:sub" element={<Dashboard />} />
        <Route path="/dashboard/" element={<Dashboard />} />

        <Route path="Categoty/:categotyId" element={<CategotyPage />}></Route>
        <Route
          path="Categoty/:categotyId/:filter"
          element={<CategotyPage />}
        ></Route>
        <Route path="Pagecustom/:key/:id" element={<Pagecustom />}></Route>
        <Route path="Search/:keyword/" element={<Search />}></Route>
        <Route path="SinglesPage/:id/" element={<SinglesPage />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
