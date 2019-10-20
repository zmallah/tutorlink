import React from 'react';

import { Card, Container, Col, Row } from 'react-bootstrap';
import TutorPreview from './TutorPreview';

const Groups = (props) => {
    return (
        <Container>
            <Row>
            <Col md><TutorPreview/></Col>
            <Col md><TutorPreview/></Col>
            <Col md><TutorPreview/></Col>
            <Col md><TutorPreview/></Col>
            <Col md><TutorPreview/></Col>
            <Col md><TutorPreview/></Col>
            <Col md><TutorPreview/></Col>
            <Col md><TutorPreview/></Col>
            <Col md><TutorPreview/></Col>
            </Row>
        </Container>
    );

}

export default Groups;