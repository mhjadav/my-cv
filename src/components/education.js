import React from "react";
import { Card, ListGroup } from 'react-bootstrap';

const Education = ({ educationList }) => (
<Card className="sidebar-card education">
    <Card.Body>
      <Card.Title>
        <b>Education</b>
        </Card.Title>
    </Card.Body>

    <ListGroup className="list-group-flush">
      {educationList.map((education, index) => (
        <ListGroup.Item>
          <Card className="experience-card education-card">
            <Card.Body>
              <Card.Title>
                {`${education.title} / ${education.college}`}
              </Card.Title>
              <h6 class="text-color">
                <i class="fa fa-calendar fa-fw mr-2"></i>
                {education.from} -{" "}
                {education.to === "Current" ? (
                  <button type="button" class="btn btn-primary btn-sm">
                    {education.to}
                  </button>
                ) : (
                  education.to
                )}
              </h6>
              <Card.Text class="card-text text-color-black">
                {education.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </ListGroup.Item>
      ))}
    </ListGroup>
  </Card>
);

export default Education;
