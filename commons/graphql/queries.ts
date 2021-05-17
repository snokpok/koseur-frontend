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

export function getBarById(id: number) {
    return `
    query {
        bar(id: ${id}) {
            name
            description
            images {
                formats
            }
        }
    }
    `
}
