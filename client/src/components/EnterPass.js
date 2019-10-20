import React, { useState } from 'react';
import { Form, ButtonToolbar, Button } from 'react-bootstrap';

import { Redirect } from 'react-router-dom';

const EnterPass = (props) => {
  const [password, setPassword] = useState(false);
  const {loggedIn, setLoggedIn} = props;

  const handleChange = (event) => {
    setPassword(event.target.value);
  }

  const validateEmail = (email) => {
    const expression = /\S+@\S+/
    return expression.test(email.toLowerCase())
  }

  const validatePassword = (password) => {
    return password === "" ? false : true;
  }

  const login = (event) => {
    event.preventDefault();
    if (!validatePassword(password)) {
      alert("Unable to continue without entering a valid password")
    } else {
      setLoggedIn(true);
      //login(props.email, password);
    }
  }
  
  const changePassword = () => {
    if (!validateEmail(props.email)) {
      alert("Unable to continue without entering a valid email");
    } else {
      props.auth.changePassword(props.email);
    }
  }

  if(loggedIn){
    return <Redirect to="/dashboard"/>  
  
  }

  return (
    <Form className="loginForm">
      <Form.Group>
        <Form.Label className="Log-In">LOG IN</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={handleChange}
          autoFocus
        />
      </Form.Group>

      <ButtonToolbar>
        <Button className="LoginButton align-center" type="submit" onClick={login.bind(this)}>
          Log In
        </Button>
        <Button className="Forgot-Password" variant="link" onClick={changePassword.bind(this)}>
          Forgot Password?
          </Button>
      </ButtonToolbar>
    </Form>

  );

}

export default EnterPass;