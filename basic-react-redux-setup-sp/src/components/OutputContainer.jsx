import React from 'react'
import { withRouter } from "react-router";
import { connect } from 'react-redux'
const OutputContainer = (props) => {
    return (
        <div>
            <h1>Output</h1>
            <button onClick={() => props.history.push('/input')}>Go to input container</button>
            <button onClick={() => props.history.push('/')}>Go to home container</button>
            <br></br><br></br>
            <h2>Users</h2>
            <ul>
                {
                    props.users.map(u => <li>{u}</li>)
                }
            </ul>
            <h2>Tasks</h2>
            <ul>
                {
                    props.tasks.map(u => <li>{u}</li>)
                }
            </ul>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        users: state.user.users,
        tasks: state.task.tasks
    }
}
export default connect(mapStateToProps, null)(withRouter(OutputContainer))
