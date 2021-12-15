import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
      <div className='Hero'>
          <div className='HeroGroup'>
              <Seo title="Home" />
              <h1>Learn To <br /> Design And Code React apps</h1>
              <p>bobob guyfyc op[oiu tdxfx</p>
              <Link to="/page-2/">Go to page 2</Link>
          </div>
      </div>
  </Layout>
)

export default IndexPage
