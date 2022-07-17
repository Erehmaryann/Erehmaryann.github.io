import type { FC } from "react";
import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const MainNav = lazy(() => import("./components/nav-bar/main-nav"));
const MobileNav = lazy(() => import("./components/nav-bar/mobile-nav"));
const Team = lazy(() => import("./pages/team/team"));
const Home = lazy(() => import("./pages/home/home"));
const Footer = lazy(() => import("./components/footer/footer"));
const ThemeContextWrapper = lazy(() => import("./context/ThemeContextWrapper"));

const App: FC = () => {
  return (
    <div id="App">
      <ThemeContextWrapper>
        <BrowserRouter>
          <MainNav />
          <MobileNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="team" element={<Team />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </ThemeContextWrapper>
    </div>
  );
};

export default App;
