import React from 'react'
import Layout from '../components/layout'
import {graphql, Link} from 'gatsby'
import Img from 'gatsby-image'

export default function ProductTemplate({data}) {
 const {title, price} = data.contentfulProduct
 const {description} = data.contentfulProduct.description
 const fluid = data.contentfulProduct.image.fluid 
 return (
    <Layout>
      
      <div style={{maxWidth: '400px'}}>
      <Img fluid={fluid} />
      </div>
      <div style={{
       padding: '15px 0'
      }}>
      <span style={{fontWeight: 'bold',
            color: 'darkslategray',
            marginRight: '1rem' 
            }}>{title}</span>
      <span style={{color:'maroon'}}>${price} </span>  
      </div>
      <p style={{width: '400px'}}>
       {description}
      </p>
      <Link to='/wine-products/'><h2>Back to Products</h2></Link>
    </Layout>
  )
}

export const query = graphql`
  query($id:String!){
 contentfulProduct(id: {eq: $id}) {
   id
   title
   price
   description{
     description
   }
   image{
     fluid{
       ...GatsbyContentfulFluid_tracedSVG
     }
   }
 }
  }
`


