import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

import { MdPhoneIphone } from 'react-icons/md';
import { BiSolidContact } from 'react-icons/bi';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';

function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));

  return (
    <li className={styles.contactStyle}>
      <ul>
        <li>
          <BiSolidContact />
          <p>Name: {name}</p>
        </li>
        <li>
          <MdPhoneIphone />
          <p>Number: {number}</p>
        </li>
      </ul>
      <button className={styles.deleteButton} onClick={() => onDelete()}>
        Delete
      </button>
    </li>
  );
}
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
