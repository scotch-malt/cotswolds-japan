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
import "../styles/about.scss";

export default function AboutTemplate({ data }) {
    const { allMarkdownRemark } = data 
    const whisky = allMarkdownRemark.edges[2].node.html;
    const gin = allMarkdownRemark.edges[1].node.html;
    const whiskyCraft = allMarkdownRemark.edges[3].node.html
    console.log(whiskyCraft)
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
                <h3 className="text-center">{allMarkdownRemark.edges[2].node.frontmatter.title}</h3>
                <div className="about-page-wrapper-product-description-body" dangerouslySetInnerHTML={{ __html: whisky }} />
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
                <h3 className="text-center">{allMarkdownRemark.edges[1].node.frontmatter.title}</h3>
                <div className="about-page-wrapper-product-description-body" dangerouslySetInnerHTML={{ __html: gin }} />
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
                    <div className="about-page-wrapper-crafting-whisky-harvest-description-body" dangerouslySetInnerHTML={{ __html: whiskyCraft }} />
                  </div>
                </div>
              </div>
              <div className="about-page-wrapper-crafting-gin">
                <h1>CRAFTING OUR GIN</h1>
              </div>

            </div>
            
          </div>
          <Footer />
        </div>
      </Layout>
      
    ) 
  }

//   export const pageQuery = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         title
//       }
//     }
//   }
// `

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
