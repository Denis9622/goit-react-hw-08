import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/filters/selectors';
import styles from './ContactList.module.css';

import Contact from '../Contact/Contact';

function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {visibleContacts.length > 0 ? (
        <ul className={styles.ul}>
          {visibleContacts.map(contact => (
            <Contact key={contact.id} {...contact} />
          ))}
        </ul>
      ) : (
        <p>Your phonebook is empty!</p>
      )}
    </>
  );
}

export default ContactList;
