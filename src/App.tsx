import type { FC } from "react";
import { lazy } from "react";
import {
  BrowserRouter,
  Routes,
  // Route
} from "react-router-dom";

const MainNav = lazy(() => import("./components/nav-bar/main-nav"));
const Hero = lazy(() => import("./components/hero/hero"));
const Company = lazy(() => import("./components/company/company"));
const About = lazy(() => import("./components/about/about"));
const ThemeContextWrapper = lazy(() => import("./context/ThemeContextWrapper"));

const App: FC = () => {
  return (
    <ThemeContextWrapper>
      <BrowserRouter>
        <MainNav />
        <Hero />
        <Company />
        <About />
        <Routes></Routes>
      </BrowserRouter>
    </ThemeContextWrapper>
  );
};

export default App;
