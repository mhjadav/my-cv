module.exports ={
    siteMetadata: {
        title: `Freelance Software Developer - "Javascript, HTML, CSS, ReactJS, Redux, GatsbyJS, NodeJS"`,
        description: `With 7+ years of experience as a developer and worked across diverse fields such as e-commerce, travel, pharma and collaboration domains. Proficient in technologies such as React, Javascript, HTML/CSS, NodeJS and AngularJS, my passion for frontend development allows me to analyze and develop beautiful, fast and functional user interfaces.`,
        author: `Mahipat Jadav`,
        siteUrl: "https://cv.mojaave.com",
        social: [
          {
            name: `twitter`,
            url: `https://twitter.com/mhjadav`,
          },
          {
            name: `github`,
            url: `https://github.com/mhjadav`,
          },
          {
            name: `linkedin`,
            url: `https://linkedin.com/in/mhjadav`,
          },
        ],
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: 'data'
            }
        },
        {
            resolve: 'gatsby-transformer-json',
            options: {
                typeName: 'Resume'
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-offline'
    ]
}