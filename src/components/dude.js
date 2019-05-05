import React from 'react'
import Img from 'gatsby-image'
import {StaticQuery, graphql} from 'gatsby'

 const getBeachQuery = graphql`
  {
    file(relativePath: { eq: "sebastien-jermer-27003-unsplash.jpg" }) {
       childImageSharp{
        fluid(maxWidth: 300){
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
      }
    }
  
 `

export default function Dude() {
  return (
    <StaticQuery
     query={getBeachQuery}
     render={data => {
      
      return(
        <div style={{maxWidth: '300px'}}>
         <h3>Here's a beach pic:</h3>
         <Img fluid={data.file.childImageSharp.fluid}/>
        </div>
          
      )
     }}/>
       
       
  )
}
