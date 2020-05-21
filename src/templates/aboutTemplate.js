import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Footer from "../components/footer";
import OurSpirits from "../images/our_spirits.jpg";
import OurSpiritsMobile from "../images/our_spirits_mobile.jpg";
import Whisky from "../images/whisky.jpg";
import Gin from "../images/gin.jpg";
import Design from "../images/design.png";
import Combine from "../images/combine.jpg";
import Wheat from "../images/wheat.jpg";
import Malting from "../images/malting.jpg";
import Mashing from "../images/mashing.jpg";
import Fermentation from "../images/fermentation.jpg";
import Distil1 from "../images/distil1.jpg";
import Distil2 from "../images/distil2.jpg";
import Distil3 from "../images/distil3.jpg";
import Distil4 from "../images/distil4.jpg";
import Casking from "../images/casking.jpg";
import GinStill from "../images/ginstill.jpg";
import Botanicals1 from "../images/botanicals1.jpg";
import Botanicals2 from "../images/botanicals2.jpg";
import Resting from "../images/resting.jpg";
import Reducing from "../images/reducing.jpg";
import "../styles/about.scss";

export default function AboutTemplate({ data }) {
    const { allMarkdownRemark } = data 
  
    let our_whisky = "";
    let our_gin = "";
    let harvest_time = "";
    let traditional_malting = "";
    let milling_mashing = "";
    let fermentation = "";
    let distillation = "";
    let casking = "";
    let base = "";
    let resting = "";

    allMarkdownRemark.edges.forEach((edge, i) => {
      if (edge.node.frontmatter.title === "OUR WHISKY") {
        our_whisky = edge.node.html 
      }
      if (edge.node.frontmatter.title === "OUR GIN") {
        our_gin = edge.node.html 
      }
      if (edge.node.frontmatter.title === "HARVEST TIME") {
        harvest_time = edge.node.html 
      }
      if (edge.node.frontmatter.title === "TRADITIONAL MALTING") {
        traditional_malting = edge.node.html 
      }
      if (edge.node.frontmatter.title === "MILLING AND MASHING") {
        milling_mashing = edge.node.html 
      }
      if (edge.node.frontmatter.title === "FERMENTATION") {
        fermentation = edge.node.html 
      }
      if (edge.node.frontmatter.title === "DISTILLATION") {
        distillation = edge.node.html 
      }
      if (edge.node.frontmatter.title === "READY TO BE CASKED") {
        casking = edge.node.html 
      }
      if (edge.node.frontmatter.title === "BEGIN WITH A BASE") {
        base = edge.node.html 
      }
      if (edge.node.frontmatter.title === "RESTING AND REDUCING") {
        resting = edge.node.html 
      }
    })
  
    return (
      <Layout>
        <div className="about">
          <div className="about-banner">
            <img width="100%" className="about-banner-full-image img-fluid" src={OurSpirits} alt=""/>
            <img width="100%" className="about-banner-mobile-image img-fluid" src={OurSpiritsMobile} alt=""/>
            <h2 className="about-banner-text">OUR SPIRITS</h2>
          </div>

          <div className="about-page-wrapper">
            <h3 className="about-page-wrapper-heading">From our single malt whisky to our gins and liqueurs, everything we make at the Cotswolds Distillery is about quality and flavour above all else.</h3>
            <hr/>

            <div className="about-page-wrapper-product">
              <div className="about-page-wrapper-product-image">
                <img className="img-fluid" src={Whisky} alt=""/>
              </div>
              <div className="about-page-wrapper-product-description">
                <h3 className="text-center">OUR WHISKY</h3>
                <div className="about-page-wrapper-product-description-body" dangerouslySetInnerHTML={{ __html: our_whisky }} />
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
              </div>
            </div>

            <hr/>

            <div className="about-page-wrapper-crafting">
              <div className="about-page-wrapper-crafting-whisky">
                <h1>CRAFTING OUR WHISKY</h1>
                <div className="about-page-wrapper-crafting-whisky-harvest">
                  <div className="about-page-wrapper-crafting-whisky-harvest-images">
                    <div className="about-page-wrapper-crafting-whisky-harvest-images-image">
                      <img className="img-fluid w-45" src={Combine} alt=""/>
                    </div>
                    <div className="about-page-wrapper-crafting-whisky-harvest-images-image">
                      <img className="img-fluid w-45" src={Wheat} alt=""/>
                    </div> 
                  </div>
                  <div className="about-page-wrapper-crafting-whisky-harvest-description">
                    <div className="about-page-wrapper-crafting-whisky-harvest-description-body" dangerouslySetInnerHTML={{ __html: harvest_time }} />
                  </div>
                </div>

                <div className="about-page-wrapper-crafting-whisky-malting">
                  <div className="about-page-wrapper-crafting-whisky-malting-images">
                    <div className="about-page-wrapper-crafting-whisky-malting-images-image">
                      <img className="img-fluid w-100" src={Malting} alt=""/>
                    </div> 
                  </div>
                  <div className="about-page-wrapper-crafting-whisky-malting-description">
                    <div className="about-page-wrapper-crafting-whisky-malting-description-body" dangerouslySetInnerHTML={{ __html: traditional_malting }}/>
                  </div>
                </div>

                <div className="about-page-wrapper-crafting-whisky-malting">
                  <div className="about-page-wrapper-crafting-whisky-malting-images">
                    <div className="about-page-wrapper-crafting-whisky-malting-images-image">
                      <img className="img-fluid w-100" src={Mashing} alt=""/>
                    </div> 
                  </div>
                  <div className="about-page-wrapper-crafting-whisky-malting-description">
                    <div className="about-page-wrapper-crafting-whisky-malting-description-body" dangerouslySetInnerHTML={{ __html: milling_mashing }}/>
                  </div>
                </div>

                <div className="about-page-wrapper-crafting-whisky-malting">
                  <div className="about-page-wrapper-crafting-whisky-malting-images">
                    <div className="about-page-wrapper-crafting-whisky-malting-images-image">
                      <img className="img-fluid w-100" src={Fermentation} alt=""/>
                    </div> 
                  </div>
                  <div className="about-page-wrapper-crafting-whisky-malting-description">
                    <div className="about-page-wrapper-crafting-whisky-malting-description-body" dangerouslySetInnerHTML={{ __html: fermentation }}/>
                  </div>
                </div>

                <div className="about-page-wrapper-crafting-whisky-distillation">
                  <div className="about-page-wrapper-crafting-whisky-distillation-images">
                    <div className="about-page-wrapper-crafting-whisky-distillation-images-container">
                      <div className="about-page-wrapper-crafting-whisky-distillation-images-container-image">
                        <img className="img-fluid w-45" src={Distil1} alt=""/>
                      </div>
                      <div className="about-page-wrapper-crafting-whisky-distillation-images-container-image">
                        <img className="img-fluid w-45" src={Distil2} alt=""/>
                      </div> 
                    </div>
                    <div className="about-page-wrapper-crafting-whisky-distillation-images-container">
                      <div className="about-page-wrapper-crafting-whisky-distillation-images-container-image">
                        <img className="img-fluid w-45" src={Distil3} alt=""/>
                      </div>
                      <div className="about-page-wrapper-crafting-whisky-distillation-images-container-image">
                        <img className="img-fluid w-45" src={Distil4} alt=""/>
                      </div> 
                    </div>
                  </div>
                  <div className="about-page-wrapper-crafting-whisky-harvest-description">
                    <div className="about-page-wrapper-crafting-whisky-harvest-description-body" dangerouslySetInnerHTML={{ __html: distillation }} />
                  </div>
                </div>

                <div className="about-page-wrapper-crafting-whisky-malting">
                  <div className="about-page-wrapper-crafting-whisky-malting-images">
                    <div className="about-page-wrapper-crafting-whisky-malting-images-image">
                      <img className="img-fluid w-100" src={Casking} alt=""/>
                    </div> 
                  </div>
                  <div className="about-page-wrapper-crafting-whisky-malting-description">
                    <div className="about-page-wrapper-crafting-whisky-malting-description-body" dangerouslySetInnerHTML={{ __html: casking }}/>
                  </div>
                </div>
              </div>

              <hr/>

              <div className="about-page-wrapper-crafting-gin">
                <h1>CRAFTING OUR GIN</h1>
                <div className="about-page-wrapper-crafting-gin-base">
                  <div className="about-page-wrapper-crafting-gin-base-images">
                    <div className="about-page-wrapper-crafting-gin-base-images-top-image">
                      <img className="img-fluid w-100" src={GinStill} alt=""/>
                    </div> 
                    <div className="about-page-wrapper-crafting-gin-base-images-bottom-images">
                      <div className="about-page-wrapper-crafting-gin-base-images-bottom-images-image">
                       <img src={Botanicals1} alt="" className="img-fluid"/>
                      </div> 
                      <div className="about-page-wrapper-crafting-gin-base-images-bottom-images-image">
                       <img src={Botanicals2} alt="" className="img-fluid"/>
                      </div> 
                    </div>
                  </div>
                  <div className="about-page-wrapper-crafting-gin-base-description">
                    <div className="about-page-wrapper-crafting-gin-base-description-body" dangerouslySetInnerHTML={{ __html: base }}/>
                  </div>
                </div>
                <div className="about-page-wrapper-crafting-whisky-harvest">
                  <div className="about-page-wrapper-crafting-whisky-harvest-images">
                    <div className="about-page-wrapper-crafting-whisky-harvest-images-image">
                      <img className="img-fluid w-45" src={Resting} alt=""/>
                    </div>
                    <div className="about-page-wrapper-crafting-whisky-harvest-images-image">
                      <img className="img-fluid w-45" src={Reducing} alt=""/>
                    </div> 
                  </div>
                  <div className="about-page-wrapper-crafting-whisky-harvest-description">
                    <div className="about-page-wrapper-crafting-whisky-harvest-description-body" dangerouslySetInnerHTML={{ __html: resting }} />
                  </div>
                </div>


              </div>

            </div>
            
          </div>
          <Footer />
        </div>
      </Layout>
      
    ) 
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
