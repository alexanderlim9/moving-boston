import React, { useEffect } from "react";
import Header from "./header";

import "../styles/layout.css";
import styles from "./layout.module.css";
import { Menu } from "./menu/menu";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      {/* <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} /> */}
      <Menu />
      <div className={styles.content}>{children}</div>
      {/* <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          &copy; {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a>{' '}
          &amp;
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </div>
      </div>
    </footer> */}
    </>
  );
};

export default Layout;
