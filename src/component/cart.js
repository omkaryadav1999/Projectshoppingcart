import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, Link } from "react-router-dom"
import { RemovefromCat } from "../Redux/action/getData"
function Cart() {
    const userSelectedProduct = useSelector((state) => state.UserCart)
    const dispatch = useDispatch()

    const total = userSelectedProduct.map((value) => { return value.price }).reduce((pre, cur) => {
        return pre + cur
    }, 0)
    console.log(total)
    return (
        <div className="parent">

            <NavLink to="/Home"><b>back</b></NavLink>

            <div className="productDetails">

                <div className="cart_container">

                    <h1>Shopping Cart</h1>
                    <hr />
                    {
                        userSelectedProduct.map((value) => {
                            const { id, price, title, description, category, image } = value
                            return <div className="productContainer" key={id}>
                                <div className="imgcontainer">
                                    <img src={image} alt="cartIMg" className="cartImg" />
                                </div>
                                <div>
                                    <p><b>Title:</b>{title}</p>
                                    <p><b>Description:</b>{description}</p>
                                    <p><b>category:</b>{category}</p>
                                    <p><b>price:</b>{price}</p>
                                    <button onClick={() => dispatch(RemovefromCat(value.id))}>removefromCat</button>
                                </div>
                            </div>
                        })
                    }
                </div>

                <div className="total">
                    <h2>subtotal</h2>
                    <hr />
                    <p><b>total:</b>{total.toFixed(3)}</p>
                    <p><b>Discount:</b>{total / 12}</p>
                    <p><b>Tax:</b>{total / 20}</p>
                </div>
            </div>
        </div>

    )
}

export default Cart
