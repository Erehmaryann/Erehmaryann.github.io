import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import ErrorBoundary from "./components/error-boundary";
import "./index.css";

const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ErrorBoundary>
    <Suspense fallback={<div>Loading...</div>}>
    <App />
    </Suspense>
  </ErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
