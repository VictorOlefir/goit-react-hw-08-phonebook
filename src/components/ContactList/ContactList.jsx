
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../redux/selectors';
import { deleteContact } from 'components/redux/contactsSlice';
import { ContactListItem, ContactDeleteButton } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContact = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const visibleContact = getVisibleContact();

  return (
    <ul>
      {visibleContact.map(({ id, name, number }) => (
        <ContactListItem key={id}>
          <p>{`${name}: ${number}`}</p>
          <ContactDeleteButton
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </ContactDeleteButton>
        </ContactListItem>
      ))}
    </ul>
  );
};

