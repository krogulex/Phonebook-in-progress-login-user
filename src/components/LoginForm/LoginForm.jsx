import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import { Button, Input, FormControl, FormLabel } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <FormControl>
        {' '}
        <FormLabel>
          Email
          <Input id='email' type="email" name="email" autoComplete='on' />
          </FormLabel>
          <FormLabel>
          Password
          <Input id='password' type="password" name="password" autoComplete='on' />
          </FormLabel>
        <Button colorScheme="teal" type="submit">
          Log In
        </Button>
      </FormControl>
    </form>
  );
};
