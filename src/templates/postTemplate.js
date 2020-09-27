import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

export default function Post({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div style={{ lineHeight: "10px" }}>
        <h2>
          <Link>{post.frontmatter.title}</Link>
        </h2>
        <span style={{ fontSize: "14px" }}>{post.frontmatter.date}</span>
      </div>
      <p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </p>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "dddd, DD/MM/YYYY")
        slug
        title
      }
    }
  }
`
