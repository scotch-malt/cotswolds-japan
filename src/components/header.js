import React from "react";
import "../styles/header.scss";
import { Navbar, Nav, NavDropdown} from "react-bootstrap";
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
      console.log(pages)
    return (
          <Navbar className="header" collapseOnSelect expand="lg" bg="light" variant="light">
            <div class="navbar-brand">
              <div className="header-logo">
                <Link to="/"><img className="responsive" src={Logo} alt=""/></Link>
              </div>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <div class="nav-link active">
                <Link className="header-links" to={pages[2].node.fields.slug}>{pages[2].node.frontmatter.title}</Link>
              </div>
              <div class="nav-link active">
                <Link className="header-links" to="/contact">CONTACT</Link> 
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        // <div className="header">
        //     <div className="header-container">
        //         <div className="header-container-logo">
        //           <Link to="/"><img className="responsive" src={Logo} alt=""/></Link>
        //         </div>
        //         <div className="header-container-menu">
        //           <div className="header-container-menu-editable">
        //             {pages.map(page => {
        //                   return <Link to={page.node.fields.slug} className="header-container-menu-editable-links">{page.node.frontmatter.title}</Link>
        //               })}
        //           </div>
        //           <div className="header-container-menu-fixed">
        //              <Link to="/contact" className="header-container-menu-fixed-links">CONTACT</Link>
        //           </div> 
        //         </div>
        //     </div>
        // </div>
    );
}
export default Header;

