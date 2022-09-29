import Contact from '../contact';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './contactList.module.css';
const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <Contact key={contact.id} onDelete={onDelete} data={contact} />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      phone: PropTypes.string,
    }),
  ),
  onDelete: PropTypes.func,
};

export default ContactsList;
