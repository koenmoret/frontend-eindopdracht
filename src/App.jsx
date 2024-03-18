import {Routes, Route} from "react-router-dom";
import {useState, createContext} from "react";
import Home from "./pages/home/Home.jsx";
import Products from "./pages/products/Products.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";

import "./components/global/Global.css"

//export const LoggedIn = createContext("");
//export const SetLoggedIn = createContext("");
export const Logging = createContext("");
export const CartItems = createContext("");

function App() {

    const [cartItemCount, setCartItemCount] = useState(0);
    const [productKwaliteit, setProductKwaliteit] = useState(0);
    const [productArbo, setProductArbo] = useState(0);
    const [loggedIn, setLoggedIn] = useState(false);

    const logging = {
        loggedIn: loggedIn,
        setLoggedIn: setLoggedIn
    }

    const cartItems = {
        getCartItemCount: cartItemCount,
        setCartItemCount: setCartItemCount,
        productKwaliteit: productKwaliteit,
        setProductKwaliteit: setProductKwaliteit,
        productArbo: productArbo,
        setProductArbo: setProductArbo
    }

    return (
        <>
            <Logging.Provider value={logging}>
                <CartItems.Provider value={cartItems}>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/products" element={<Products  />}/>
                        <Route path="/checkout" element={<Checkout />}/>
                        <Route path="/dashboard" element={<Dashboard />}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </CartItems.Provider>
            </Logging.Provider>
        </>
    )
}

export default App
