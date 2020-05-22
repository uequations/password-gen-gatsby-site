import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import GoodPasswordInfo from "../components/GoodPasswordInfo"
import Skeleton from "@material-ui/lab/Skeleton"

export default function IndexPage() {

  const [isLoading, setIsLoading] = useState({ isLoading: true })

  useEffect(() => {
    setIsLoading(false)
  }, [isLoading])

  return (isLoading ? (<Skeleton variant="rect"/>) : (
    <Layout>
      <SEO title="Password Generator | Universal Equations"/>
      <Hero/>
      <GoodPasswordInfo/>
    </Layout>))
}
