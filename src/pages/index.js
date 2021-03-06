import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { BsBookHalf, BsAward } from "react-icons/bs";

import "./../components/layout.css"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <div className="posts">
      <article>
        <header>
          <h3
            style={{
              marginBottom: rhythm(1 / 6),
            }}
          >
            <a
              href="final_paper_May_15_2019.pdf"
              aria-label="final-paper"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <BsBookHalf style={{ marginBottom: "-3px"}} className="icon"/>
              {"  "}
              Master's Research Paper - Integration of UAS Into the Airport Ecosystem
            </a>
          </h3>
        </header>
      </article>      
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const thumb = node.frontmatter.thumb || "avatar"
        const location = node.frontmatter.location 

        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 6),
                }}
              >
                <Link className="link" to={node.fields.slug}>
                  {title.slice(0,3) === "APA" ? <BsAward className="icon" /> : ""}{"  "}{title} 
                </Link>
              </h3>
              <div style={{ marginBottom: rhythm(1 / 6), }}>
                <small>
                  {node.frontmatter.date} 
                  <span 
                    style={{ color: "#989898" }}
                  >
                    {location && " / " + location}
                  </span>
                </small>
              </div> 
              
              <Image
                fluid={data[thumb].childImageSharp.fluid}
                alt={"try"}
              />
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM YYYY")
            title
            location
            description
            thumb
          }
        }
      }
    } 
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    saratoga: file(absolutePath: { regex: "/saratoga-thumb.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    srirang: file(absolutePath: { regex: "/srirang-thumb.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tumkur: file(absolutePath: { regex: "/tumkur-thumb.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bethle: file(absolutePath: { regex: "/bethle-thumb.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    coey: file(absolutePath: { regex: "/coey-thumb.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    menan: file(absolutePath: { regex: "/menan-thumb.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`