import { FC, SyntheticEvent, useState } from "react";
import styles from "./Header.module.scss";
import Container from "../Container/Container";
import { ReactComponent as Logo } from "../../static/icons/logo.svg";
import { headerData } from "./data";
import cn from "clsx";

const Header: FC = () => {
  const [currentPage, setCurrentPage] = useState("главная");

  const handleChangePage = (e: SyntheticEvent<HTMLLIElement>) => {
    setCurrentPage(e.currentTarget.id);
  };

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Logo className={styles.logoIcon} />
        <nav className={styles.navBox}>
          {headerData &&
            headerData.map((item) => (
              <li
                key={item.id}
                id={item.title}
                className={cn(
                  styles.navBoxItem,
                  currentPage === item.title && styles.active
                )}
                onClick={handleChangePage}
              >
                <a className={styles.navBoxItemTitle}>{item.title}</a>
              </li>
            ))}
        </nav>
      </Container>
    </header>
  );
};

export default Header;
