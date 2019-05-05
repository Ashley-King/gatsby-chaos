/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import './bootstrap.min.css'
import Header from "./header"
import "./layout.css"

// const GlobalStyle = createGlobalStyle`
//   *{
//     margin: 0;
//     padding:0;
//   }
//   body{ 
//     /* background-color: mediumseagreen; */
//   }

// `

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <nav>
        <ul className='nav'>
          <li className='nav-item'><a href="/">Home</a></li>
          <li className='nav-item'><a href="/page-2/">Page 2</a></li>
          <li className='nav-item'><a href="/products/testing/">Testing</a></li>
          <li className='nav-item'><a href="/images/">Images</a></li>
          <li className='nav-item'><a href="/wine-products/">Products</a></li>
        </ul>
        </nav>
        
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
          
        >

          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
