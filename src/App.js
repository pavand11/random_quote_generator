import React, { Component } from "react";
import axios from "axios";
import "./App.css";
export class App extends Component {
  state = { advice: "" };
  componentDidMount() {
    this.fetchAdvice();
  }
  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((reponse) => {
        const { advice } = reponse.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <div className="heading">"{advice}"</div>
          <button className="button" onClick={this.fetchAdvice}>
            <span>click here</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
