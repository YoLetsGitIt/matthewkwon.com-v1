import Head from 'next/head'
import Image from 'next/image'

import LinkedIn from '../assets/img/linkedin.svg'
import Github from '../assets/img/github.svg'
import Instagram from '../assets/img/instagram.svg'

import styles from '../styles/Home.module.scss'
import Socials from '../components/Socials'

export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <h1 className={styles.intro}>
          Hi, I‘m<span>{' '}Matthew</span>
        </h1>
        <h1>a <span>Front-end Developer</span> and <span>UX Designer</span> in <span>Melbourne</span></h1>
        <Socials/>
      </div>
      <div>

      </div>
    </div>
  )
}
