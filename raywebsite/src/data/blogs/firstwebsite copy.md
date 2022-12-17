---
slug: "/blog-my-first-website"
date: "2022-12-16"
title: "Building a first website"
---

### Building a website

is as hard as you make it? I could have used square space or that wordpress thingy but I wanted to learn something a bit more low level. <br></br>

I followed this tutorial https://reactjs.org/tutorial/tutorial.html and was able to make some sort of tic tac toe game in browser. Pretty neat. <br></br>

From there a friend of mine suggested that I try out Gatsby and that's what this current site is built off of. All I really wanted was a site where I could convert markdown into html kind of automagically and format it into a nice page. Gatsby lets me do all this with some extra work so I was pretty happy with that. <br></br>

Some useful links to accomplish this
- https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/
    - Transforms markdown into html
- https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/
    - Lets gatsby see stuff in the filesystem. Important for finding the markdowns
- https://www.gatsbyjs.com/docs/graphql/
    - Some sort of querying language, I use it to query all the markdown source data

Using these three things I can automatically create web pages for each markdown `source` file and that gets turned into its own blog page. <br></br>

Glossing over some details that I don't fully understand... <br></br>

There seems to be some step in deployment that fills pages named like `{markdownRemark.frontmatter__slug}.tsx}` with the correct data from a graphql query inside. <br></br>

The blog page has some extra logic around it that lets me display summaries for the most recent blog posts. Its quite simple. I just made a react component with a div and a gradient (for the bottom fade) and it was just some CSS to hide the extra html. It was, for the most part, straightforward. CSS is terrible though. Very... unintuitive.<br></br>

The [mozilla reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) helped me out alot. Very useful for seeing CSS in action. <br></br>

I'll probably have to tweak the translation process from markdown to html since it seems like line breaks aren't done well. At least double space or 2 whitespace doesn't work so I have to insert the `br` tags by hand which is painful.<br></br>

Otherwise its working very well :)<br></br>