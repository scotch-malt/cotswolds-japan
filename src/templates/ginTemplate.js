import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Gin from "../images/gin_bottle.jpg";
import WFGin from "../images/wf_gin.jpg";
import OTGin from "../images/old_tom_gin.jpg";
import GingerGin from "../images/ginger_gin.jpg";
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
    let wildfloweringredients = "";
    let oldtomingredients = "";
    let gingeringredients = "";
    let crafted = "";
    let wildflowercrafted = "";
    let oldtomcrafted = "";
    let gingercrafted = "";

    allMarkdownRemark.edges.forEach((edge, i) => {
      if (edge.node.frontmatter.title === "The finest ingredients") {
        ingredients = edge.node.html 
      }
      if (edge.node.frontmatter.title === "Lovingly crafted gin") {
        crafted = edge.node.html 
      }
      if (edge.node.frontmatter.title === "The finest ingredients Wildflower Gin") {
        wildfloweringredients = edge.node.html 
      }
      if (edge.node.frontmatter.title === "Lovingly crafted gin Wildflower Gin") {
        wildflowercrafted = edge.node.html 
      }
      if (edge.node.frontmatter.title === "The finest ingredients Old Tom Gin") {
        oldtomingredients = edge.node.html 
      }
      if (edge.node.frontmatter.title === "Lovingly crafted gin Old Tom Gin") {
        oldtomcrafted = edge.node.html 
      }
      if (edge.node.frontmatter.title === "The finest ingredients Ginger Gin") {
        gingeringredients = edge.node.html 
      }
      if (edge.node.frontmatter.title === "Lovingly crafted gin Ginger Gin") {
        gingercrafted = edge.node.html 
      }

    })
    
    return (
      <Layout>
        <div className="products">
          <div className="products-page-wrapper">
          <h4 className="text-center mb-5" >COTSWOLDS DRY GIN</h4>
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

            <hr className="products-page-wrapper-divider my-5 py-3"/>

            <h4 className="text-center mb-5" >NO.1 WILDFLOWER GIN</h4>
            <h1 className="products-page-wrapper-heading">Inspired by the glorious grasslands of the Cotswolds.</h1>
            <div className="products-page-wrapper-content">
              <div className="products-page-wrapper-content-description">
                <div className="about-page-wrapper-product-description-body" dangerouslySetInnerHTML={{ __html: wildfloweringredients }} />
              </div>
              <div className="products-page-wrapper-content-image">
                <img src={WFGin} alt="Wildflower No.1 Gin" className="img-fluid"/>
              </div>
              <div className="products-page-wrapper-content-description">
                <div className="about-page-wrapper-product-description-body" dangerouslySetInnerHTML={{ __html: wildflowercrafted }} />
              </div>
            </div>
            <div className="products-page-wrapper-awards">

            </div>

            <hr className="products-page-wrapper-divider my-5 py-3"/>

            <h4 className="text-center mb-5" >OLD TOM GIN</h4>
            <h1 className="products-page-wrapper-heading">Our version of an old classic.</h1>
            <div className="products-page-wrapper-content">
              <div className="products-page-wrapper-content-description">
                <div className="about-page-wrapper-product-description-body" dangerouslySetInnerHTML={{ __html: oldtomingredients }} />
              </div>
              <div className="products-page-wrapper-content-image">
                <img src={OTGin} alt="Old Tom Gin" className="img-fluid"/>
              </div>
              <div className="products-page-wrapper-content-description">
                <div className="about-page-wrapper-product-description-body" dangerouslySetInnerHTML={{ __html: oldtomcrafted }} />
              </div>
            </div>
            <div className="products-page-wrapper-awards">

            </div>

            <hr className="products-page-wrapper-divider my-5 py-3"/>

            <h4 className="text-center mb-5" >GINGER GIN</h4>
            <h1 className="products-page-wrapper-heading">A wonderfully spiced seasonal favourite.</h1>
            <div className="products-page-wrapper-content">
              <div className="products-page-wrapper-content-description">
                <div className="about-page-wrapper-product-description-body" dangerouslySetInnerHTML={{ __html: gingeringredients }} />
              </div>
              <div className="products-page-wrapper-content-image">
                <img src={GingerGin} alt="Ginger Gin" className="img-fluid"/>
              </div>
              <div className="products-page-wrapper-content-description">
                <div className="about-page-wrapper-product-description-body" dangerouslySetInnerHTML={{ __html: gingercrafted }} />
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
