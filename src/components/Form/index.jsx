import React from 'react'
import s from './index.module.css'
import form_image from './media/form_img.png'
import { useForm } from 'react-hook-form';



export default function Form() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={s.discount_form}>
                <p>5% off on the first order</p>
        <div className={s.discount_form_container}>
            <img src={form_image} alt="form_img" />
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <input {...register('Name', {required: true})} placeholder='Name' />
                {errors.name && <span>Это поле обязательно</span>}

                <input {...register("phone", { required: true, pattern: /\d+/ })}  placeholder='Phone' />
                {errors.phone && <span>Введите корректный номер телефона</span>}

                <input {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} placeholder='Email'/>
                {errors.email && <span>Введите корректный email</span>}
                <input type="submit" />
            </form>
        </div>
    </div>
  )
}
