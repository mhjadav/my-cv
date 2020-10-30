module.exports ={
    siteMetadata: {
        title: `Full Stack Developer - "Javascript, HTML, CSS, React, Redux, GatsbyJS, NodeJS"`,
        description: `Mahipat has 7+ years experience as a full-stack developer and has worked across diverse fields such as e-commerce, travel, pharma and collaboration domains. Proficient in technologies such as React, Javascript, HTML/CSS, NodeJS and AngularJS, his passion for frontend development allows him to analyse, design and develop beautiful and functional user interfaces.`,
        author: `Mahipatsinh Jadav`,
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