import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { allProductsReducer } from './reducers/allProductsReducer';
import { allCategoriesReducer } from './reducers/allCategoriesReducer';
import { singleProductReducer } from './reducers/singleProductReducer';

const rootReducer = combineReducers({

    allProducts: allProductsReducer,
    allCategories: allCategoriesReducer,
    singleProduct: singleProductReducer,

});

export const store = createStore(rootReducer, applyMiddleware(thunk));
