import React from "react";

const Logo = React.lazy(() => import("./logo"));

function Loader() {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 10000);
  }, []);
  return (
    <div className="bg-[#fff] h-screen w-screen opacity-50">
      {isVisible && <Logo />}
    </div>
  );
}

export default Loader;
