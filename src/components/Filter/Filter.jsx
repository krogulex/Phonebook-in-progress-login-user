import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/filterSlice';

import { Input} from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const filterInput = event.target.value;

    dispatch(filterContacts(filterInput));
  };

  return (
    <div>
      <h3>Find contacts by name</h3>
      <form>
      <Input
        maxWidth="47%"
        focusBorderColor="teal"
        onChange={handleFilterChange}
        type="text"
        placeholder="Enter name"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
      </form>
    </div>
  );
};
