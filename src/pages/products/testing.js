import React from 'react'
import Layout from '../../components/layout'
import { Link } from "gatsby"


export default function testing() {
  return (
    <Layout>
      <h1>testing</h1>
      <Link to="/page-2/">Go to page 2</Link>
    <Link to="/">Home</Link>
    </Layout>
    
  )
}
