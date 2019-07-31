import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import CategoryLayout from "../components/category-layout"
import SEO from "../components/seo"
import ResourceCard from "../components/resource-card";

class Typography extends React.Component {
  render(){
    const data = this.props.data.allAirtable.edges
    console.log(data)
    return(
      <React.Fragment>

      <Layout>
        <div className="category-container aqua">

        </div>

      </Layout>


      </React.Fragment>
    )
  }
}

export default Typography

export const query = graphql`
  query typoPage{
    allAirtable(filter: {table: {eq: "typography"}}) {
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
