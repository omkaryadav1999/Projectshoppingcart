import React from "react"
import Header from "./component/Header"
import Home from "./component/Home"
import { Route, Routes } from "react-router-dom"
import Cart from "./component/cart"

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Cart" element={<Cart />} />
            </Routes>
        </div>
    )
}

export default App