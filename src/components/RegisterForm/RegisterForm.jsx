import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';


import { Button, Input, FormControl, FormLabel } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <FormControl>
        <FormLabel>
          Username
          <Input
          id='name'
            focusBorderColor="teal"
            colorScheme="teal"
            type="text"
            name="name"
            placeholder="Enter username"
            autoComplete='on'
          />
        </FormLabel>
        <FormLabel>
          Email
          <Input
          id='email'
            focusBorderColor="teal"
            colorScheme="teal"
            type="email"
            name="email"
            placeholder="Enter email"
            autoComplete='on'
          />
        </FormLabel>
        <FormLabel>
          Password
          <Input
          id='password'
            focusBorderColor="teal"
            colorScheme="teal"
            type="password"
            name="password"
            placeholder="Enter password"
            autoComplete='on'
          />
        </FormLabel>
        <Button colorScheme="teal" type="submit">
          Register
        </Button>
      </FormControl>
    </form>
  );
};
