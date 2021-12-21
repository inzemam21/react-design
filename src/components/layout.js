/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Helmet from 'react-helmet'
import Footer from '../components/Footer';

const Layout = ({ children }) => {

  return (
      <div>
          <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                  { name: 'description', content: data.site.siteMetadata.description },
                  { name: 'keywords', content: data.site.siteMetadata.keywords },
              ]}
          />
          <Header />
          {children()}
          <Footer data={data}>
              Backgrounds made in Cinema 4D, iOS app in Swift, site in React. <a href="mailto:support@designcode.io">Email us</a> to ask anything. © 2018
          </Footer>
      </div>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
      edges {
        node {
          title
          url
          createdAt
        }
      }
    }
  }`

export default Layout
