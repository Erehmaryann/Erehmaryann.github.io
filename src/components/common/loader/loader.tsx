import React from "react";

const Logo = React.lazy(() => import("./logo"));

function Loader() {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 7000);
  }, []);
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-screen w-screen">
      {isVisible && <Logo />}
    </div>
  );
}

export default Loader;
