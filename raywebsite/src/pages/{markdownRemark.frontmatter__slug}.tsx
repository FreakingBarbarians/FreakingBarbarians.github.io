import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function MarkdownTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout pageTitle={frontmatter.title}>
      <div>
        <h2>{frontmatter.date}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const Head = () => <title>Bla Blar Blargh</title>

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`