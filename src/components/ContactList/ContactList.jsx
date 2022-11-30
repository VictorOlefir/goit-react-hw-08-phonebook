import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';
import { deleteContact } from 'components/redux/operations';
import { ContactListItem, ContactDeleteButton } from './ContactList.styled';
import {
  selectIsLoading,
  selectError,
  selectVisibleContacts,
} from 'components/redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectVisibleContacts);

  return (
    <>
      {isLoading && <Loader />}
      {error && <div>Something went wrong...</div>}
      {!isLoading && !error && (
        <ul>
          {contacts.map(({ id, name, number }) => (
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
      )}
    </>
  );
};
