import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Helmet from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/index.css';

const Layout = ({ children, siteMetadata }) => (
    <>
        <Helmet
            title={siteMetadata.title}
            meta={[
                { name: 'description', content: siteMetadata.description },
                { name: 'author', content: siteMetadata.author },
            ]}
            link={[
                {
                    rel: 'icon', type: 'image/png', sizes: '32x32', href: siteMetadata.favicon,
                },
                { rel: 'canonical', href: siteMetadata.siteUrl },
            ]}
        >
        </Helmet>
        <Container fluid={true}>
            <Row>
                {children}
            </Row>
        </Container>
    </>
)

export default Layout;