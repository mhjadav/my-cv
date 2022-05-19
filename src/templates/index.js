import React from 'react';
import { Col } from 'react-bootstrap';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Sidebar from '../components/sidebar';
import Experience from '../components/work-experience';
import Education from '../components/education';

export const query = graphql`
    query {
        site {
          siteMetadata {
            author
            description
            siteUrl
            social {
              name
              url
            }
            title
          }
        }
        resume {
            id
            profilePic{
                childImageSharp{
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
            }
            favicon{
              publicURL
            }
            skills
            langauges
            experience {
              company
              technology
              description
              from
              title
              to
            }
            education {
              college
              description
              from
              title
              to
            }
            about {
              description
              email
              location
              name
              phoneNumber
              website
              status
              skype
            }
          }        
    }
  `

const EventTemplate = ({ data: { site: { siteMetadata }, resume: { favicon, profilePic, skills, social, langauges, experience, education, about, metaInfo } } }) => (
    <Layout siteMetadata={{...siteMetadata, ...{favicon: favicon.publicURL}}}>
        <Col xs={12} md={3}>
           <Sidebar profileImage={profilePic} about={about} skills={skills} langauges={langauges} social={siteMetadata.social} />
        </Col>
        <Col xs={12} md={9}>
            <Experience experienceList={experience} />
            <Education educationList={education} />
            <br />
        </Col>
    </Layout>
);

export default EventTemplate;