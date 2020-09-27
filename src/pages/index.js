import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import PostListItem from "../components/post-list-item"

export default function Home({ data }) {
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div style={{ marginBottom: "80px" }}>
          <PostListItem>{node}</PostListItem>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            slug
          }
          excerpt
        }
      }
    }
  }
`
