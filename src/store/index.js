import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { allProductsReducer } from './reducers/allProductsReducer';
import { allCategoriesReducer } from './reducers/allCategoriesReducer';
import { singleProductReducer } from './reducers/singleProductReducer';
import { productsByCategoryReducer } from './reducers/productsByCategoryReducer';
import { cartReducer } from './reducers/cartReducer';
import { categoryByIdReducer } from './reducers/categoryByIdReducer';

const rootReducer = combineReducers({

    allProducts: allProductsReducer,
    allCategories: allCategoriesReducer,
    singleCategory: categoryByIdReducer,
    singleProduct: singleProductReducer,
    productsByCategory: productsByCategoryReducer,
    cart: cartReducer

});

export const store = createStore(rootReducer, applyMiddleware(thunk));
