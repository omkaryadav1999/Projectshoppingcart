import { GET_RESPONSE, ADD_CART, REMOVE_PRODUCT, SERACH_PRODUCT, FILTER_PRODUCT } from "../constant/constant";


export const DispatchAction = () => {
    return {
        type: GET_RESPONSE
    }
}

export const AddTocart = (input) => {
    return {
        type: ADD_CART,
        paylod: input
    }
}

export const RemovefromCat = (id) => {
    return {
        type: REMOVE_PRODUCT,
        id: id
    }
}

export const Search = (name) => {
    return {
        type: SERACH_PRODUCT,
        name: name
    }
}

export const Filter = (min) => {
    console.log(min)
    return {
        type: FILTER_PRODUCT,
        min: min,
    }
}