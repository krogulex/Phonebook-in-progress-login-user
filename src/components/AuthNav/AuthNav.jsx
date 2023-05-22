import { NavLink } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">
        <Button colorScheme="teal">Register</Button>{' '}
      </NavLink>
      <NavLink to="/login">
        <Button colorScheme="teal">Log In</Button>
      </NavLink>
    </div>
  );
};
