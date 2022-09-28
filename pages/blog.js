import React from 'react'
import BlogItem from '../components/BlogItem'

import styles from '../styles/Blog.module.scss'

export const blog = () => {
  return (
    <div className={styles.container}>
        <h1>My Blogs</h1>
        <BlogItem title="Why I made this website" date="27 Aug 2022" tag="Career"/>
    </div>
  )
}

export default blog