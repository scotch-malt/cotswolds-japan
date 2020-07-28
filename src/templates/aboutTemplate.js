import React from "react";
import { graphql, Link } from "gatsby";
import { Button } from "react-bootstrap";
import Img from "gatsby-image";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Footer from "../components/footer";
import OurSpirits from "../images/our_spirits.jpg";
import OurSpiritsMobile from "../images/our_spirits_mobile.jpg";
import Design from "../images/design.png";

import "../styles/about.scss";

export default function AboutTemplate({ data }) {
    const { allMarkdownRemark } = data 
  
    let our_whisky = "";
    let our_gin = "";

    allMarkdownRemark.edges.forEach((edge, i) => {
      if (edge.node.frontmatter.title === "OUR WHISKY") {
        our_whisky = edge.node.html 
      }
      if (edge.node.frontmatter.title === "OUR GIN") {
        our_gin = edge.node.html 
      }
    })
  
    return (
      <Layout>
        <SEO title={`About`} />
        <div className="about">
          <div className="about-banner">
            <img width="100%" className="about-banner-full-image img-fluid" src={OurSpirits} alt=""/>
            <img width="100%" className="about-banner-mobile-image img-fluid" src={OurSpiritsMobile} alt=""/>
            <h2 className="about-banner-text">OUR SPIRITS</h2>
          </div>

          <div className="about-page-wrapper">
            <h3 className="about-page-wrapper-heading">コッツウォルズ蒸溜所では、少人数ながら、才能豊かな職人たちが、何よりも品質とフレーバーへの情熱に駆り立てられ、日々の製造に携わります。</h3>
            <hr/>

            <div className="about-page-wrapper-product">
              <div className="about-page-wrapper-product-image">
                <Img fluid={data.whiskyImage.childImageSharp.fluid} />
              </div>
              <div className="about-page-wrapper-product-description">
                <h3 className="text-center">OUR WHISKY</h3>
                <div className="about-page-wrapper-product-description-body" dangerouslySetInnerHTML={{ __html: our_whisky }} />
                <Link to="/ourwhiskies"><Button variant="warning">Learn More About Our Whiskies...</Button>{' '}</Link>
              </div>
            </div>

            <div className="about-page-wrapper-divider">
            <hr/> <img className="img-fluid" src={Design} alt=""/> <hr/>
            </div>

            <div className="about-page-wrapper-product">
              <div className="about-page-wrapper-product-image">
                <Img fluid={data.ginImage.childImageSharp.fluid} />
              </div>
              <div className="about-page-wrapper-product-description">
                <h3 className="text-center">OUR GIN</h3>
                <div className="about-page-wrapper-product-description-body" dangerouslySetInnerHTML={{ __html: our_gin }} />
                <Link to="/ourgins"><Button variant="secondary">Learn More About Our Gins...</Button>{' '}</Link>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </Layout> 
    ); 
  }


export const pageQuery = graphql`
query aboutQuery {
  whiskyImage: file(relativePath: {eq: "whisky.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  ginImage: file(relativePath: {eq: "gin.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  allMarkdownRemark {
    totalCount
    edges {
      node {
        html 
        frontmatter {
          title 
          date 
          tags
        }
        fields {
          slug
        }
      }
    }
  }
}
` 
