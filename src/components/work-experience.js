import React from  'react';
import { Card, Row, Col } from 'react-bootstrap';

const Experience = ({ experienceList }) => (
    <>
        <h2 class="mt-3">
            <i class="fa fa-asterisk fa-fw mr-1"></i>
            Work Experience
        </h2>
        <Row>
        {experienceList.map((experience, index) => (
           <Col xs={12} md={6} className="experience-col">
            <Card>
                <Card.Body>
                    <Card.Title>
                        {`${experience.title} / ${experience.company}`}
                    </Card.Title>
                    <Card.Subtitle>
                        {`${experience.technology}`}
                    </Card.Subtitle>
                    <Card.Text class="card-text text-color-black">
                    <h6 class="text-color">
                        <i class="fa fa-calendar fa-fw mr-2 mt-2"></i>
                        {experience.from} - {experience.to === 'Current' ? <button type="button"
                        class="btn btn-primary btn-sm">{experience.to}</button> : experience.to}</h6>
                        <div dangerouslySetInnerHTML={{ __html: experience.description}}></div>
                    </Card.Text>
                </Card.Body>
            </Card>
           </Col>
         ))}
         </Row>
    </>
)

export default Experience;