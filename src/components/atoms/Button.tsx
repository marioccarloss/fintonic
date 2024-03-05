import { ReactNode, ButtonHTMLAttributes } from "react";
import classNames from "shared/classNames";
import styles from "./Button.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: "primary" | "secondary" | "icon" | "disabled";
  size?: "large" | "medium" | "small";
  children: ReactNode;
}

export const Button = ({
  mode = "primary",
  size = "medium",
  ...props
}: ButtonProps) => {
  const components = {
    className: classNames(
      styles.btn,
      styles[`btn--${mode}`],
      styles[`btn--${size}`],
    ),
    ...props,
  };

  return <button {...components} />;
};
