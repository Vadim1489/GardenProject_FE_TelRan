import React, { useContext, useState } from 'react';
import s from './index.module.css';
import { Context } from '../../context';

// export default function FormCart() {
//   return (
//     <div className={s.form}>
//         <form>
//             <label htmlFor="Name"></label>
//             <input type="text" placeholder="Name" />
//             <label htmlFor="Name"></label>
//             <input type="number" placeholder="Phone Number" />
//             <input type="text" placeholder="Email" />
//         </form>
//     </div>
//   )
// }

//либо такой вариант формы

// const cartState = useSelector(store => store.cart);
//   const totalSum = +cartState.reduce((acc, el) => acc + (el.price * el.count), 0).toFixed(2);


// const sendOrder = e => {
//   e.preventDefault();
//   const {name, phone, email} = e.target;

//   const order = {
//     name: name.values,
//     phone:phone.value,
//     email: email.value,
//     total: totalSum,
//     cart: cartState
//   }

//   e.target.reser()
// }
{/* <form onSubmit={sendOrder}>
        <input type='text' placeholder='Name' name='name' />
        <input type='number' placeholder='Phone number' name='phone' />
        <input type='text' placeholder='Email' name='email' />
        <button>Order</button>
    </form> */}





const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
    email: ''
  });

  const {openModalWindow} = useContext(Context);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    
    openModalWindow();
    //не уверена вообще в этой форме...
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div>
        <input
        placeholder='Name'
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <input
        placeholder='Phone number'
          type="number"
          id="phone_number"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <input
        placeholder='Email'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        ></input>
      </div>
      
      <button type="submit" className={s.btn}>Order</button>
    </form>
  );
};

export default ContactForm;
