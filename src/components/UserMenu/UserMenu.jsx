import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'redux/auth/useAuth';

import { Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className='user-menu'>
      <p>Welcome, {user.name}</p>
      <NavLink to="/">
              <Button colorScheme='teal' type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
      </NavLink>

    </div>
  );
};
