import React from 'react';
import { Card } from 'react-bootstrap';

const SocialLinks = ({ socialList }) => (
    socialList.map(social => (
        <Card.Link href={social.url}>
            <i class={`fa fa-${social.name}`}></i>
        </Card.Link>
    ))
)

export default SocialLinks;