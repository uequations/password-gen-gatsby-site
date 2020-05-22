import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import GoodPasswordInfo from "../components/GoodPasswordInfo"


const IndexPage = () => (
  <Layout>
    <SEO title="Password Generator | Universal Equations"/>
    <Hero/>
    <GoodPasswordInfo/>
  </Layout>
)

export default IndexPage
