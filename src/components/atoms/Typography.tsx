import { HTMLAttributes, ReactNode } from "react";

import classNames from "shared/classNames";
import { Icon, IconsType } from "components/atoms/Icon";
import styles from "./Typography.module.scss";

interface TypographyProps {
  mode?: "title" | "subtitle" | "body" | "caption" | "label" | "error";
  size?: "large" | "medium" | "small";
  icon?: IconsType;
  align?: "left" | "right" | "center" | "justify";
  children: ReactNode;
}

interface ComponentProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

export const Typography = ({
  mode = "body",
  size = "medium",
  align = "left",
  icon,
  children,
  ...props
}: TypographyProps & { htmlFor?: string }) => {
  const components: ComponentProps = {
    className: classNames(
      styles.typo,
      styles[`typography--${mode}`],
      styles[`typography--${size}`],
      icon ? styles["typography--icon"] : "",
      styles[`typography--${align}`],
    ),
    ...props,
  };

  if (mode === "title") {
    return <h1 {...components}>{children}</h1>;
  }

  if (mode === "subtitle") {
    return <h2 {...components}>{children}</h2>;
  }

  if (mode === "body") {
    return <p {...components}>{children}</p>;
  }

  if (mode === "caption") {
    return <p {...components}>{children}</p>;
  }

  if (mode === "error") {
    return <span {...components}>{children}</span>;
  }

  if (icon) {
    return (
      <span {...(components as TypographyProps)}>
        <Icon icon={icon} />
        {children}
      </span>
    );
  }

  return <span {...(components as HTMLAttributes<HTMLElement>)} />;
};
