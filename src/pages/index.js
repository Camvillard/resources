// external libs
import React from "react"
import { graphql, Link } from "gatsby"

// internal components
import CategoryLayout from "../components/category-layout"
import Image from "../components/image"
import SEO from "../components/seo"


// assets

// style
import "../styles/index.scss";

class IndexPage extends React.Component {
  render(){
    const site = this.props.data.site.siteMetadata.title
    const data = this.props.data.allAirtable.edges
    let counter = 0

    return(
      <React.Fragment>
      <SEO title="Home" />

      { data.map( d => {
        counter = counter + 1
        return <CategoryLayout data={d.node} key={d.node.id} counter={counter}/>
        }
      )}

      <footer>
        <p className="footer-credits">
          © {new Date().getFullYear()}, made with love by
          <a href="https://www.cdltbisou.com">camille | cdltbisou</a>
        </p>
      </footer>


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
    allAirtable {
      edges {
        node {
          id
          recordId
          data {
            title
            comment
            link
            category
          }
        }
      }
    }
  }
`
