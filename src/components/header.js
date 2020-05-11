import React from "react";
import "../styles/header.scss";
import { Navbar, Nav, NavDropdown} from "react-bootstrap";
import Logo from "../images/logo.svg";
import { useStaticQuery, Link, graphql } from "gatsby"

const Header = () => {
    // const data = useStaticQuery(
    //     graphql`
    //       query {
    //         allMarkdownRemark(
    //          limit: 3
    //        ) {
    //          totalCount
    //          edges {
    //            node {
    //              excerpt(pruneLength: 200)
    //              html
    //              frontmatter {
    //                title
    //                date(formatString: "MMMM DD, YYYY")
    //                tags
    //              }
    //              fields {
    //                slug
    //              }
    //            }
    //          }
    //        }
    //       }
    //     `
    //   )
    //   const pages = data.allMarkdownRemark.edges 
    //   console.log(pages)
    return (
          <Navbar className="header" collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand  href="#home">
              <div className="header-logo">
                <Link to="/"><img className="responsive" src={Logo} alt=""/></Link>
              </div>
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              
            </Nav>
            <Nav>
            <NavDropdown title="OUR SPIRITS" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Gin</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Whisky</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#deets">ABOUT</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                CONTACT
              </Nav.Link>
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

