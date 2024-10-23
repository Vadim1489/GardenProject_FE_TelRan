import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { allProductsReducer } from './reducers/allProductsReducer';
import { allCategoriesReducer } from './reducers/allCategoriesReducer';
import { singleProductReducer } from './reducers/singleProductReducer';
import { productsByCategoryReducer } from './reducers/productsByCategoryReducer';
import { cartReducer } from './reducers/cartReducer';

const rootReducer = combineReducers({

    allProducts: allProductsReducer,
    allCategories: allCategoriesReducer,
    singleProduct: singleProductReducer,
    productsByCategory: productsByCategoryReducer,
    cart: cartReducer

});

export const store = createStore(rootReducer, applyMiddleware(thunk));
