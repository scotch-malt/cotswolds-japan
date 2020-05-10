import React from "react";
import "../styles/header.scss";
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
        <div className="header">
            <div className="header-container">
                    <div className="header-container-logo">
                        <img className="responsive" src={Logo} alt=""/>
                    </div>
                    <div className="header-container-links">
                        {pages.map(page => {
                            return <Link to={page.node.fields.slug}>{page.node.frontmatter.title}</Link>
                        })}
                    </div>
            </div>
        </div>
    );
}
export default Header;

