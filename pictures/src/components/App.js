import React from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'


class App extends React.Component {

  state = { images: [] }

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    })

    this.setState({ images: response.data.results })
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar  onSearchSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default App


// App flow
// 
// component renders itself one time with no list of images
// onSearchSubmit method called
// request made to unsplash
//      [wait]
// request completed 
// set image data on state of App component
// app component re-renders and shows images