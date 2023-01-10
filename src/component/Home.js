import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { DispatchAction, AddTocart, Filter } from "../Redux/action/getData"

const Home = () => {
    const dispatch = useDispatch()
    const userData = useSelector((state) => state.PassData)

    console.log(userData)

    useEffect(() => {
        dispatch(DispatchAction())
    }, [])
    return (
        <div className="parentContainer">
            <div className="containerFilter">
                <h6><b>filter your Product</b></h6>
                <select style={{ width: "100%" }}>
                    <option>Filter</option>
                    <option onClick={() => dispatch(Filter(10))}>0-10</option>
                    <option onClick={() => dispatch(Filter(20))}>20</option>
                </select>
            </div>
            <div className="container">
                {userData.map((value) => {
                    const { id, title, price, category, description, image, rating } = value
                    return < div className="sub_container" key={id} >
                        <img src={image} alt="imge_shopping" className="img" />
                        <div>
                            <p><b>Title:</b>{title}</p>
                        </div>
                        <div>
                            <p><b>category:</b>{category}</p>
                        </div>
                        <div>
                            <p><b>price:</b>{price}</p>
                        </div>
                        <div>
                            <button onClick={() => dispatch(AddTocart(value))}>addTocart</button>
                        </div>
                    </div>
                })}


            </div>
        </div>


    )

}

export default Home