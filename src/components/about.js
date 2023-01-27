import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const About = ({ "about": { name, description, location, email, phoneNumber, status, skype, website }}) => (
    <>
    <Card.Body>
        <Card.Title>
           <b>{name}</b>
        </Card.Title>
        <Card.Subtitle>
            {status}
        </Card.Subtitle>
        <Card.Text>
            {description}
        </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
        <ListGroup.Item>
            {location}
        </ListGroup.Item>
        <ListGroup.Item>
        <a href={`mailto:${email}`}>{email}</a>
        </ListGroup.Item>
        <ListGroup.Item>
        <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        </ListGroup.Item>
        <ListGroup.Item>
        <a href={`${website}`}>{website}</a>
        </ListGroup.Item>
        <ListGroup.Item>
         Skype: <a href={`Skype:${skype}`}>{skype}</a>
        </ListGroup.Item>
    </ListGroup>
    </>
)

export default About;