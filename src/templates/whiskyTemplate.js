import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Whisky from "../images/whisky_bottle.jpg";
import FoundersChoice from "../images/founders_choice.jpg";
import PeatedCask from "../images/peated_cask_whisky.jpg";
import SF from "../images/awards/SFWSC-Double-Gold_3_768x.jpg";
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
    let foundersingredients = "";
    let peatedingredients = "";
    let crafted = "";
    let founderscrafted = "";
    let peatedcrafted = "";

    allMarkdownRemark.edges.forEach((edge, i) => {
      if (edge.node.frontmatter.title === "Carefully sourced ingredients") {
        ingredients = edge.node.html 
      }
      if (edge.node.frontmatter.title === "Lovingly crafted") {
        crafted = edge.node.html 
      }
      if (edge.node.frontmatter.title === "Carefully sourced ingredients Founders Choice") {
        foundersingredients = edge.node.html 
      }
      if (edge.node.frontmatter.title === "Lovingly crafted Founders Choice") {
        founderscrafted = edge.node.html 
      }
      if (edge.node.frontmatter.title === "Carefully sourced ingredients Peated Cask") {
        peatedingredients = edge.node.html 
      }
      if (edge.node.frontmatter.title === "Lovingly crafted Peated Cask") {
        peatedcrafted = edge.node.html 
      }

    })
    
    return (
      <Layout>
        <div className="products">
          <div className="products-page-wrapper">
            <h4 className="text-center mb-5" >COTSWOLDS SINGLE MALT WHISKY</h4>
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

            <hr className="products-page-wrapper-divider my-5 py-3"/>

            <h4 className="text-center mb-5" >FOUNDER'S CHOICE SINGLE MALT WHISKY</h4>
            <h1 className="products-page-wrapper-heading">Our first cask-strength release, from Dan's favourite casks.</h1>
            <div className="products-page-wrapper-content">
              <div className="products-page-wrapper-content-description">
                <div className="about-page-wrapper-product-description-body" dangerouslySetInnerHTML={{ __html: foundersingredients }} />
              </div>
              <div className="products-page-wrapper-content-image">
                <img src={FoundersChoice} alt="Founder's Choice Whisky" className="img-fluid"/>
              </div>
              <div className="products-page-wrapper-content-description">
                <div className="about-page-wrapper-product-description-body" dangerouslySetInnerHTML={{ __html: founderscrafted }} />
              </div>
            </div>
            <div className="products-page-wrapper-awards">
              <img src={IWSC} alt="IWSC" className="img-fluid"/>
              <img src={GT} alt="Great Taste" className="img-fluid"/>
              <img src={WWA} alt="World Whiskies Awards" className="img-fluid"/>
              <img src={SF} alt="World Whiskies Awards" className="img-fluid"/>  
            </div>
            <hr className="products-page-wrapper-divider my-5 py-3"/>

            <h4 className="text-center mb-5" >PEATED CASK SINGLE MALT WHISKY</h4>
            <h1 className="products-page-wrapper-heading">Rich and fruity with subtle notes of peat smoke.</h1>
            <div className="products-page-wrapper-content">
              <div className="products-page-wrapper-content-description">
                <div className="about-page-wrapper-product-description-body" dangerouslySetInnerHTML={{ __html: peatedingredients }} />
              </div>
              <div className="products-page-wrapper-content-image">
                <img src={PeatedCask} alt="Peated Cask Whisky" className="img-fluid"/>
              </div>
              <div className="products-page-wrapper-content-description">
                <div className="about-page-wrapper-product-description-body" dangerouslySetInnerHTML={{ __html: peatedcrafted }} />
              </div>
            </div>
            <div className="products-page-wrapper-awards">
              
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
