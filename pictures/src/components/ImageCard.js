import React from 'react'

class ImageCard extends React.Component {

  constructor(props) {
    super(props)

    this.state = { spans: 0 }

    this.imageRef = React.createRef()
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight

    const spans = Math.ceil(height / 10)

    this.setState({ spans })
  }

  render() {

    const { description, urls } = this.props.image

    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
        />
      </div>
    )
  }
}

export default ImageCard


// component flow
// 
// let the ImageCard render itself and its image
// reach into the DOM and figure out the height of the image
// set the image height on state to get the component to re-render
// when re-rendering, assign a 'grid-row-end; to make sure the
//  image takes up the appropriate space.

// React Refs
// 
// Gives access to a single DOM element
// We create refs in the constructor, assign them to instance
//  variables, then pass to a particular JSX element as props.