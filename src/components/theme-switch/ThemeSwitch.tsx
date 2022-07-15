import type {FC} from "react";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const ThemeSwitch: FC = () => {
    const { currentTheme, changeCurrentTheme } = useContext(ThemeContext)

    return (
        <div className="mb-[-10px]"
            onClick={() => changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')}
        >
            <img src="/light-switch.png" className="block dark:hidden w-[30px]" alt="App Light Switch" />
            <img src="/dark-switch.png" className="hidden dark:block w-[30px]" alt="App Dark Switch" />
        </div>
    )
}

export default ThemeSwitch;