import React from "react"
import { Link } from "gatsby"
import './layout.css';

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h3
        style={{
          ...scale(1.25),
          marginBottom: rhythm(1.25),
          marginTop: 0,
          fontFamily: `Montserrat, sans-serif`,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `#383b3e`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  } else {
    header = (
      <h4
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
          letterSpacing: 0.5,
          textTransform: "none"
        }}
      >
        <Link
          style={{
            color: `#383b3e`,
          }}
          className="headerLink"
          to={`/`}
        >
          <span style={{ color: '#007acc' }}>{`<`} {" "}</span>{title}
        </Link>
      </h4>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.25)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        <small>© {new Date().getFullYear()} All rights reserved. <a href="https://www.urbplankarthik.blog">urbplankarthik.blog</a>
        </small>
      </footer>
    </div>
  )
}

export default Layout
