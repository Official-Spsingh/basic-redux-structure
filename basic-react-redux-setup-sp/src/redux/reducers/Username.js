const initialState = {
    users: []
}
const user = (state = { ...initialState }, action) => {
    switch (action.type) {
        case "ADD_USER":
            const user = state.users
            user.push(action.payload)
            return {
                ...state,
                users: user
            }
        default: return state
    }
}
export default user