import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import PostMetadata from "../components/post-meta"

export default function Post({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <PostMetadata
        title={post.frontmatter.title}
        date={post.frontmatter.date}
      />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
