import React from 'react'
import s from './index.module.css'
import form_image from './media/form_img.png'
import { useForm } from 'react-hook-form';



export default function Form() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    reset();
  };

  return (
    <div className={s.discount_form}>
      <p>5% off on the first order</p>
      <div className={s.discount_form_container}>
        <img src={form_image} alt="form_img" />

        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        
          <div className={`${s.input_group} ${errors.name ? s.has_error : ''}`}>
            <input
              {...register('name', { required: 'Name is required' })}
              placeholder='Name'
            />
            {errors.name && <span className={s.error_message}>! {errors.name.message}</span>}
          </div>

          
          <div className={`${s.input_group} ${errors.phone ? s.has_error : ''}`}>
            <input
              {...register('phone', {
                required: 'Phone number is required',
                pattern: { value: /^\d+$/, message: 'Please enter a valid phone number' },
              })}
              placeholder='Phone'
            />
            {errors.phone && <span className={s.error_message}>! {errors.phone.message}</span>}
          </div>

          
          <div className={`${s.input_group} ${errors.email ? s.has_error : ''}`}>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Please enter a valid email address',
                },
              })}
              placeholder='Email'
            />
            {errors.email && <span className={s.error_message}>! {errors.email.message}</span>}
          </div>

          <button type="submit" className={s.btn}>Get a discount</button>
        </form>
      </div>
    </div>
  )
}
