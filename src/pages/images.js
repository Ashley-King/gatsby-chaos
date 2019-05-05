import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'


export default function Images({data}) {
  
 const imgs = data.allFile.edges;
 return (
    <Layout>
     <h5>All Images</h5>
      {imgs.map(({node}) => (
        <h6 key={node.id}>{node.relativePath}</h6>
      ))}
     
    </Layout>
  )
}

export const query = graphql`
  {
   allFile(filter:{dir:{eq: "/Users/ashley/Desktop/gat/src/images"}}){
      edges{
        node{
          relativePath
        }
      }
    }
  }
 
`