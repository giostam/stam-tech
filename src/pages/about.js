import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
      <div>
        <h1>About {data.site.siteMetadata.title}</h1>
        <p>
          I’m good enough, I’m smart enough, and gosh darn it, people like me!
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql `
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
