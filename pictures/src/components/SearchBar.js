import React from 'react'

class SearchBar extends React.Component {

  state = { term: '' }

  render() {
    return(
      <div className="ui segment ">
        <form className="ui form">
          <div className="field">
            <label>Image Search:</label>
            <input type="text" value={this.state.term} onChange={ e => this.setState({ term: e.target.value })} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar


// onClick
// onChange
// onSubmit

// component flow
// 
// user types in input
// callback get invoked
// we call setState with the new value
// component re-renders
// input is told what its value is (coming from state)