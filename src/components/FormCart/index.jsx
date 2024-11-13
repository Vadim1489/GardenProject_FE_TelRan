import React, { useContext } from 'react';
import s from './index.module.css';
import { Context } from '../../context';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { sendCart } from '../../requests/cart_req';


const ContactForm = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
  const {openModalWindow} = useContext(Context);

  const cartState = useSelector(store=>store.cart);
  const totalSum = +cartState.reduce((acc, el) => acc + (el.price * el.count), 0).toFixed(2);

  const sendOrder = (data) => {
    sendCart({
      ...data,
      total: totalSum,
      cart: cartState
    });

    openModalWindow();
    
    reset();
  }

  

  const nameRegister = register('name', {
    required: 'Name is required',
  });
  const phoneRegister = register('phone', {
    required: 'Phone number is required',
    pattern: {
      value: /^(?:\+|0)[1-9]\d{0,13}$/,
      message: 'Please enter a valid phone number',
      maxLength: 15 
    }
  });
  const emailRegister = register('email', {
    required: 'Email is required',
    pattern: {
      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: 'Please enter a valid email address'
    }
  });

  return (
    <div className={s.form_container}>
      <form onSubmit={handleSubmit(sendOrder)} className={s.form}>
        <div className={s.input}>
          <div className={`${s.input_group} ${errors.name ? s.has_error : ''}`}>
            <input placeholder='Name' {...nameRegister} />
            {errors.name && <span className={s.error_message}>! {errors.name.message}</span>}
          </div>
          
          <div className={`${s.input_group} ${errors.name ? s.has_error : ''}`}>
            <input placeholder='Phone number' {...phoneRegister} />
            {errors.phone && <span className={s.error_message}>! {errors.phone.message}</span>}

          </div>
          
          <div className={`${s.input_group} ${errors.name ? s.has_error : ''}`}>
            <input placeholder='Email' {...emailRegister} />
            {errors.email && <span className={s.error_message}>! {errors.email.message}</span>}

          </div>
        </div>
        <button type="submit" className={s.btn}>Order</button>
      </form>
    </div>
  );
};

export default ContactForm;
