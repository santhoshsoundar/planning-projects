/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FaLinkedin, FaUserGraduate } from "react-icons/fa"

import { rhythm } from "../utils/typography"
import "./layout.css"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            linked
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p style={{
            fontSize: "14px"
         }}        
      >
        Written by <strong>{author.name}</strong> {author.summary}
        {` `}
        <a 
          href={`https://www.linkedin.com/in/${social.linked}`}
          aria-label="linkedin social"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
        <FaLinkedin style={{ marginBottom: "-1px"}} className="icon"/> Connect with him on LinkedIn 
        </a>
        {" | "}
        <a
          href="Karthik_Resume.pdf"
          aria-label="final-paper"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          <FaUserGraduate className="icon" /> Resume
        </a>
      </p>
    </div>
  )
}

export default Bio
