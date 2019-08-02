import {createStore} from 'redux'
import reducer from '../reducer'

import modalState from './modalStore'
const initValue = {
    'First': 0,
    'Second': 10,
    'Third': 20
}

export default createStore(reducer, {
    ...initValue,
    ...modalState
});