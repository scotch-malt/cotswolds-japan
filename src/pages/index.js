import React from "react";
import { Link, graphql } from "gatsby";
import SEO from "../components/seo";
import Img from "gatsby-image";
import Layout from "../components/layout";
import Footer from "../components/footer";
import { Carousel} from "react-bootstrap";

import Design from "../images/design.png";
import WSC from "../images/awards/2019_HKIWSC_100.jpg";
import JBC from "../images/awards/2019-judging-best-class100.jpg";
import WB from "../images/awards/2020_Whisky_Bible_100.jpg";
import GT from "../images/awards/GT_19_3-star_100.jpg";
import iwsc from "../images/awards/Image_iwsc_gold100.jpg";
import TR from "../images/awards/Image_travel_retail100.jpg";
import IWSC_Gold from "../images/awards/IWSC_GOLD_100.jpg";
import SF from "../images/awards/SFWSC-Double-Gold_3_768x.jpg";
import TM from "../images/awards/Taste_Master_2019_GIN_100.jpg";
import WG from "../images/awards/world-gin-2016-100.jpg";
import WWA from "../images/awards/WWA19-CatWinner_732x.jpg";
import Cotswolds from "../images/cotswolds.jpg";

import "../styles/index.scss";
import "typeface-raleway";
import "typeface-libre-baskerville";
import "typeface-kosugi";

