import {combineReducers} from 'redux'
import * as modalReducer from './modalReducer'
console.log(modalReducer)
const reducer = combineReducers({
    ...modalReducer
});

export default reducer;