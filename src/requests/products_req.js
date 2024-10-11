import { domen } from "../domen"
import { loadAllProductsAction } from "../store/reducers/allProductsReducer"

export const getAllProducts = (dispatch) => {
    fetch(`${domen}/products/all`)
        .then(res => res.json())
        .then(json => dispatch(loadAllProductsAction(json)))
}