import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { allProductsReducer } from './reducers/allProductsReducer';
import { allCategoriesReducer } from './reducers/allCategoriesReducer';

const rootReducer = combineReducers({

    allProducts: allProductsReducer,
    allCategories: allCategoriesReducer

});

export const store = createStore(rootReducer, applyMiddleware(thunk));
