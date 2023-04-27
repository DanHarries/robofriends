import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      msg: "",
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, msg: info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Ooooops. That is not good.</h1>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
