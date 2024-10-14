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
                <input {...register('Name', {required: true})} placeholder='Name' />
                {errors.name && <span>This field is required</span>}

                <input {...register("phone", { required: true, pattern: /\d+/ })}  placeholder='Phone' />
                {errors.phone && <span>Please enter a valid phone number</span>}

                <input {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} placeholder='Email'/>
                {errors.email && <span>Please enter a valid email</span>}
                <input type="submit" value="Get a discount" className={s.btn}/>
            </form>
        </div>
    </div>
  )
}
