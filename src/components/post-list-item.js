import React from "react"
import PostMetadata from "./post-meta"

export default function PostListItem({ children }) {
  return (
    <div>
      <PostMetadata
        title={children.frontmatter.title}
        slug={children.frontmatter.slug}
        date={children.frontmatter.date}
      />
      <p>{children.excerpt}</p>
    </div>
  )
}
