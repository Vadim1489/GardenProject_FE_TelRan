import { domen } from "../domen"

export const sendCart = cart => {
    fetch(`${domen}/order/send`, {
        method: "POST",
        body:JSON.stringify(cart)
    })
        .then(res=>res.json())
        .then(json=>console.log(json))
}