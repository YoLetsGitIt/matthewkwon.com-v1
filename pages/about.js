import Image from 'next/image'
import React from 'react'

import Profile from '../assets/img/profile.png'

import styles from '../styles/About.module.scss'

export const about = () => {

  const descriptions = ['Developer', 'UX Developer', 'Foodie', 'Aspiring Cook']

  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h1 className={styles.header}>
          About me: <span></span>
        </h1>
        <p>
          Hello! My name is Matthew and I‘m an ambitious learner, passionate in anything from
          front-end development to user experience research and design.
          <br />
          <br />
          I have experiences working on mobile applications including the product and experience
          design and am excited to learn more about how to ship amazing products to customers.
          <br />
          <br />
          <b>Technologies I‘ve worked with:</b>
          <ul className={styles.techList}>
            <li>JavaScript (ES6+)</li>
            <li>React/React Native</li>
            <li>TypeScript</li>
            <li>Figma</li>
            <li>UX User Testing</li>
            <li>Project Management</li>
          </ul>
        </p>
      </div>
      <div className={styles.profile}>
        <Image src={Profile} alt="profile" />
      </div>
    </div>
  )
}

export default about