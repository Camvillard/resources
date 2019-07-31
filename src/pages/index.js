// external libs
import React from "react"
import { graphql, Link } from "gatsby"

// internal components
import CategoryLayout from "../components/category-layout"
import ResourceCard from "../components/resource-card"
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

    const typography = data.filter( d => d.node.table === "typography")
    const colors = data.filter( d => d.node.table === "colors")
    const misc = data.filter( d => d.node.table === "misc")

    console.log(colors)
    return(
      <React.Fragment>
      <SEO title="Home" />

      <div className="category-container aqua">


        <div className="category-title">
          <h2><span>1</span>fonts & <br/> typography</h2>
        </div>


        <div className="resource-container">
          { typography && (
            typography.map( data => <ResourceCard
              resource={data}
              key={data.node.id}
              color="aqua"/>
            )
          )}
      </div>



      </div>





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
          table
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


