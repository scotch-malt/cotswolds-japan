import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout"
import "../styles/products.scss";

export default function ProductsTemplate({
    data, // this prop will be injected by the GraphQL query below.
  }) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    console.log(data)
    const { frontmatter, html } = markdownRemark
    return (
      <Layout>
        <div className="products">
          <div className="products-page-wrapper">
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <div
              className="products-page-wrapper-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </Layout>
      
    ) 
  }

  export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
