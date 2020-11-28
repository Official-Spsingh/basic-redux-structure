import { combineReducers } from 'redux';
import users from './Username'
import tasks from './Task'
import usertasks from './UserTask'
export default combineReducers({
    users,
    tasks,
    usertasks
})