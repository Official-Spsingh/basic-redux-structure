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
            <h2>User and Tasks</h2>
            <ul>
                {
                    props.usertasks.map(u => <li><span>{u.username}</span>,<span>{u.task}</span></li>)
                }
            </ul>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        users: state.users,
        tasks: state.tasks,
        usertasks: state.usertasks
    }
}
export default connect(mapStateToProps, null)(withRouter(OutputContainer))
