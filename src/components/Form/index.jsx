import React from 'react'
import s from './index.module.css'
import form_image from './media/form_img.png'
import { useForm } from 'react-hook-form';
import { sendDiscount } from '../../requests/discount_req';



export default function Form() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()



  const onSubmit = (data) => {
    sendDiscount(data);

    reset();
  };

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
    <div className={s.discount_form}>
      <p>5% off on the first order</p>
      <div className={s.discount_form_container}>
        <div className={s.imgBlock}>
           <img src={form_image} alt="form_img" />
        </div>

        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.input}>
            <div className={`${s.input_group} ${errors.name ? s.has_error : ''}`}>
              <input placeholder='Name' {...nameRegister}/>
              {errors.name && <span className={s.error_message}>! {errors.name.message}</span>}
            </div>

            <div className={`${s.input_group} ${errors.phone ? s.has_error : ''}`}>
              <input placeholder='Phone number' maxLength={15}  {...phoneRegister}/>
              {errors.phone && <span className={s.error_message}>! {errors.phone.message}</span>}
            </div>

            <div className={`${s.input_group} ${errors.email ? s.has_error : ''}`}>
              <input placeholder='Email' {...emailRegister}/>
              {errors.email && <span className={s.error_message}>! {errors.email.message}</span>}
            </div>
          </div>

          <button type="submit" className={s.btn}>
            Get a discount
          </button>
        </form>
      </div>
    </div>
  )
}
