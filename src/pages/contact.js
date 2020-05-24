import React from "react";
import { Button } from "react-bootstrap";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Facebook from "../images/facebook.svg";
import Instagram from "../images/instagram.svg";
import Twitter from "../images/twitter.svg";

import "../styles/contact.scss";

const Contact = ({data}) => {

    const pages = data.allMarkdownRemark.edges
    let distilleryInfo = "";
    pages.forEach(page => {
        if (page.node.frontmatter.title === "STOURTON DISTILLERY LOCATION") {
            distilleryInfo = page.node.html
        }
    })
    return (
        <Layout>
            <div className="contact">
                <div className="contact-main-content">
                    <h1>CONTACT US</h1>
                    <div className="contact-main-content-wrap">
                        <div className="contact-main-content-wrap-info">
                            <div dangerouslySetInnerHTML={{__html: distilleryInfo}} />
                            <div className="contact-main-content-wrap-info-social">
                              <img src={Facebook} alt="Facebook" className="img-fluid" title="Facebook"/>
                              <img src={Instagram} alt="Instagram" className="img-fluid" title="Instagram"/>
                              <img src={Twitter} alt="Twitter" className="img-fluid" title="Twitter"/>
                            </div>
                        </div>
                        <div className="contact-main-content-wrap-form">
                            <h4>INQUIRIES</h4>
                            <form name="contact" action="POST" data-netlify="true">
                              <ul>
                                <li>
                                  <label htmlFor="name">お名前<small className="text-danger"> *</small></label>
                                  <input type="text" name="name" placeholder="お名前" required/>
                                </li>
                                <li>
                                  <label htmlFor="email">Eメール<small className="text-danger"> *</small></label>
                                  <input type="text" name="email" placeholder="Eメール" required/>
                                </li>
                                <li>
                                  <label htmlFor="inquiry">お問い合わせ</label>
                                  <textarea name="inquiry" placeholder="お問い合わせ" id="inquiry" cols="30" rows="10"></textarea>
                                </li>
                              </ul>
                              <Button variant="info" type="submit">Submit</Button>{' '}
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </Layout>
        
    );
}

export default Contact;

export const pageQuery = graphql`
query contactQuery {
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
