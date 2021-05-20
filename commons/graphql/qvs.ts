export const getBarsHomePageQueryVariables = (sort: string, where: object) => (
  {
    query: `
    query($sort: String, $where: JSON) {
      categories(sort: $sort) {
        name
        description
        bars(where: $where) {
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
    }`,
    variables: {
      sort,
      where
    }
  }
)

export const getBarById = (id: number) => ({
    query: `
    query($id: ID!) {
      bar(id: $id) {
        name
        description
        contents
        images {
          name
          formats
        }
        drinks {
          id
          name
          ingredients
          images {
            formats
          }
        }
      }
    }
    `,
    variables: {
        id,
    },
});
