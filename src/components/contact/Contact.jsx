import PropTypes from 'prop-types';
import css from './contact.module.css';
const Contact = ({ data, onDelete }) => {
  return (
    <li>
      <span className={css.name}>{data.name}:</span>
      <span className={css.number}>{data.number}</span>
      <button
        id={data.id}
        onClick={e => onDelete(data.id)}
        type="button"
        className=""
      >
        Delete
      </button>
    </li>
  );
};
Contact.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
  }),
};
export default Contact;
