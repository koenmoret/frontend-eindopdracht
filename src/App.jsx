import {Routes, Route} from "react-router-dom";
import {useState, createContext} from "react";
import Home from "./pages/home/Home.jsx";
import Products from "./pages/products/Products.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";

import "./components/global/Global.css"

export const LoggedIn = createContext("");
export const CartItemCount = createContext("");

function App() {

    const [cartItemCount, setcartItemCount] = useState(0);
    const [countKwaliteit, setKwaliteitCount] = useState(0);
    const [countArbo, setArboCount] = useState(0);
    const [loggedIn, setLoggedIn] = useState("false");

    return (
        <>
            <LoggedIn.Provider value={loggedIn}>
                <CartItemCount.Provider value={cartItemCount}>
                    <Routes>
                        <Route path="/" element={<Home setCart={cartItemCount} addCart={setcartItemCount}
                                                       setKwaliteitCount={setKwaliteitCount}
                                                       countKwaliteit={countKwaliteit}
                                                       setArboCount={setArboCount}
                                                       countArbo={countArbo}
                                                       setLogged={setLoggedIn}/>}/>
                        <Route path="/products"
                               element={<Products addCart={setcartItemCount} setKwaliteitCount={setKwaliteitCount}
                                                  countKwaliteit={countKwaliteit} setArboCount={setArboCount}
                                                  countArbo={countArbo} setLogged={setLoggedIn}/>}/>
                        <Route path="/checkout" element={<Checkout/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </CartItemCount.Provider>
            </LoggedIn.Provider>
        </>
    )
}

export default App
