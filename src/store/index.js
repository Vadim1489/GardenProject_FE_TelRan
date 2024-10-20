import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { allProductsReducer } from './reducers/allProductsReducer';
import { allCategoriesReducer } from './reducers/allCategoriesReducer';
import { singleProductReducer } from './reducers/singleProductReducer';
import { productsByCategoryReducer } from './reducers/productsByCategoryReducer';

const rootReducer = combineReducers({

    allProducts: allProductsReducer,
    allCategories: allCategoriesReducer,
    singleProduct: singleProductReducer,
    productsByCategory: productsByCategoryReducer,

});

export const store = createStore(rootReducer, applyMiddleware(thunk));
