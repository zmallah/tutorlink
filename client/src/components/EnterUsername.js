import React from 'react';

import ReactDOM from 'react-dom';

import {
  Form,
  Button,
} from 'react-bootstrap';

class EnterUsername extends React.Component {

  validateEmail(email){
    const expression = /\S+@\S+/
    return expression.test(email.toLowerCase())
  }

  continue(event) {
    event.preventDefault();
    var email = ReactDOM.findDOMNode(this.refs.email).value;
    if(!this.validateEmail(email)){
      alert("Unable to continue without entering a valid email");
    }else{
      this.props.continue(email);
    }
  }

  render() {
    return (
        <Form className="loginForm">
            <Form.Group>
            <Form.Label className="Log-In">LOG IN</Form.Label>
            <Form.Control
                type="email"
                ref="email"
                placeholder="Email"
                onChange={this.handleChange}
                autoFocus
            />
            </Form.Group>
            <Button className="LoginButton" type="submit" onClick={this.continue.bind(this)}>
                Continue
            </Button>
        </Form>
    );
  }
}

export default EnterUsername;