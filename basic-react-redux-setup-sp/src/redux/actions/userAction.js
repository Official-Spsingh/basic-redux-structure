export const setUser = (data) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_USER",
            payload: data
        })
    }
}