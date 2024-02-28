import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import reduxThunk from 'redux-thunk';
import { AuthReducer } from './reducers/AuthReducer';




const rootReducer = combineReducers({
    AuthReducer,
})

let middleWare = applyMiddleware(reduxThunk);
let composeCustom = compose(middleWare);

export const store = createStore(rootReducer, composeCustom);