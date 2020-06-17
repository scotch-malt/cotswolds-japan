import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Footer from "../components/footer";
import { Carousel} from "react-bootstrap";

import WFGin from "../images/wf_gin_slider.jpg";
import Whisky from "../images/whisky_slider.jpg";
import DryGin from "../images/dry_gin_slider.jpg"
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
import WhiskyStill from "../images/whisky_and_still.jpg";
import GinStill from "../images/gin_and_still.jpg";
import Cotswolds from "../images/cotswolds.jpg";

import "../styles/index.scss";
import "typeface-raleway";
import "typeface-libre-baskerville";
import "typeface-kosugi";

const Index = ({data}) => {
    console.log(data)
    const { allMarkdownRemark } = data

    let our_distillery = "";

    allMarkdownRemark.edges.forEach((edge, i) => {
        if (edge.node.frontmatter.title === "OUR DISTILLERY") {
          our_distillery = edge.node.html 
        }
        
    })

    return (
        <Layout>
            <div className="main-body">
                <div className="main-body-top-content">
                    <div className="main-body-top-content-carousel">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={WFGin}
                                alt="New"
                                />
                                <Carousel.Caption>
                                <h1>NEW: WILDFLOWER GIN</h1>
                                <p>コッツウォルズに広がる美しい草原からインスピレーションを得て生まれた、No.1ワイルドフラワージン。フレッシュでフローラル、フルーティーな味わいをお楽しみください。</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={Whisky}
                                alt="Whisky"
                                />

                                <Carousel.Caption>
                                <h1>SINGLE MALT WHISKY</h1>
                                <p>100%コッツウォルズ産のフロアモルティングモルトを使用。フルーティで豊かな味わいのシングルモルトです。</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={DryGin}
                                alt="Gin"
                                />

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
                                    <img src={GinStill} alt="" className="img-fluid"/>
                                </Link>
                        </div>
                        <p className="spacer" />
                        <div className="main-body-top-content-products-wrapper">
                                <h2 className="text-center">Our Whiskies</h2>
                                <Link className="product-links" to="/ourwhiskies" >
                                    <img src={WhiskyStill} alt="" className="img-fluid "/>
                                </Link>
                        </div>
                    </div>
                </div>
                <div className="main-body-middle-content">
                    {/* <div className="main-body-middle-content-awards pb-5">
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
                    </div> */}
                    <div className="main-body-middle-content-products">
                        <div className="main-body-middle-content-products-wrapper">
                            <h2 className="text-center">Our Whiskies</h2>
                            <Link className="product-links" to="/ourwhiskies" >
                                <img src={WhiskyStill} alt="" className="img-fluid"/>
                            </Link>
                        </div>
                        <p className="spacer" />
                        <div className="main-body-middle-content-products-wrapper">  
                            <h2 className="text-center">Our Gins</h2>
                            <Link className="product-links" to="/ourgins">
                                <img src={GinStill} alt="" className="img-fluid"/>
                            </Link> 
                        </div>            
                    </div>
                    <div className="main-body-middle-content-description">
                        <img src={Design} alt="" className="img-fluid pb-5"/>
                        <h2 className="pt-2">Nestled in the heart of the beautiful Cotswolds countryside, producing Outstanding Natural Spirits since 2014</h2>
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