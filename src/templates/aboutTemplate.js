import React from "react";
import { graphql, Link } from "gatsby";
import { Button } from "react-bootstrap";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Footer from "../components/footer";
import OurSpirits from "../images/our_spirits.jpg";
import OurSpiritsMobile from "../images/our_spirits_mobile.jpg";
import Whisky from "../images/whisky.jpg";
import Gin from "../images/gin.jpg";
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
            {/* <h3 className="about-page-wrapper-heading">From our single malt whisky to our gins and liqueurs, everything we make at the Cotswolds Distillery is about quality and flavour above all else.</h3> */}
            <h3 className="about-page-wrapper-heading">コッツウォルズ蒸溜所では、少人数ながら、才能豊かな職人たちが、何よりも品質とフレーバーへの情熱に駆り立てられ、日々の製造に携わります。</h3>
            <hr/>

            <div className="about-page-wrapper-product">
              <div className="about-page-wrapper-product-image">
                <img className="img-fluid" src={Whisky} alt=""/>
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
                <img className="img-fluid" src={Gin} alt=""/>
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
