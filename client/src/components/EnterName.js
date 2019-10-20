import React from 'react';

import ReactDOM from 'react-dom';
import useState from 'react';
import {
  Form,
  Button,
  ButtonToolbar
} from 'react-bootstrap';

class EnterName extends React.Component {

  render() {


    return (
        <Form className="regForm">
            <Form.Group>
            <Form.Label className="Register">Register</Form.Label>
            <Form.Control
                type="name"
                ref="name"
                placeholder="Your Name"
                onChange={this.handleChange}
                autoFocus
            />
            <Form.Control
                type="email"
                ref="email"
                placeholder="Email"
                onChange={this.handleChange}
                autoFocus
            />
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
              autoFocus
            />
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              onChange={this.handleChange}
              autoFocus
            />

            <ButtonToolbar>
              <Button className="regForm align-center" type="submit">
                Register 
              </Button>
            </ButtonToolbar>

            </Form.Group>
        </Form>
    );
  }
}

export default EnterName;