// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
// import {HorrorExport} from '../images/horror-export.js'
// Step 2: Define your component
const IndexPage = () => {
  // To get the filename
console.log(`Filename is ${__filename}`);
  
// To get the directory name
console.log(`Directory name is ${__dirname}`);
console.log("THIS file path works locally ../images/horror.png")
  return (
   <Layout pageTitle="Home Page">
     <p>Source is URL https: ...</p>
     <StaticImage
      alt="Carlin face"
      src="https://api.time.com/wp-content/uploads/2017/09/carlin.jpeg?w=800&quality=85"
     />
     <p>The below image is local, imported with webpack</p>
     <StaticImage 
     alt = "Uhh test image would go here, LOCAL TEST"
     src= "../images/horror.png"/>
   <StaticImage 
     alt = "Uhh test image would go here, LOCAL TEST"
     src= "/images/horror.png"/>
        <StaticImage 
     alt = "Uhh test image would go here, LOCAL TEST"
     src= "horror.png"/>
   </Layout>
  )
}
export default IndexPage