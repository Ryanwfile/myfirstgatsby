import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({data}) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {/* {console.log(data.allFile.edges)} */}
           <ul>
               {
                   data.allFile.edges.map(node => {
                       return <li key={node.node.name}>{node.node.name} </li>
                   })
               }
           </ul>
        </Layout>
    )
}

export const query = graphql`
query{
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      edges {
        node {
          name
        }
      }
    }
  }
`
export default BlogPage