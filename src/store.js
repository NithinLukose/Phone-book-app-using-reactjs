import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

import contactReducer from './reducers/contactReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
    
    contacts:contactReducer,
    filter:filterReducer
    
})

const store = createStore(reducer,applyMiddleware(thunk))

export default store