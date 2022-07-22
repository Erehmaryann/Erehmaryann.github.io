import React from "react";

const Logo = React.lazy(() => import("./logo"));

function Loader() {
  const [isVisible, setIsVisible] = React.useState<boolean>(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-screen w-screen">
      {isVisible && <Logo />}
    </div>
  );
}

export default Loader;
