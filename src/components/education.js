import React from  'react';
import { Card, Row, Col } from 'react-bootstrap';

const Education = ({ educationList }) => (
    <>
        <h2 class="mt-3">
            <i class="fa fa-asterisk fa-fw mr-1"></i>
            Education
        </h2>
        <Row>
        {educationList.map((education, index) => (
           <Col xs={12} md={6} className="experience-col">
            <Card className="experience-card">
                <Card.Body>
                <Card.Title>
                {`${education.title} / ${education.college}`}
                </Card.Title>
                <h6 class="text-color">
                    <i class="fa fa-calendar fa-fw mr-2"></i>
                    {education.from} - {education.to === 'Current' ? <button type="button"
                    class="btn btn-primary btn-sm">{education.to}</button> : education.to}</h6>
                <Card.Text class="card-text text-color-black">
                    {education.description}
                </Card.Text>
                </Card.Body>
            </Card>
           </Col>
         ))}
         </Row>
    </>
)

export default Education;