import React, {useState} from 'react';

import EnterUsername from '../components/EnterUsername';
import EnterPass from '../components/EnterPass';
import logo from '../assets/logo.png';
import { Container, Row, Col, Image } from 'react-bootstrap';


const Login = (props) => {
  const [email, setEmail] = useState(false);

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
              width="78px"
              height="24px"
              className="CURB"
              alt="CurbPay"
            />
            <span className="PAY">pay</span>
            
            {!email ? <EnterUsername continue={continueToPass} />  :<EnterPass  auth={props.auth} email={email}/>}

          </div>
        </Col>
      </Row>
    </Container>

  );
}
    

export default Login;