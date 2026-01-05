import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds + 1,
      }));
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="timer">
        <h2>Timer Component</h2>
        <p>Seconds Elapsed: {this.state.seconds}</p>
      </div>
    );
  }
}
export default Timer;
