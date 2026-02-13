import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ error });
  }
  render() {
    if(this.state.error) {
      return <div className="Error">Something went wrong: {this.state.error.message}</div>
    }
    return this.props.children;
  }
}
