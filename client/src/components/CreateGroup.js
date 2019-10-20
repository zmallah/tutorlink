import React, { useState } from "react";

import { Form, Button, Modal, Row, Container } from "react-bootstrap";

const CreateGroup = (props) => {
    const {showCreate, setShowCreate} = props;

    const handleClose = () => setShowCreate(false);
    const handleShow = () => setShowCreate(true);
    const group = {
        "tutor": "Mr. John Smith",
        "subject": "Physics",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content."
    };
    

    return (
            <Modal show={showCreate} onHide={handleClose} size="lg" className="CreateGroup">
                <Modal.Header closeButton>
                    <Modal.Title>Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <h3>Subject</h3>
                            <Form.Control autoFocus />
                        </Row>
                        <Row>
                            <h3>Entry Cost</h3>
                            <Form.Control autoFocus />
                        </Row>
                        <Row>
                            <h3>Details</h3>
                            <Form.Control autoFocus multiple as="textarea"/>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">
                        Create
                     </Button>
                </Modal.Footer>
            </Modal>
    );
};

export default CreateGroup;
