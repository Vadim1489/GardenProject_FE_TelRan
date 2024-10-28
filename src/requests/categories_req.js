import { domen } from "../domen";
import { loadAllCategoriesAction } from "../store/reducers/allCategoriesReducer";
import { loadCategoryByIdAction } from "../store/reducers/categoryByIdReducer";
import { loadProductsByCategoryAction } from "../store/reducers/productsByCategoryReducer";


export const getAllCategories = (dispatch) => {
    fetch(`${domen}/categories/all`)
        .then(res => res.json())
        .then(json => dispatch(loadAllCategoriesAction(json)))
}

export const getCategoryById = (category_id) => {
    return dispatch => {
        fetch(`${domen}/categories/${category_id}`)
            .then(res => res.json())
            .then(json => dispatch(loadCategoryByIdAction(json)))
    }
}

export const getProductsByCategory = (category_id) => {
    return dispatch => {
        fetch(`${domen}/categories/${category_id}`)
            .then(res => res.json())
            .then(json => dispatch(loadProductsByCategoryAction(json)))
    }
}