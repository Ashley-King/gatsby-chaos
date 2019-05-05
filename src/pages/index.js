import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {FaAsterisk} from 'react-icons/fa'
import Info from '../components/info'
import Dude from '../components/dude'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Info/>
    <Link to="/images/" style={{color: 'mediumseagreen'}}>images</Link>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Dude/>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
     
      <Image />
      
    </div>
    <FaAsterisk className='icon'/>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/products/testing/">Go to testing</Link>
    
  </Layout>
)



export default IndexPage
