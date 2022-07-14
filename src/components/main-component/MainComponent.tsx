import { FC, lazy } from "react";

const ThemeSwitch = lazy(() => import("../theme-switch/ThemeSwitch"));

const MainComponent: FC = () => {
  return (
    <div className="font-sans flex flex-col justify-center items-center h-screen dark:bg-zinc-700 dark:text-white">
      <img className="hidden dark:block" src="/logo-dark.png" width={200} alt="React Logo" />
      <img className="block dark:hidden" src="/logo-light.png" width={200} alt="React Logo" />
      <h1 className="text-2xl">Hello World!</h1>
      <h2>React + TailwindCSS Dark Mode App</h2>
      <div className="mt-2">
        <ThemeSwitch />
      </div>
    </div>
  )
}

export default MainComponent