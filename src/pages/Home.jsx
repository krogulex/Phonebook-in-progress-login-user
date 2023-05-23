import { NavLink } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export default function Home() {
    return (
      <div className="page-content">
        <h1>
          Manage your Contacts!{' '}
          <span role="img" aria-label="Greeting icon">
          📖
          </span>
        </h1>
        <NavLink to="/register" className='home-button'>
        <Button colorScheme="teal">Get started</Button>{' '}
      </NavLink>
      </div>
    );
  }