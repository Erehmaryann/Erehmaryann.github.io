import {ReactNode} from "react";

export type ButtonProps = {
    children: ReactNode;
    onClick: () => void;
    className?: string;
    type: "button" | "submit" | "reset";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
