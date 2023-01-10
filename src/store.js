import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./Redux/reducer/comineReducer"
import createsagaMiddleware from "redux-saga"
import rootSaga from "./Redux/sagas/combineSaga"
const sagaMiddleware = createsagaMiddleware()

const Store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export default Store