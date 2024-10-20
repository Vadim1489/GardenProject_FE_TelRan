import { domen } from "../domen"
import { loadAllProductsAction } from "../store/reducers/allProductsReducer"
import { loadSingleProductAction } from "../store/reducers/singleProductReducer"


export const getAllProducts = (dispatch) => {
    fetch(`${domen}/products/all`)
        .then(res => res.json())
        .then(json => dispatch(loadAllProductsAction(json)))
}

export const getSingleProduct = product_id => {
    return dispatch => {
        fetch(`${domen}/products/${product_id}`)
            .then(res => res.json())
            .then(json => dispatch(loadSingleProductAction(json)))
    }
}
