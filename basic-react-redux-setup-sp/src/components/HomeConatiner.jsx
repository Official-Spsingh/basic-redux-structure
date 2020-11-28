import React from 'react'
import { withRouter } from "react-router";
const HomeConatiner = (props) => {
    return (
        <div>
            <h1>Home page</h1>
            <button onClick={()=>props.history.push('/input')}>Go to input container</button>
            <button onClick={()=>props.history.push('/output')}>Go to output container</button>
        </div>
    )
}

export default withRouter(HomeConatiner)
