import React from 'react'
import {StaticQuery, graphql} from 'gatsby'

const getImageNames = graphql`
{
 getImages:allFile(filter:{dir:{eq: "/Users/ashley/Desktop/gat/src/images"}}){
    edges{
      node{
        relativePath
      }
    }
  }
}
`


export default function Info() {
  return (
    <StaticQuery 
     query={getImageNames} 
     render={data => {
       const info = data.getImages.edges;
       return(info.map(edge => <div key={edge.node.relativePath}>{edge.node.relativePath}</div>))
     }}/>
  )
}
