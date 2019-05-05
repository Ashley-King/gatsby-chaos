/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
// You can delete this file if you're not using it
module.exports.createPages = ({graphql, actions}) => {
 const {createPage} = actions
 const productPageTemplate = path.resolve('./src/templates/product-template.js')
 // grab each product and id
 return graphql(`
 {
  allContentfulProduct {
    edges {
      node {
        id
        title
       
        }
      }
    }
  }
 `).then(result => {
   // loop through data array
   result.data.allContentfulProduct.edges.forEach(({node}) =>{
     createPage({
      path: `products/${node.title}`, 
      component: productPageTemplate, 
      context:{id: node.id}
     })
   } )
 }).catch(err => console.log(err))
}