import React from 'react'
import Header from './header'
import { Link } from 'gatsby'
import '../styles/layout.css'
import styles from './layout.module.css'
import { Menu } from './menu/menu';
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  LinkedinShareButton,
  EmailIcon,
  EmailShareButton
} from "react-share";

const shareUrl = "https://moving-boston-web.netlify.com/";
const iconSize = 28;

const Layout = ({children, displayFooter, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    {/* <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} /> */}
    <Menu/>
    <div className={styles.content}>{children}</div>
    <footer className={displayFooter ? styles.visible : styles.hidden}>
      <div className={styles.footerRow1}>
        <span><Link to={"/"}>Moving Boston 2030</Link></span>
        <div className={styles.navLinks}>
          <Link to={"/"}>Home</Link>
          <Link to={"/questions/questionone"}>Survey</Link>
          <Link to={"/about"}>About</Link>
        </div>
      </div>
      <div className={styles.footerRow2}>
        <span>&copy; {new Date().getFullYear()}</span>
        <div className={styles.socialLinks}>
          <p>Share this experience </p>
          <EmailShareButton url={shareUrl}>
            <EmailIcon
              size={iconSize}
              borderRadius={5}
              iconFillColor={"#2E2E2E"}
              bgStyle={{ fill: "white" }}
            />
          </EmailShareButton>
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon
              size={iconSize}
              borderRadius={5}
              iconFillColor={"#2E2E2E"}
              bgStyle={{ fill: "white" }}
            />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl}>
            <TwitterIcon
              size={iconSize}
              borderRadius={5}
              iconFillColor={"#2E2E2E"}
              bgStyle={{ fill: "white" }}
            />
          </TwitterShareButton>
          <LinkedinShareButton url={shareUrl}>
            <LinkedinIcon
              size={iconSize}
              borderRadius={5}
              iconFillColor={"#2E2E2E"}
              bgStyle={{ fill: "white" }}
            />
          </LinkedinShareButton>
        </div>
      </div>
    </footer>
  </>
)

export default Layout