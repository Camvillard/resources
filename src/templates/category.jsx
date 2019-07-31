import React from "react"


class CategoryLayout extends React.Component {

  render() {
    const data = this.props.data
    const counter = this.props.counter
    const category = this.props.data.data.category

    return (
      <React.Fragment>

        <div className={`category-container ${counter % 2 === 0 ? 'even' : 'odd'}`}>

        <h2><span>{counter}</span>{category}</h2>

        </div>

      </React.Fragment>
    )
  }
}



export default CategoryLayout
