import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import logo1 from '../images/logo-sketch.png'
import logo2 from '../images/logo-figma.png'
import logo3 from '../images/logo-studio.png'
import logo4 from '../images/logo-framer.png'
import logo5 from '../images/logo-react.png'
import logo6 from '../images/logo-swift.png'

import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/Card";

const IndexPage = () => (
  <Layout>
      <div className='Hero'>
          <div className='HeroGroup'>
              <Seo title="Home" />
              <h1>Learn To <br /> Design And Code React apps</h1>
              <p>bobob guyfyc op[oiu tdxfx</p>
              <Link to="/page-2/">Go to page 2</Link>
              <div className="Logos">
                  <img src={logo1} width="50" />
                  <img src={logo2} width="50" />
                  <img src={logo3} width="50" />
                  <img src={logo4} width="50" />
                  <img src={logo5} width="50" />
                  <img src={logo6} width="50" />
              </div>
              <svg width="100%" height="172" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="white">
                      <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
            M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;
            M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;

            M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z
            "
                      />
                  </path>
              </svg>
          </div>
          <div className='Cards'>
              <h2>11 courses more coming</h2>
              <div className="CardGroup">
                  <Card
                      title="Design System"
                      text="10 sections"
                      image={require('../images/wallpaper.jpg').default} />
                  <Card
                      title="React for Designers"
                      text="12 sections"
                      image={require('../images/wallpaper2.jpg').default} />
                  <Card
                      title="Sound Design"
                      text="5 sections"
                      image={require('../images/wallpaper3.jpg').default} />
                  <Card
                      title="ARKit 2"
                      text="10 sections"
                      image={require('../images/wallpaper4.jpg').default} />
              </div>
          </div>
      </div>
  </Layout>
)

export default IndexPage
