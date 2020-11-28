import { combineReducers } from 'redux';
import users from './Username'
import tasks from './Task'
export default combineReducers({
    users,
    tasks
})