import React, { Component } from 'react';

class ShowOtherAdviceButton extends Component {
  state = {
    advice: ""
  };

  loadAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const { slip: { advice } } = await response.json();
    this.setState({ advice });
  };

  async componentDidMount() {
    await this.loadAdvice();
  }

  render() {
    return (
      <div className="ShowOtherAdviceButton">
        <p className="Advice">{this.state.advice || "…"}</p>
        <button className="Advice-other-advice-button" onClick={this.loadAdvice}>
          Show other advice
        </button>
      </div>
    );
  }
}
export default ShowOtherAdviceButton;