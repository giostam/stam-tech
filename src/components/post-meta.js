import { Link } from "gatsby"
import React from "react"
import postMetaStyles from "./post-meta.module.css"

export default function PostMetadata(props) {
  return (
    <div>
      <div className={postMetaStyles.postTitle}>
          <Link to={props.slug}>{props.title}</Link>
      </div>
      <span className={postMetaStyles.postDate}>{props.date}</span>
    </div>
  )
}
