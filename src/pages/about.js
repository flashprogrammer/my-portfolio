import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCode, FaHiking, FaBiking, FaMapMarkedAlt } from "react-icons/fa"
import { Jumbotron, Col, Row } from "reactstrap"


const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: {eq: "me.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data);

  return (
    <Layout>
      <div>
      <SEO title="About" />
        <Row>
          <Col md="4">
              <Img fluid={data.image.childImageSharp.fluid}  />
          </Col>
          <Col md="8">
            <Jumbotron>
                <h1>Hi, I'm Noel Lawrence Awitan</h1>
                <b><p>Full stack web developer <FaCode color="red"/> , hiker <FaHiking color="red"/> and a cyclist <FaBiking color="red"/> .</p></b>
                <p>I started from being a freelance Android developer before focusing on the web development. I enjoy building website that helps people to live better.</p>
                <br />

                <p><FaMapMarkedAlt color="green" /> Laguna, Philippines</p>
            </Jumbotron>
          </Col>
        </Row>
        </div>
    </Layout>
  )
}

export default AboutPage
