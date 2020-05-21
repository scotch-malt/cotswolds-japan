import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Whisky from "../images/whisky_bottle.jpg";
import HKIWSC from "../images/awards/2019_HKIWSC_100.jpg";
import BWW from "../images/awards/Best_World_Whisky_GOLD2018100.jpg";
import GT from "../images/awards/GT_19_3-star_100.jpg";
import WWA from "../images/awards/WWA19-CatWinner_732x.jpg";
import IWSC from "../images/awards/IWSC_GOLD_100.jpg";
import TRM from "../images/awards/2019travel_retail_master100.jpg";
import WB from "../images/awards/2020_Whisky_Bible_100.jpg";

import "../styles/products.scss";

export default function WhiskyTemplate({data}) {
    const { allMarkdownRemark } = data 
    let ingredients = "";
    let crafted = "";

    allMarkdownRemark.edges.forEach((edge, i) => {
      if (edge.node.frontmatter.title === "Carefully sourced ingredients") {
        ingredients = edge.node.html 
      }
      if (edge.node.frontmatter.title === "Lovingly crafted") {
        crafted = edge.node.html 
      }

    })
    
    return (
      <Layout>
        <div className="products">
          <div className="products-page-wrapper">
            <h1 className="products-page-wrapper-heading">The first single malt whisky ever distilled in the Cotswolds.</h1>
            <div className="products-page-wrapper-content">
              <div className="products-page-wrapper-content-description">
                <div className="about-page-wrapper-product-description-body" dangerouslySetInnerHTML={{ __html: ingredients }} />
              </div>
              <div className="products-page-wrapper-content-image">
                <img src={Whisky} alt="Single Malt Whisky" className="img-fluid"/>
              </div>
              <div className="products-page-wrapper-content-description">
                <div className="about-page-wrapper-product-description-body" dangerouslySetInnerHTML={{ __html: crafted }} />
              </div>
            </div>
            <div className="products-page-wrapper-awards">
              <img src={HKIWSC} alt="Hong Kong International Wine Spirits" className="img-fluid"/>
              <img src={BWW} alt="Best World Whisky" className="img-fluid"/>
              <img src={GT} alt="Great Taste" className="img-fluid"/>
              <img src={WWA} alt="World Whiskies Awards" className="img-fluid"/>
              <img src={IWSC} alt="IWSC" className="img-fluid"/>
              <img src={TRM} alt="Travel Retail Masters" className="img-fluid"/>
              <img src={WB} alt="Whiksky Bible" className="img-fluid"/>
            </div>
          </div>
          <Footer />
        </div>
      </Layout>
      
    ) 
  }

  export const pageQuery = graphql`
  query whiskyQuery {
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
