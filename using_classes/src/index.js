import React from 'react'
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //   // default state of the app
  //   this.state = {latitude: null, errorMessage: ''}
  // }

  state = { latitude: null, errorMessage: '' }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // (position) => {
      //   // update state using setState
      //   this.setState({ latitude: position.coords.latitude })
      // },
      // (err) => {
      //   this.setState({ errorMessage: err.message })
      // }

      position => this.setState({ latitude: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    )
  }

  // componentDidUpdate() {
  //   console.log('My component was just udpated - it re-render ')
  // }

  // componentWillUnmount() {

  // }

  renderContent() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>
    } 

    if (!this.state.errorMessage && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude}/>
    }

    return <Spinner message="Please accept location request" />
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))




// Rules of State in Components
// 
// Only usable with class components
// You will confuse props with state
// "State" is a JS object that contains data relevant to a component
// Updating 'state' on a component causes the component
//  to (almost) instantly re-render
// State must be initialized when a component is created
// State can only be updated using the function 'setState'


// App Lifecycle
// 
// JS file loaded by browser
// Instance of App component is created
// App component 'constructor' function gets called
// State object is created and assigned to the 'this.state' property
// We call geolocation service
// React calls teh components render method
// App returns JSX, gets rendered to page as HTML
//                  ....
// We get result of geolocation
// We update our state object with a call to 'this.setState()'
// React sees that we update the state of a component
// React calls our 'render' method a second time
// Render method returns some (updated) JSX
// 

// Component Lifecycle Method
// 
// constructor{}
// render()
//  [content visible on scree]
// componentDidMount()
//  [sit and wait for updates]
// componentDidUpdate()
//  [sit and wait until this component is not longer shown]
// componentWillUnmount()

// Class - State - Lifecycle methods