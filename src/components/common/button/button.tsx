import type { FC } from "react";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({
    children,
    onClick,
    type = "button",
    className = "",
    ...rest
}) => {
    return (
        <button 
            aria-label="button"
            onClick={onClick}
            type={type}
            className={className}
        >
            {children}
        </button>
    )
};

export default Button;