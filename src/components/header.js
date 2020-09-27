import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.css"

const ListLink = props => (
  <li style={{ display: "inline" }}>
    <Link style={{ padding: "10px" }} to={props.to}>{props.children}</Link>
  </li>
)

export default function Header() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div className={headerStyles.header}>
        <h1>{data.site.siteMetadata.title}</h1>
        <ul>
          <ListLink to="/">Home</ListLink>
          <li style={{ display: "inline" }}>#</li>
          <ListLink to="/about/">About</ListLink>
          <li style={{ display: "inline" }}>#</li>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
    </div>
  )
}
