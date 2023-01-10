import { SERACH_PRODUCT, FILTER_PRODUCT } from "../constant/constant";


const initaiState = []

function PassData(state = initaiState, action) {
    switch (action.type) {
        case "SET_RESPONSE":
            return [...action.paylod]

        case SERACH_PRODUCT:
            console.log(action.name)
            const serach = state.filter((value) => {
                return value.title.includes(action.name)
            })
            return [...serach]

        case FILTER_PRODUCT:
            const filter = state.filter((value) => {
                return value.price < action.min
            })
            return [...filter]

        default:
            return state
    }
}

export default PassData