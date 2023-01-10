import { GET_RESPONSE, SET_RESPONSE } from "../constant/constant";
import { takeEvery, put } from "redux-saga/effects"
import axios from "axios"

function* CallApi() {
    const response = yield axios.get("https://fakestoreapi.com/products")
    yield put({ type: SET_RESPONSE, paylod: response.data })
}

function* GetfromAction() {
    yield takeEvery(GET_RESPONSE, CallApi)
}

export default GetfromAction