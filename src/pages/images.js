import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'


export default function Images({data}) {
  
//  const imgs = data.allFile.edges;
 const imgs = data.allContentfulAsset.edges;
 console.log(data)
 return (
    <Layout>
     <h5>All Image Names in Contentful</h5>
      {imgs.map(({node}) => (
        <h6 key={node.id}>{node.file.fileName}</h6>
      ))}
    
    </Layout>
  )
}

export const query = graphql`
  
    {
  allContentfulAsset {
    edges {
      node {
        id
        file {
          
          fileName
        }
        
      }
    }
  }
}

`
// old query from local path - can't use relative paths with netlify in production

// {
//   allFile(filter:{dir:{eq: "/Users/ashley/Desktop/gat/src/images"}}){
//      edges{
//        node{
//          relativePath
//        }
//      }
//    }
//  }