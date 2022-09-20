import * as React from 'react'
import Image from 'next/image'

import Logo from '../assets/img/logo.svg'
import Contact from '../assets/img/contact.svg'
import Link from 'next/link'

const pages = ['A B O U T', 'P R O J E C T S', 'B L O G']

const Nav = () => {

  return (
    <nav>
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
            <Link href="/about">
              About
            </Link>
            <Link href="/projects">
              Projects
            </Link>
            <Link href="/blog">
              Blog
            </Link>
          </li>
        </ul>
    </nav>
  )
}

export default Nav
