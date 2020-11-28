import { combineReducers } from 'redux';
import user from './Username'
import task from './Task'
export default combineReducers({
    user,
    task
})