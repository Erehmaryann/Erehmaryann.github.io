import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

const App = lazy(() => import("./App"));
const Loader = lazy(() => import("./components/common/loader/loader"));
const ErrorBoundary = lazy(() => import("./components/error-boundary"));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ErrorBoundary>
    <Suspense fallback={<Loader />}>
      <Router>
        <App />
      </Router>
    </Suspense>
  </ErrorBoundary>
);
