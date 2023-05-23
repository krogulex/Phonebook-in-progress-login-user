import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { NavLink } from 'react-router-dom';

export default function Register() {
  return (
    <HelmetProvider>
      <div className='page-content'>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegisterForm />
        <div className='register-acc'><p>Already have an account? <NavLink to="/login">Login</NavLink></p></div>
      </div>
    </HelmetProvider>
  );
}
