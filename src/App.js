import React, { Component } from 'react';

class App extends Component {
  render() {
    // const dom = <input type="button" onClick={() => {console.log("hello")}} />;
  	// return dom;
    return (
      <React.Fragment>
        <label>bar</label>
        <input type="text" onClick={() => {console.log("hello")}} />
      </React.Fragment>
    )
  }
}

export default App;
