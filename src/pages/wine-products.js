import React from 'react'
import Layout from '../components/layout';

import {Link, StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'


export default function WineProducts({data}) {

 return (
    <Layout>
     <h1>Things We Sell:</h1>
      {data.wines.edges.map(({node:wine})=> (
        <div key={wine.id} style={{padding: '1rem', margin: '1rem 0'}}>
         
        <div style={{maxWidth: '250px', marginBottom: '1rem' }}>
         <Img fixed={wine.image.fixed} />
        </div>
          <span style={{marginRight: '1rem'}}><strong>Product:</strong> {wine.title} </span>
          <span><strong>Price:</strong> ${wine.price}</span>
        <Link to={`/products/${wine.title}`}>
         <h3>Details</h3>
        </Link>
        
        
        </div>
        
      )
        
      )}
    </Layout>
  )
}

export const query = graphql`
 {
  wines:allContentfulProduct {
    edges {
      node {
        id
        title
        description {
          description 
        }
        price
        image {
          fixed(width:300) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`