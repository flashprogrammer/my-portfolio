import React from "react"

import Layout from "../components/layout"
import AboutPage from "./about"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <AboutPage />
      </Layout>
      <Footer />
    </>
  )
}

export default IndexPage
