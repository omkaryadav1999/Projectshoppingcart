import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { Search } from "../Redux/action/getData"

function Header() {
    const [input, setInput] = useState("")
    const cartData = useSelector((state) => state.UserCart)
    const dispatch = useDispatch()

    return (
        <>
            <div className="Hedder">
                <div className="productsercher">
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                    <button type="serach" onClick={() => dispatch(Search(input))}>serach</button>
                </div>
                <Link to="/Cart">
                    <div className="iconbox">
                        <span>{cartData.length}</span> <i className="bi bi-cart"></i>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Header 