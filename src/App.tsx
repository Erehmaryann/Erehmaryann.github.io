import type { FC } from "react";
import { lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const MainNav = lazy(() => import("./components/nav-bar/main-nav"));
const MobileNav = lazy(() => import("./components/nav-bar/mobile-nav"));
const Team = lazy(() => import("./pages/team/team"));
const Home = lazy(() => import("./pages/home/home"));
const Footer = lazy(() => import("./components/footer/footer"));
const ThemeContextWrapper = lazy(() => import("./context/ThemeContextWrapper"));

const App: FC = () => {
  const location = useLocation();

  return (
    <div>
      <ThemeContextWrapper>
        <MainNav />
        <MobileNav />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Home />} />
            <Route path="team" element={<Team />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </ThemeContextWrapper>
    </div>
  );
};

export default App;
