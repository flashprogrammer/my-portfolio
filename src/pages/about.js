import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Jumbotron } from "reactstrap"


const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="container">
        <Jumbotron>
            <h1>Hi, I'm Noel Lawrence Awitan</h1>
            <b><p>Full stack developer, hiker and a cyclist.</p></b>
            <p>I started from being a freelance Android developer before focusing on the web development. I enjoy building website that helps people to live better.</p>
            <br />
            <i class="fas fa-coffee"></i>
        </Jumbotron>
    </div>
  </Layout>
)

export default AboutPage
