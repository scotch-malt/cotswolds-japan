import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Img from "gatsby-image";
import "../styles/news.scss";

const NewsTemplate = ({data}) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <SEO title={`ニュース`} />
            <div className="news">
                <div className="news-main">
                    <h1 className="news-main-title">{post.frontmatter.title}</h1>
                    <small className="news-main-date">{post.frontmatter.date}</small>
                    <hr />
                    <div className="news-main-image">
                        <Img 
                            fluid={post.frontmatter.image.childImageSharp.fluid}
                            className="w-100 img-fluid"
                        />
                    </div>
                    <div className="news-main-body" dangerouslySetInnerHTML={{__html: post.html}} />
                    
                </div>
                <Footer />
            </div>
        </Layout>
    );
}

export default NewsTemplate;

export const pageQuery = graphql`
query newsQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        html 
        frontmatter {
            title 
            date(formatString: "MMMM DD, YYYY") 
            tags
            image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          } 
        }
    }
}
`