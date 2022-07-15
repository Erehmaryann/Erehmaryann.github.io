import type { FC } from "react";
import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const MainNav = lazy(() => import("./components/nav-bar/main-nav"));
const ThemeContextWrapper = lazy(() => import("./context/ThemeContextWrapper"));

const App: FC = () => {
  return (
    <ThemeContextWrapper>
      <BrowserRouter>
        <MainNav />
        <Routes></Routes>
      </BrowserRouter>
    </ThemeContextWrapper>
  );
};

export default App;
