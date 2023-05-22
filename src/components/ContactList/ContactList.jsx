import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  selectContacts,
  selectFilteredContacts,
} from 'redux/contacts/selectors';

import { Button } from '@chakra-ui/react';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <div>
      {contacts.length === 0 ? (
        <p>No contacts yet</p>
      ) : filteredContacts.length === 0 ? (
        <p>No contacts found</p>
      ) : (
        filteredContacts.map(element => {
          return (
            <div key={element.id} id={element.id} className="contact-item">
              <span>&#9990;</span>
              <p>
                <span>{element.name}: </span>
                {element.phone}
              </p>
              <Button
                colorScheme="teal"
                className="contact-delete"
                onClick={() => handleDelete(element.id)}
              >
                Delete
              </Button>
            </div>
          );
        })
      )}
    </div>
  );
};
