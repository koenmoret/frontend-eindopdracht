import {Routes, Route} from "react-router-dom";
//import {useState} from "react";
import Home from "./pages/home/Home.jsx";
import Products from "./pages/products/Products.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";

import "./components/global/Global.css"
import {useState} from "react";


function App() {

    const [cartItemCount, setcartItemCount] = useState(0);
    const [countKwaliteit, setKwaliteitCount] = useState(0);
    const [countArbo, setArboCount] = useState(0);

    return (
        <>
            <Routes>
                <Route path="/" element={<Home setCart={cartItemCount} addCart={setcartItemCount} setKwaliteitCount={setKwaliteitCount} countKwaliteit={countKwaliteit} setArboCount={setArboCount} countArbo={countArbo} setPage="home"/>}/>
                <Route path="/products" element={<Products setCart={cartItemCount} addCart={setcartItemCount} setKwaliteitCount={setKwaliteitCount} countKwaliteit={countKwaliteit} setArboCount={setArboCount} countArbo={countArbo} setPage="global"/>}/>
                <Route path="/checkout" element={<Checkout setCart={cartItemCount} />}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    )
}

export default App
