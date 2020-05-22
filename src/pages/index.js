import React, { Suspense } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import GoodPasswordInfo from "../components/GoodPasswordInfo"


const IndexPage = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <Layout>
      <SEO title="Password Generator | Universal Equations"/>
      <Hero/>
      <GoodPasswordInfo/>
    </Layout>
  </Suspense>

)

export default IndexPage
