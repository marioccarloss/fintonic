import { memo } from "react";
import { Link } from "react-router-dom";
import { Icon, IconsType } from "components/atoms/Icon";
import styles from "./NavItem.module.scss";

type NavItemProps = {
  name: string;
  path: string;
  icon?: IconsType;
};

const NavItem = memo(({ name, path, icon }: NavItemProps) => {
  return (
    <li className={styles.navItem}>
      <Link to={path}>
        {icon && <Icon icon={icon} />}
        <span>{name}</span>
      </Link>
    </li>
  );
});

NavItem.displayName = "NavItem";

export { NavItem };
