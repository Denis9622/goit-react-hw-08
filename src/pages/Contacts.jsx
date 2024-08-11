import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import { selectContacts, selectIsLoading } from "../redux/contacts/selectors";

import DocumentTitle from "../components/DocumentTitle";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactForm from "../components/ContactForm/ContactForm";
import SectionLoader from "../components/loader/Loader";
import ErrorMessage from "../components/errorMessage/ErrorMessage";

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your contacts</DocumentTitle>
      <ContactForm />
      <SearchBox />

      {Array.isArray(contacts) &&
        (contacts.length > 0 ? (
          <ContactList />
        ) : (
          <ErrorMessage message={"The contact list is empty"} />
        ))}
      {isLoading && <SectionLoader />}
    </>
  );
};

export default Contacts;
