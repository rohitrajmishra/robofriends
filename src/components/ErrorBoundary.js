import React, { Component } from "react";

// We can wrap ErrorBoundary around the component which we want error handling
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <h1>Ooops That is not good!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
