import React from "react";
import "../styles/header.scss";
import { Navbar, Nav} from "react-bootstrap";
import Logo from "../images/logo.svg";
import { useStaticQuery, Link, graphql } from "gatsby"

const Header = () => {
    const data = useStaticQuery(
        graphql`
          query {
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
      console.log(pages)
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
      console.log(gin)
    return (
        <div className="header">
          <Navbar className="header-nav" collapseOnSelect expand="lg" bg="white" variant="light">
            <div className="navbar-brand">
              <div className="header-nav-logo">
                <Link to="/"><img className="responsive" src={Logo} alt=""/></Link>
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

