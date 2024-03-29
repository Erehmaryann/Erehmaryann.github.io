import type { FC } from "react";
import { lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const MainNav = lazy(() => import("./components/nav-bar/main-nav"));
const MobileNav = lazy(() => import("./components/nav-bar/mobile-nav"));
const Team = lazy(() => import("./pages/team/team"));
const Home = lazy(() => import("./pages/home/home"));
const About = lazy(() => import("./pages/about-us/about-us"));
const WebDev = lazy(() => import("./pages/web-dev/web-dev"));
const MobileDev = lazy(() => import("./pages/mobile-dev/mobile-dev"));
const SoftwareDev = lazy(
  () => import("./pages/cus-software-dev/cus-software-dev")
);
const Enterprise = lazy(() => import("./pages/enterprise/enterprise"));
const Artificial = lazy(
  () => import("./pages/artificial-intel/artificial-intel")
);
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
            <Route path="about-us" element={<About />} />
            <Route path="web-dev" element={<WebDev />} />
            <Route path="mobile-dev" element={<MobileDev />} />
            <Route path="software-dev" element={<SoftwareDev />} />
            <Route path="enterprise" element={<Enterprise />} />
            <Route path="artificial" element={<Artificial />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </ThemeContextWrapper>
    </div>
  );
};

export default App;
