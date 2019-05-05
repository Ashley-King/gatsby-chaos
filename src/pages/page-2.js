import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="container">
      <div className="row">
        <div className="col-6">Herrow</div>
        <div className="col-6">world</div>
      </div>
    </div>
    <Link to="/">Home</Link>
  </Layout>
)

export default SecondPage
