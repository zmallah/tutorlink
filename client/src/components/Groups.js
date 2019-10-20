import React, {useState, useEffect} from 'react';

import {  Container,  Row } from 'react-bootstrap';
import TutorPreview from './TutorPreview';

const API_URL = 'http://localhost:5000'

const Groups = (props) => {

    const [groups, setGroups] = useState();
    const [tP, setTP] = useState();

    const {user} = props;
    useEffect(() => {
       
        fetch(API_URL + '/api/Groups/find', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            }),
          }).then((res) => res.json()).then(resJson => {
            var tutorPreviews = [];
            Object.keys(resJson).forEach(function(group) {
                tutorPreviews.push(<TutorPreview group={resJson[group]} user={user}/>)
            });
            setTP(tutorPreviews);
          })
    
      }, []);


    return (
        <Container>
            <Row>
                {tP}
            </Row>
        </Container>
    );

}

export default Groups;