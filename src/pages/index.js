// external libs
import React from "react"
import { graphql, Link } from "gatsby"

// internal components
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


// assets

// style
import "../styles/index.scss";

class IndexPage extends React.Component {
  render(){
    const data = this.props.data.site.siteMetadata.title
    console.log(data)
    return(
      <React.Fragment>
      <SEO title="Home" />

        <h1>{data}</h1>
        <p>test</p>

      </React.Fragment>
    )
  }
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
