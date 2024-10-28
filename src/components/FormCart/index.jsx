// import React from "react"
import s from './index.module.css';

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

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
    // Здесь можно добавить логику отправки формы, например, запрос к API
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
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <input
        placeholder='Name'
          type="email"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></input>
      </div>
      
      <button type="submit" className={s.btn}>Submit</button>
    </form>
  );
};

export default ContactForm;
