import React, { useState } from "react";

import { Card, Button, Modal, Row, Container } from "react-bootstrap";

const API_URL = 'http://localhost:5000'

const TutorPreview = props => {
    const [show, setShow] = useState(false);
    const {group, user} = props;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(group);

    const register = () => {

        fetch(API_URL + '/api/Groups/update', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "_id": group._id,
                "user": user
            }),
          }).then((res) => res.json()).then(resJson => {
            alert("You're in!");
          })
    
    }

    return (
        <>
            <Card style={{ width: "16rem", margin: "5px" }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>{group.name}</Card.Title>
                    <Card.Subtitle>{group.subject}</Card.Subtitle>
                    <Card.Text>
                        {group.description ? group.description.substring(0, 80) + "..." : ""}
                    </Card.Text>
                    <Button variant="primary" onClick={handleShow}>
                        Details
                    </Button>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <h3>Tutor</h3>
                            <p>{group.tutor}</p>
                        </Row>
                        <Row>
                            <h3>Subject</h3>
                            <p>{group.subject}</p>
                        </Row>
                        <Row>
                            <h3>Entry Cost</h3>
                            <p>{group.cost}</p>
                        </Row>
                        <Row>
                            <h3>Details</h3>
                            <p>{group.description}</p>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={register}>
                        Register
                     </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default TutorPreview;
