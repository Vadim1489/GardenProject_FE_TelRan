import { domen } from "../domen";
import { loadAllCategoriesAction } from "../store/reducers/allCategoriesReducer";


export const getAllCategories = (dispatch) => {
    fetch(`${domen}/categories/all`)
        .then(res => res.json())
        .then(json => dispatch(loadAllCategoriesAction(json)))
}