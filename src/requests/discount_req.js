import { domen } from "../domen"

export const sendDiscount = discount => {
    fetch(`${domen}/sale/send`,{
        method: "POST",
        body: JSON.stringify(discount)
    })
        .then(res=>res.json())
        .then(json=>console.log(json))
}