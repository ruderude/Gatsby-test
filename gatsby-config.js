module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
    description: `文字文字文字moji`,
    hogehoge: `fugafuga`,
    kunshi: {
      name: '訓志',
      age: 42,
      job: "エンジニア"
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}