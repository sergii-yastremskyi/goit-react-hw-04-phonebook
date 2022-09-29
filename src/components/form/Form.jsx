
import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './form.module.css';



export default function Form({onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleChange = e => { 
    const { name,value } = e.currentTarget;
    switch (name) { 
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
   const handleSubmit = e => {
    e.preventDefault();

    onSubmit(name,number);
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
   
  };
  const nameId = nanoid();
  const phoneId = nanoid();
  
  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.formContainer}>
          <label htmlFor={nameId}>Name</label>
          <input
            id={nameId}
            type="text"
            value={name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className={css.formContainer}>
          <label htmlFor={phoneId}>Phone</label>
          <input
            id={phoneId}
            onChange={handleChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <button type="submit">Add contact</button>
      </form>
    </div>
  )
}





