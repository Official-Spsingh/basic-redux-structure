export const setUserAndTask = (data) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_USER_TASK",
            payload: data
        })
    }
}