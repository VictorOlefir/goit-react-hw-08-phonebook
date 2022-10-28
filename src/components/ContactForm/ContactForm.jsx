import {useState} from "react";
import PropTypes from 'prop-types';
import { Box } from "components/Box";
import { LabelInput, FormInput, SubmitButton } from "./ContactForm.styled";

export const Form = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const handleChange = event => {
       
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "number":
        setNumber(event.target.value);
        break;
      default:
        return;
    }
   
  }

  const reset = () => {
    setName('');
    setNumber('');
  }

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({name, number});
    reset();
  }

       
  return (
        <Box border='normal' p={3} mb={5} mt={3} display='flex'
          flexDirection='column' onSubmit={handleSubmit} as='form'>
          <LabelInput htmlFor="name">Name</LabelInput>
            <FormInput
              type="text"
              name="name"
              value={name}              
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChange}
          />
          <LabelInput htmlFor="number">Number</LabelInput>
            <FormInput
              type="tel"
              name="number"
              value={number}            
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChange}
          />
          <SubmitButton type="submit">Add contact</SubmitButton>
        </Box>      
    
    )
  
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    
}

