import React, { Component, ErrorInfo } from "react";
import { State, Props } from "./types";

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-[1.5rem] text-red-700">
            Sorry.. there was an error
          </h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
