export const getBarsHomePageQueryVariables = (sort: string) => ({
    query: `
query($sort: String) {
  categories(sort: $sort) {
    name
    description
    bars {
      id
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
    },
});

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
          characteristics
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
