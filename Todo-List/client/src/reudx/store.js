import {createStore, combineReducers ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {todoReducers} from './reducers/todoReducers';
const reduser = combineReducers({
    todo: todoReducers,
})

const middleware = [thunk];

const store = createStore(
    reduser,
    composeWithDevTools(applyMiddleware,{...middleware}),
    
)

export default store;