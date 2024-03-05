import { ReactNode } from "react";

import styles from "./Layout.module.scss";
import { Navigation } from "components/molecules/Navigation";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <header>
        <Navigation />
      </header>
      {children}
    </div>
  );
};
