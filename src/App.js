import React, { Component } from 'react';
import ShowOtherAdviceButton from './ ShowOtherAdviceButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShowOtherAdviceButton onClick={this.loadAdvice} />
      </div>
    );
  }
}
export default App;