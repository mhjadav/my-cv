import React from 'react';
import { Card, Col, ProgressBar,  } from 'react-bootstrap';

const Langauges = ({ langaugesList }) => (
    <>
        <Card.Title>
            Langauges
        </Card.Title>
        {langaugesList.map(langauge => (
            <Col>
                <Card.Text>
                    {langauge}
                </Card.Text>
            </Col>
        ))}
    </>
)

export default Langauges;