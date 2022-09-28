import React from 'react'
import ReactMarkdown from 'react-markdown'

import BlogItem from '../components/BlogItem'
import firstPost from '../assets/blogposts/first.md'
import secondPost from '../assets/blogposts/second.md'
import thirdPost from '../assets/blogposts/third.md'

import styles from '../styles/Blog.module.scss'

export const blog = () => {
  return (
    <div className={styles.container}>
        <h1>My Blogs</h1>
        <BlogItem title="Let's start journaling" date="28 Sep 2022" tag="Personal">
          <ReactMarkdown>{thirdPost}</ReactMarkdown>
        </BlogItem>
        <BlogItem title="What is tensor search?" date="14 Sep 2022" tag="Tech">
          <ReactMarkdown>{secondPost}</ReactMarkdown>
        </BlogItem>
        <BlogItem title="Why I made this website" date="27 Aug 2022" tag="Career">
          <ReactMarkdown>{firstPost}</ReactMarkdown>
        </BlogItem>
    </div>
  )
}

export default blog