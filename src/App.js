import React, { Component } from 'react';
import { useState,useEffect } from 'react';
import { nanoid } from 'nanoid';
import styles from './components/shared/shared.module.css';
import './App.css';
import { css } from 'styled-components';
import Form from './components/form/';
import ContactsList from './components/contactsList/';
import Filter from './components/filter';




export default function App() {
  const [contacts, setContacts] = useState(()=>{return JSON.parse(window.localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]});
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');
   
  useEffect(() => { window.localStorage.setItem('contacts', JSON.stringify(contacts)) }, [contacts]);


  const formSubmitHandler = (name,number) => {
    const isExist = contacts.some(contact => {
      return contact.name === name
    })
    
    if (!isExist) { 
     const newContact = {
        id: nanoid(),
        name: name,
        number: number,
      }
      setContacts(prev => [...prev, newContact]);
    } else {alert(`${name} already in contacts`);
    }};

const changeFilter = evt => {
    setFilter( evt.currentTarget.value );
  };
 const getVisibleContacts = () => {
   
    const normalizedFilter = filter.toLowerCase();

   return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
 const handleDelete = id => {
   const newContacts = contacts.filter(item => item.id !== id);
    setContacts( newContacts);
  };
   
  
  const visibleContacts = getVisibleContacts();
  return (
    <>
        <div className={(styles.container, styles.border)}>
          <h1>Phonebook</h1>
          <Form onSubmit={formSubmitHandler} />
        </div>
        <div className={styles.container}>
          <h1>Contacts</h1>
          <Filter
            className={css.filter}
            value={filter}
            onChange={changeFilter}
          />
          <ContactsList
            className={styles.contactList}
            onDelete={handleDelete}
            contacts={visibleContacts}
          />
        </div>
      </>
  )
}


// class App extends Component {
//   static defaultProps = {
//     contacts: '',
//     name: '',
//   };

//   static propTypes = {};

//   state = {
//     contacts:[
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ] ,
//     name: '',
//     filter: '',
//   };

//   formSubmitHandler = (name,number) => {   
// console.log('formSubmitHandler', name, number)
//     const isExist = this.state.contacts.some(contact => {
//       return contact.name === name
//     })

//     if (!isExist) { 
//        this.setState(prev => {
//       const newContact = {
//         id: nanoid(),
//         name: name,
//         number: number,
//       }

//       return {
//         contacts: [...prev.contacts, newContact],
//       };
//     });
//     } else {alert(`${name} already in contacts`);
//     }
//   };

  
  
//   componentDidMount() {
//     const { contacts } = this.state;
//     const localContacts = JSON.parse(localStorage.getItem('contacts'))
//     if (localContacts) {
//        this.setState ({
//          contacts: localContacts,
//        })
//     }
//     document.title='goit-react-wh-04-phonebook'
//   }

//   componentDidUpdate(prevProps, prevState) { 
//     if (this.state.contacts !== prevState.contacts) { 
//      localStorage.setItem('contacts',JSON.stringify(this.state.contacts))
    
//     }
//   }
  


//   changeFilter = evt => {
//     this.setState({ filter: evt.currentTarget.value });
//   };
//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   };
//   handleDelete = id => {
//     this.setState(prev => {
//       const newContacts = prev.contacts.filter(item => item.id !== id);

//       return {
//         contacts: newContacts,
//       };
//     });
//   };

//   render() {
//     const { contacts, filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();
    
//     return (
//       <>
//         <div className={(styles.container, styles.border)}>
//           <h1>Phonebook</h1>
//           <Form onSubmit={this.formSubmitHandler} />
//         </div>
//         <div className={styles.container}>
//           <h1>Contacts</h1>
//           <Filter
//             className={css.filter}
//             value={filter}
//             onChange={this.changeFilter}
//           />
//           <ContactsList
//             className={styles.contactList}
//             onDelete={this.handleDelete}
//             contacts={visibleContacts}
//           />
//         </div>
//       </>
//     );
//   }
// }

// export default App;
