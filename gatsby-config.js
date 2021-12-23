module.exports = {
  siteMetadata: {
    description: "Personal page of Amogh Saxena",
    locale: "en",
    title: "Amogh Saxena",
    formspreeEndpoint: "https://formspree.io/f/myylaplq",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        // showThemeLogo: false,
        theme: "dark-blue",
      },
    },
  ],
}
