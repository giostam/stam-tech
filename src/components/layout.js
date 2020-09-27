import React from "react"
import Container from "./container"
import Header from "./header"
import layoutStyles from "./layout.module.css"

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.layout}>
      <Header></Header>
      <Container>{children}</Container>
    </div>
  )
}
