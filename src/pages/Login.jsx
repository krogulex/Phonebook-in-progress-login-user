import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { NavLink } from 'react-router-dom';

export default function Login() {
  return (
    <HelmetProvider>
      <div className='page-content'>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LoginForm />
        <div className='register-acc'><p>Dont' have an account? <NavLink to="/register">Register</NavLink></p></div>
      </div>
    </HelmetProvider>
  );
}
