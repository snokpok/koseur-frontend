export const getBarsHomePage =
    `
    query {
      categories {
        name
        description
        bars {
          name
          logo {
            formats
          }
          description
          images {
            formats
            alternativeText
            size
          }
        }
      }
    }
    `
