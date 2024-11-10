import React from "react"
import s from "./index.module.css"
import form_image from "./media/form_img.png"
import { useForm } from "react-hook-form"

export default function Form() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = data => {
    console.log(data)

    reset()
  }

  return (
    <div className={s.discount_form}>
      <p>5% off on the first order</p>
      <div className={s.discount_form_container}>
        <div className={s.imgBlock}>
          <img src={form_image} alt="form_img" />
        </div>

        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.input}>
            <div
              className={`${s.input_group} ${errors.name ? s.has_error : ""}`}
            >
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Name"
              />
              {errors.name &&
                <span className={s.error_message}>
                  ! {errors.name.message}
                </span>}
            </div>

            <div
              className={`${s.input_group} ${errors.phone ? s.has_error : ""}`}
            >
              <input
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^(?:\+|0)[1-9]\d{0,13}$/,
                    message: "Please enter a valid phone number"
                  },
                  maxLength: 15
                })}
                placeholder="Phone"
                maxLength={15}
              />
              {errors.phone &&
                <span className={s.error_message}>
                  ! {errors.phone.message}
                </span>}
            </div>

            <div
              className={`${s.input_group} ${errors.email ? s.has_error : ""}`}
            >
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Please enter a valid email address"
                  }
                })}
                placeholder="Email"
              />
              {errors.email &&
                <span className={s.error_message}>
                  ! {errors.email.message}
                </span>}
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
