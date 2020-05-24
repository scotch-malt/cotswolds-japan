import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Gin from "../images/gin_bottle.jpg";
import SF from "../images/awards/SFWSC-Double-Gold_3_768x.jpg";
import IWSC from "../images/awards/Image_iwsc_gold100.jpg";
import GT from "../images/awards/GT_19_3-star_100.jpg";
import WGA from "../images/awards/world-gin-2016-100.jpg";
import TM from "../images/awards/Taste_Master_2019_GIN_100.jpg";
import JBC from "../images/awards/2019-judging-best-class100.jpg";
import TRM from "../images/awards/Image_travel_retail100.jpg";

import "../styles/products.scss";

export default function WhiskyTemplate({data}) {
    const { allMarkdownRemark } = data 
    let ingredients = "";
    let crafted = "";

    allMarkdownRemark.edges.forEach((edge, i) => {
      if (edge.node.frontmatter.title === "The finest ingredients") {
        ingredients = edge.node.html 
      }
      if (edge.node.frontmatter.title === "Lovingly crafted gin") {
        crafted = edge.node.html 
      }

    })
    
    return (
      <Layout>
        <div className="products">
          <div className="products-page-wrapper">
            <h1 className="products-page-wrapper-heading">Watch the cloud appear...</h1>
            <div className="products-page-wrapper-content">
              <div className="products-page-wrapper-content-description">
                <div className="about-page-wrapper-product-description-body" dangerouslySetInnerHTML={{ __html: ingredients }} />
              </div>
              <div className="products-page-wrapper-content-image">
                <img src={Gin} alt="Dry Gin" className="img-fluid"/>
              </div>
              <div className="products-page-wrapper-content-description">
                <div className="about-page-wrapper-product-description-body" dangerouslySetInnerHTML={{ __html: crafted }} />
              </div>
            </div>
            <div className="products-page-wrapper-awards">
              <img src={SF} alt="San Francisco World Spirits Competition" className="img-fluid"/>
              <img src={IWSC} alt="IWSC Gold" className="img-fluid"/>
              <img src={GT} alt="Great Taste" className="img-fluid"/>
              <img src={WGA} alt="World Gin Awards" className="img-fluid"/>
              <img src={TM} alt="Global Spirits Masters" className="img-fluid"/>
              <img src={JBC} alt="Judging Craft Spirits Best of Class" className="img-fluid"/>
              <img src={TRM} alt="Travel Retail Spirits Masters" className="img-fluid"/>
            </div>
          </div>
          <Footer />
        </div>
      </Layout>
      
    ) 
  }

  export const pageQuery = graphql`
  query ginQuery {
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
