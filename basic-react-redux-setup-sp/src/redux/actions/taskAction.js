export const setTask = (data) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_TASK",
            payload: data
        })
    }
}