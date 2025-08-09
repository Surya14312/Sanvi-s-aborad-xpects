// src/components/ErrorBoundary.jsx
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error Boundary Caught:", error, errorInfo);
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: "40px",
          textAlign: "center",
          background: "#fff0f0",
          color: "#a00",
          minHeight: "50vh"
        }}>
          <h1>⚠ Something went wrong</h1>
          <p>{this.state.error?.message || "An unexpected error occurred."}</p>
          <button
            onClick={this.handleReload}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              background: "#a00",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "6px"
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