const Index = ({data}) => {
    
    const { allMarkdownRemark } = data
    
    const sliderImg = ["wf_gin_slider_evening.jpg", "whisky_slider2.jpg", "dry_gin_slider2.jpg"];
    const productsImg = ["whisky_and_still2.jpg", "gin_and_still2.jpg"];

    let slider = [];
    let spirits = [];
    let news = []; 


    data.allFile.edges.forEach(edge => {
        sliderImg.forEach(item => {
            if (item === edge.node.base) {
                slider.push(<Img className="d-block w-100" fluid={edge.node.childImageSharp.fluid} alt={edge.node.base.split(".")[0]}  />)
            }
        });
    })

    data.allFile.edges.forEach(edge => {
        productsImg.forEach(item => {
            if (item === edge.node.base) {
                spirits.push(<Img className="img-fluid" fluid={edge.node.childImageSharp.fluid} alt={edge.node.base.split(".")[0]} style={{width: "100%"}} />)
            }
        });
    })

    let our_distillery = "";

    allMarkdownRemark.edges.forEach((edge, i) => {
        if (edge.node.frontmatter.title === "OUR DISTILLERY") {
          our_distillery = edge.node.html 
        }
        if (edge.node.frontmatter.pagetype === "news") {
            news.push(edge)
        }  
    })
    
    return (
        <Layout>
            <SEO title={`ホーム`} />
            <div className="main-body">
                <div className="main-body-top-content">
                    <div className="main-body-top-content-carousel">
                        <Carousel className="main-body-top-content-carousel-main">
                            <Carousel.Item>
                                {slider.map((image, i) => {
                                    if (image.props.alt === "wf_gin_slider_evening") {
                                        return image
                                    }
                                })}
                                <Carousel.Caption>
                                <h1>NEW: WILDFLOWER GIN</h1>
                                <p>コッツウォルズに広がる美しい草原からインスピレーションを得て生まれた、No.1ワイルドフラワージン。フレッシュでフローラル、フルーティーな味わいをお楽しみください。</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                {slider.map((image, i) => {
                                    if (image.props.alt === "whisky_slider2") {
                                        return image
                                    }
                                })}
                                <Carousel.Caption>
                                <h1>SINGLE MALT WHISKY</h1>
                                <p>100%コッツウォルズ産のフロアモルティングモルトを使用。フルーティで豊かな味わいのシングルモルトです。</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                {slider.map((image, i) => {
                                    if (image.props.alt === "dry_gin_slider2") {
                                        return image
                                    }
                                })}
                                <Carousel.Caption>
                                <h1>DRY GIN</h1>
                                <p>無濾過で瓶詰めされた、豊かなフレーバー際立つジン。オンザロックやジントニックにしてお飲みいただければ、天然のボタニカルオイルが真珠のような濁りをお楽しみになれます。</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="main-body-top-content-products">
                        <div className="main-body-top-content-products-wrapper">
                                <h2 className="text-center">Our Gins</h2>
                                <Link className="product-links" to="/ourgins" >
                                    <div style={{width: "25vw"}}>
                                        {spirits.map((image, i) => {
                                            if (image.props.alt === "gin_and_still2") {
                                                return image
                                            }
                                        })}
                                    </div>
                                </Link>
                        </div>
                        <p className="spacer" />
                        <div className="main-body-top-content-products-wrapper">
                                <h2 className="text-center">Our Whiskies</h2>
                                <Link className="product-links" to="/ourwhiskies" >
                                    <div style={{width: "25vw"}}>
                                        {spirits.map((image, i) => {
                                            if (image.props.alt === "whisky_and_still2") {
                                                return image
                                            }
                                        })}
                                    </div>
                                </Link>
                        </div>
                    </div>
                </div>
                <div className="main-body-news">
                    <div className="main-body-news-content">
                        <div className="main-body-news-content-post">
                            <Img style={{width: "80px", marginRight: "20px", boxShadow: "1px 1px 5px black"}} fluid={news[0].node.frontmatter.image.childImageSharp.fluid} />
                            <Link to={news[0].node.fields.slug} ><h6>{news[0].node.frontmatter.title}</h6></Link>
                        </div>
                    </div>
                </div>
                <div className="main-body-middle-content">
                    <div className="main-body-middle-content-awards pb-5">
                        <img width={90} src={SF} alt="" className="img-fluid"/>
                        <img width={90} src={WSC} alt="" className="img-fluid"/>
                        <img width={90} src={JBC} alt="" className="img-fluid"/>
                        <img width={90} src={WWA} alt="" className="img-fluid"/>
                        <img width={90} src={WG} alt="" className="img-fluid"/>
                        <img width={90} src={GT} alt="" className="img-fluid"/>
                        <img width={90} src={iwsc} alt="" className="img-fluid"/>
                        <img width={90} src={TM} alt="" className="img-fluid"/>
                        <img width={90} src={WB} alt="" className="img-fluid"/>
                        <img width={90} src={TR} alt="" className="img-fluid"/>
                        <img width={90} src={IWSC_Gold} alt="" className="img-fluid"/>
                    </div>
                    <div className="main-body-middle-content-products">
                        <div className="main-body-middle-content-products-wrapper">
                            <h2 className="text-center">Our Whiskies</h2>
                            <Link className="product-links" to="/ourwhiskies" >
                                <div style={{width: "40vw", margin: "auto"}}>
                                    {spirits.map((image, i) => {
                                        if (image.props.alt === "whisky_and_still2") {
                                            return image
                                        }
                                    })}
                                </div>
                            </Link>
                        </div>
                        <p className="spacer" />
                        <div className="main-body-middle-content-products-wrapper">  
                            <h2 className="text-center">Our Gins</h2>
                            <Link className="product-links" to="/ourgins">
                                <div style={{width: "40vw", margin: "auto"}}>
                                    {spirits.map((image, i) => {
                                        if (image.props.alt === "gin_and_still2") {
                                            return image
                                        }
                                    })}
                                </div>
                            </Link> 
                        </div>            
                    </div>
                    <div className="main-body-middle-content-description">
                        <img src={Design} alt="" className="img-fluid pb-5"/>
                        <h2 className="pt-2">Welcome to the Cotswolds and Welcome to an Area of ‘Outstanding Natural Spirit’.</h2>
                        <div className="main-body-middle-content-description-body py-4" dangerouslySetInnerHTML={{__html: our_distillery}} />
                        <img src={Cotswolds} alt="" className="main-body-middle-content-description-cotswolds mt-4 img-fluid"/>
                    </div>
                </div>
                <Footer />
            </div>
        </Layout>
    );
}


export default Index;

export const pageQuery = graphql`
query indexQuery {
    site {
        siteMetadata {
            title
            description
        }
    }
    allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
  allMarkdownRemark( sort: { fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        html 
        frontmatter {
          title 
          date 
          tags
          pagetype
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
}
` 