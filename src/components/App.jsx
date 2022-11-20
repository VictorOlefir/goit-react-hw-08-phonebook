import { Box } from './Box';
import { Form } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <Box
      width="30%"
      mt={3}
      mb={3}
      ml={6}
      p={4}
      bg="white"
      borderRadius="normal"
      boxShadow="card"
    >
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Box>
  );
};
