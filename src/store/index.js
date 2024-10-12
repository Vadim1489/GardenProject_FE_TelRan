import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { allProductsReducer } from './reducers/allProductsReducer';

const rootReducer = combineReducers({

    allProducts: allProductsReducer

});

export const store = createStore(rootReducer, applyMiddleware(thunk));
