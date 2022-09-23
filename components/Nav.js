import React, {useState} from 'react'
import Image from 'next/image'

import Logo from '../assets/img/logo.svg'
import Contact from '../assets/img/contact.svg'
import Link from 'next/link'

import styles from '../styles/Nav.module.scss'
import Socials from './Socials'
import { NodeNextRequest } from 'next/dist/server/base-http/node'

const Nav = () => {

  const [navState, setNavState] = useState("nav_menu")
  const [menuButton, setMenuButton] = useState("M E N U")

  const navToggle = () => {
    if (navState === 'nav_menu') {
      setNavState('nav_menu nav_active')
      setMenuButton('C L O S E')
    } else {
      setNavState('nav_menu')
      setMenuButton('M E N U')
    }
  }

  return (
    <nav className={styles.container} style={{backgroundColor: navState === 'nav_menu' ? "#ffffff" : "#C3D4E5"}}>
      <div className={styles.logo}>
      <Link href="/">
        <Image src={Logo} alt="logo" style={{height: "30px", width: "30px"}} />
      </Link>
      </div>
      <p>|</p>
      <p className={styles.menuButton} onClick={navToggle}>{menuButton}</p>
      <div className={navState} >
        <div style={{display: "flex", alignItems: "center", paddingLeft: "2.5rem", gap: "1.5rem"}}>
          <span style={{width: "5rem", height: "2px", backgroundColor: "#143D66"}} />
          <Socials />
        </div>
        <div style={{display: 'flex'}}>
        <ul className={styles.menuItems} >
          <li>
            <div>
              <Link href="/">
                <h1 className={styles.menuItem} onClick={navToggle}>Home</h1>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link href="/about" onClick={navToggle}>
                <h1 className={styles.menuItem} onClick={navToggle}>About</h1>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link href="/projects">
                <h1 className={styles.menuItem} onClick={navToggle}>Projects</h1>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link href="/blog">
                <h1 className={styles.menuItem} onClick={navToggle}>Blog</h1>
              </Link>
            </div>
          </li>
        </ul>
        <ul className={styles.menuItemsDescription}>
          <p>Back to the home page</p>
          <p>A bit about me and my background</p>
          <p>Some of my passion projects</p>
          <p>Random pieces of writing</p>
        </ul>
        </div>
      </div>
      <style jsx>{
          `
          .nav_menu {
            position: fixed;
            display: flex;
            top: 15vh;
            padding-top: 1.5rem;
            padding-left: 1rem;
            height: calc(85vh);
            width: calc(100vw - 2rem);
            flex-direction: column;
            transform: translateY(-120%);
            transition: 0.5s ease-in-out;
            z-index: 1;
            background-color: #C3D4E5;
            border-bottom: 1rem solid #ffffff;
        }
        
        .nav_active {
            transform: translateY(0%);
        }
          `
        }</style>
    </nav>
  )
}

export default Nav
