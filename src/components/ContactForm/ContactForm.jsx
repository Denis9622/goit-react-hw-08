import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import iziToast from 'izitoast';
import { useId } from 'react';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import 'izitoast/dist/css/iziToast.min.css';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const nameFieldId = useId();
  const numberFieldId = useId();

  const submitHandler = ({ name, number }, { resetForm }) => {
    const correctName = name.trim();

    if (contacts.some(contact => contact.name === correctName)) {
      iziToast.error({
        title: 'Error',
        message: `${correctName} is already in contact!`,
        position: 'topLeft',
      });
      return;
    }

    dispatch(addContact({ name: correctName, number: number }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, 'Must be at least 3 characters')
          .max(50, 'Must be 50 characters or less')
          .required('Required'),
        number: Yup.string()
          .matches(/^[0-9]+$/, 'Must be only digits')
          .min(3, 'Must be at least 3 characters')
          .max(50, 'Must be 50 characters or less')
          .required('Required'),
      })}
      onSubmit={submitHandler}
    >
      <Form className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage
            className={styles.errorMessage}
            name="name"
            component="span"
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field type="tel" name="number" id={numberFieldId} />
          <ErrorMessage
            className={styles.errorMessage}
            name="number"
            component="span"
          />
        </div>

        <button className={styles.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
