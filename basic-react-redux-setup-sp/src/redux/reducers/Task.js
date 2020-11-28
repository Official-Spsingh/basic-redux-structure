const initialState = {
    tasks: []
}
const task = (state = { ...initialState }, action) => {
    switch (action.type) {
        case "ADD_TASK":
            const task = state.tasks
            task.push(action.payload)
            return {
                ...state,
                tasks: task
            }
        default: return state
    }
}
export default task