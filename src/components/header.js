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
             limit: 3
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
                  <Link className="header-nav-links" to={pages[2].node.fields.slug}>{pages[2].node.frontmatter.title}</Link>
                </div>
                <div className="nav-link active">
                  <Link className="header-nav-links" to={pages[0].node.fields.slug}>{pages[0].node.frontmatter.title}</Link>
                </div>
                <div className="nav-link active">
                  <Link className="header-nav-links" to={pages[1].node.fields.slug}>{pages[1].node.frontmatter.title}</Link>
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

