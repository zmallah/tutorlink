import React, { useState } from 'react';
import { Form, ButtonToolbar, Button } from 'react-bootstrap';

import { Redirect } from 'react-router-dom';

const API_URL = 'http://localhost:5000'

const EnterPass = (props) => {
  const [password, setPassword] = useState(false);
  const {loggedIn, setLoggedIn, setUser} = props;

  const handleChange = (event) => {
    setPassword(event.target.value);
  }

  const validateEmail = (email) => {
    return true;
  }

  const validatePassword = (password) => {
    return password === "" ? false : true;
  }

  const login = (event) => {
    event.preventDefault();

      fetch(API_URL + '/api/users/verifyLogin', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: props.email,
          password: password
        }),
      }).then((res) => res.json()).then(resJson => {
        setLoggedIn(true);
        setUser(resJson.user);
      })
      
      //login(props.email, password);
  }
  
  const changePassword = () => {
    if (!validateEmail(props.email)) {
      alert("Unable to continue without entering a valid email");
    } else {
      props.auth.changePassword(props.email);
    }
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