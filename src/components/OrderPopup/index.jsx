import React from 'react';
import s from './index.module.css';

export default function OrderPopup({ onClose }) {
  return (
    <div style={s.overlay}>
      <div style={s.popup}>
        <div style={s.closeButton} onClick={onClose}>×</div>
        <h2>Congratulations!</h2>
        <p>Your order has been successfully placed on the website.</p>
        <p>A manager will contact you shortly to confirm your order.</p>
      </div>
    </div>
  )
}
