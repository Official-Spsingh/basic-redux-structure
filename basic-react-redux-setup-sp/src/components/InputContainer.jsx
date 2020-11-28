import React, { useState } from 'react'
import { withRouter } from "react-router";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { setTask } from '../redux/actions/taskAction'
import { setUser } from '../redux/actions/userAction'
import { setUserAndTask } from '../redux/actions/userAndTaskAction'
const InputContainer = (props) => {
    const [username, setusername] = useState('')
    const [task, settask] = useState('')
    const addUser = () => {
        console.log(username)
        props.actions.setUser(username)
        setusername('')
    }
    const addTask = () => {
        console.log(task)
        props.actions.setTask(task)
        settask('')
    }
    const addUserAndTask = () => {
        let obj = {}
        obj.username = username
        obj.task = task
        props.actions.setUserAndTask(obj)
        setusername('')
        settask('')
    }
    return (
        <div>
            <h1>Input</h1>
            <button onClick={() => props.history.push('/')}>Go to home container</button>
            <button onClick={() => props.history.push('/output')}>Go to output container</button><br></br><br></br>
            <label>Username</label>
            <input type="text" value={username} onChange={(e) => setusername(e.target.value)} /><button onClick={addUser}>Add user</button><br></br>
            <label>Tasks</label>
            <input type="text" value={task} onChange={(e) => settask(e.target.value)} /><button onClick={addTask}>Add Tasks</button><br></br>
            <button onClick={addUserAndTask}>Add user and task</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        // setUser: (user) => {
        //     dispatch({ type: 'ADD_USER', payload: user })
        // },
        // setTask: (task) => {
        //     dispatch({ type: 'ADD_TASK', payload: task })
        // }
        actions: bindActionCreators({
            setTask,
            setUser,
            setUserAndTask
        },

            dispatch)
    }
}
export default connect(null, mapDispatchToProps)(withRouter(InputContainer))
