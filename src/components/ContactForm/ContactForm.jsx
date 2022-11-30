import { useDispatch, useSelector } from 'react-redux';

import { selectContacts } from 'components/redux/selectors';
import { addContact } from 'components/redux/operations';
import { Box } from 'components/Box';
import { LabelInput, FormInput, SubmitButton } from './ContactForm.styled';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const { name, number } = form;
    const contact = {
      name: name.value,
      number: number.value,
    };

    const duplicateContact = contacts.find(
      contact => contact.name.toLowerCase() === name.value.toLowerCase()
    );

    if (duplicateContact)
      return window.alert(`${name.value} is already in contacts`);

    dispatch(addContact(contact));
    form.reset();
  };

  return (
    <Box
      border="normal"
      p={3}
      mb={5}
      mt={3}
      display="flex"
      flexDirection="column"
      onSubmit={handleSubmit}
      as="form"
    >
      <LabelInput htmlFor="name">Name</LabelInput>
      <FormInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <LabelInput htmlFor="number">Number</LabelInput>
      <FormInput
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <SubmitButton type="submit">Add contact</SubmitButton>
    </Box>
  );
};
