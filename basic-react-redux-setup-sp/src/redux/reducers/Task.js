
const tasks = (state = [], action) => {
    switch (action.type) {
        case "ADD_TASK":
            return [...state, action.payload]
        default: return state
    }
}
export default tasks