import * as React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import AggregateDisplay from '../components/aggregatedisplay'

const BlogPage = ( {data} ) => {
    console.log(data)
    // const { markdownRemark } = data // data.markdownRemark holds your post data
    // const { frontmatter, html } = markdownRemark
    return (
        <Layout pageTitle="Blargh">
            {
                data.allMarkdownRemark.nodes.map((node: any) => 
                    <AggregateDisplay key={node.frontmatter.slug} title={node.frontmatter.title} date={node.frontmatter.date} slug={node.frontmatter.slug} html={node.html}></AggregateDisplay>
                )
            }
        </Layout>
    )
}

export const pageQuery = graphql`
query MyQuery {
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        date
        slug
        title
      }
      html
    }
  }
}
`

export const Head = () => <title>Blargh - not quite a blog</title>

export default BlogPage