// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
// Step 2: Define your component
const IndexPage = () => {
  return (
   <Layout pageTitle="Home Page">
     <p>I'm making this by following the Gatsby Tutorial.</p>
     <StaticImage
      alt="Carlin face"
      src="../images/halloweenCHangemymind.png"
     />
   </Layout>
  )
}
//"https://api.time.com/wp-content/uploads/2017/09/carlin.jpeg?w=800&quality=85"
// Step 3: Export your component
export default IndexPage