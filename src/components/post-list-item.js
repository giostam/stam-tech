import { Link } from "gatsby"
import React from "react"

export default function PostListItem({ children }) {
  return (
    <div>
      <div style={{ lineHeight: "10px" }}>
        <h2>
          <Link to={children.frontmatter.slug}>{children.frontmatter.title}</Link>
        </h2>
        <span style={{ fontSize: "14px" }}>{children.frontmatter.date}</span>
      </div>
      <p>{children.excerpt}</p>
    </div>
  )
}
