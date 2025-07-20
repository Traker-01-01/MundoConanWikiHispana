import React from "react"
import { graphql } from "gatsby"

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Entradas del Blog</h1>
      {posts.map(post => (
        <article key={post.id} style={{ marginBottom: "2rem" }}>
          <h2>{post.frontmatter.title}</h2>
          <p><strong>Fecha:</strong> {post.frontmatter.date}</p>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </main>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "DD/MM/YYYY")
        }
        excerpt
      }
    }
  }
`

export default BlogPage
