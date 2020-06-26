import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby"
import { Navbar, Nav} from "react-bootstrap";
import Img from "gatsby-image";
import Logo from "../images/cotswolds_logo.png";
import "../styles/header.scss";

const Header = () => {
    const data = useStaticQuery(
        graphql`
          query {
            file(relativePath: { eq: "cotswolds_logo.png" }) {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            allMarkdownRemark(
             limit: 20
           ) {
             totalCount
             edges {
               node {
                 excerpt(pruneLength: 200)
                 html
                 frontmatter {
                   title
                   date(formatString: "MMMM DD, YYYY")
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
      )
      const pages = data.allMarkdownRemark.edges 
  
      let whisky = "";
      let gin = "";
      let about = "";
      pages.forEach((page, i) => {
        if (page.node.frontmatter.title === "OUR WHISKIES") {
          whisky = page.node.fields.slug
        }
        if (page.node.frontmatter.title === "OUR GINS") {
          gin = page.node.fields.slug
        }
        if (page.node.frontmatter.title === "ABOUT") {
          about = page.node.fields.slug
        }
      })
    
    return (
        <div className="header">
          <Navbar className="header-nav px-5" collapseOnSelect expand="lg" bg="white" variant="light">
            <div className="navbar-brand">
              <div className="header-nav-logo">
                <Link to="/">
                  <Img
                    fluid={data.file.childImageSharp.fluid} 
                  />
                  {/* <img width={200} className="img-fluid" src={Logo} alt=""/> */}
                  </Link>
              </div>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              </Nav>
              <Nav>
                <div className="nav-link active">
                  <Link className="header-nav-links" to={about}>ABOUT</Link>
                </div>
                <div className="nav-link active">
                  <Link className="header-nav-links" to={gin}>OUR GINS</Link>
                </div>
                <div className="nav-link active">
                  <Link className="header-nav-links" to={whisky}>OUR WHISKIES</Link>
                </div>
                <div className="nav-link active">
                  <Link className="header-nav-links" to="/contact">CONTACT</Link> 
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

    );
}
export default Header;

