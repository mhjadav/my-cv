import React from 'react';
import { Card, Col, ProgressBar } from 'react-bootstrap';

const Skills = ({ skillsList }) => (
    <>
        <Card.Title>
            Skills
        </Card.Title>
        {skillsList.map(skill => (
            <Col>
                <Card.Text>
                    {skill}
                </Card.Text>
            </Col>
        ))}
    </>
)

export default Skills;