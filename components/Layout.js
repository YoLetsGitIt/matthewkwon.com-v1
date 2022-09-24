import React from 'react'
import Head from 'next/head'

import Nav from './Nav'

export const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Matthew Kwon</title>
      </Head>
      <Nav/>
      {children}
    </div>
  )
}

export default Layout