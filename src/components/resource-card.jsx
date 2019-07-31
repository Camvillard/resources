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

const ResourceCard = (props) => {
  const resource = props.resource.node.data
  return(
    <div className={`resource-card ${props.color}`}>

      <h3><a href={resource.link} target="_blank" rel="noopener noreferrer">{resource.title}</a></h3>
      <p>{resource.comment}</p>

    </div>
  )
}

export default ResourceCard;



