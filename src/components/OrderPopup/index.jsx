import React, { useContext } from 'react';
import s from './index.module.css';
import { RxCross2 } from "react-icons/rx";
import {Context} from '../../context';

export default function OrderPopup() {
  const {closeModalWindow, modalActive} = useContext(Context);

  const modalStyles = {
    display: modalActive ? 'flex' : 'none'
  }

  return (
    <div className={s.modal} style={modalStyles}>
      <div >
      <RxCross2 onClick={closeModalWindow}/>
        <h2>Congratulations!</h2>
        <p>Your order has been successfully placed on the website.</p>
        <p>A manager will contact you shortly to confirm your order.</p>
      </div>
    </div>
  )
}