import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';

import { Button, Input} from '@chakra-ui/react';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const oldContacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const contact = {
      name: form.elements[0].value,
      number: form.elements[1].value,
    };

    if (
      oldContacts.find(
        oldContact =>
          oldContact.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      return alert(`${contact.name} is already in contacts`);
    }

    dispatch(addContact(contact));
    form.reset();
  };

  return (
    <div>
      <h2>Add new contact</h2>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          id="name"
          type="text"
          placeholder="Enter name"
          focusBorderColor="teal"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <div>
          <Input
            id="number"
            type="tel"
            placeholder="Enter phone number"
            focusBorderColor="teal"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <Button colorScheme='teal' className="add-button" type="submit">
          Add contact
        </Button>
      </form>
    </div>
  );
};
