import { NavItem } from "components/atoms/NavItem";
import { useStaticDataMock } from "hooks/useStaticDataMock";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
  const { navigation } = useStaticDataMock();

  return (
    <nav className={styles.navigation}>
      <ul>
        {navigation.map((nav) => (
          <NavItem
            key={nav.id}
            name={nav.name}
            path={nav.path}
            icon={nav.icon}
          />
        ))}
      </ul>
    </nav>
  );
};
