import { NavLink } from 'react-router-dom';
import { useAuth } from 'redux/auth/useAuth';

import { Button } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">
        <Button colorScheme="teal">Home</Button>
      </NavLink>
      {isLoggedIn && <NavLink to="/contacts"><Button className='active' colorScheme="brand.600">Contacts</Button></NavLink>}
    </nav>
  );
};
