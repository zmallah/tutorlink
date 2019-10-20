import React, {useState} from 'react';

import EnterName from '../components/EnterName';
import EnterUsername from '../components/EnterUsername';
import EnterPass from '../components/EnterPass';
import logo from '../assets/logo.png';

import { Container, Row, Col, Image } from 'react-bootstrap';

const Login = (props) => {
  const [email, setEmail] = useState(false);
  const {loggedIn, setLoggedIn} = props;

  const continueToPass = (email) => {
    setEmail(email);
  }

  return ( 
    <Container className="login-BackgroundImage">
      <Row>
        <Col className="login-BackgroundImage"><div className="loginBackground"></div></Col>
        <Col className="loginDiv" >
          <div className="loginContent">
            <Image
              src={logo}
              width="270px"
              height="80px"
              className="logo"
              alt="Tutorlink"
            />
            
            {

              <EnterName/>

            }
            
          </div>
        </Col>
      </Row>
    </Container>

  );
}
    

export default Login;