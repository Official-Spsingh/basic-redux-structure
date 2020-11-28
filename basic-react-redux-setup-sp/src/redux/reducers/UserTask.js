
const usertasks = (state = [], action) => {
    switch (action.type) {
        case "ADD_USER_TASK":
            return [...state, action.payload]
        default: return state
    }
}
export default usertasks