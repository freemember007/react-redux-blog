import React, { Component } from 'react';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{'marginTop':30}}>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default App;
