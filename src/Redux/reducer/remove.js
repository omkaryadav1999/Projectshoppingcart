

function RemoveFromcart(){
    case REMOVE_PRODUCT:
    console.log("action.id")

    const newData = state.filter((value, index) => {
        return action.id !== index
    })

    return [...newData]
}