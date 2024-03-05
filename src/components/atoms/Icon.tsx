import * as icons from "components/atoms/icons/IconsCollection";

export type IconsType = keyof typeof icons;

export interface IconProps {
  icon: IconsType;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export const Icon = ({ size = "small", icon, ...props }: IconProps) => {
  return (
    <span className={`icon--${size} flex`} {...props}>
      {icons[icon]()}
    </span>
  );
};
