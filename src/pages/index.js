import React from "react"
import { Link } from "gatsby"
import Heading from "../components/miao"



const IndexPage = () => (
  <div>

    <div style={{ color: `purple` }}>
      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />

      <Link to="/about/">Go to About page</Link>
      <Link to="/contacts/">Go to Contact page</Link>
    </div>








  </div>
)

export default IndexPage
