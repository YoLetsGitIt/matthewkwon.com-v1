import Head from 'next/head'
import Image from 'next/image'

import LinkedIn from '../assets/img/linkedin.svg'
import Github from '../assets/img/github.svg'
import Instagram from '../assets/img/instagram.svg'

import styles from '../styles/Home.module.scss'

export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <h1 className={styles.intro}>
          Hi, I‘m<span>{' '}Matthew</span>
        </h1>
        <h1>a <span>Front-end Developer</span> and <span>UX Designer</span> in <span>Melbourne</span></h1>
        <div className={styles.socials}>
          <a href='https://github.com/YoLetsGitIt' target='_blank' rel="noreferrer">
            <Image width="30px" height="30px" src={Github} alt="github"/>
          </a>
          <a style={{marginLeft: '20px', marginRight: '20px'}} href='https://www.linkedin.com/in/mmkwon' target='_blank' rel="noreferrer">
            <Image width="30px" height="30px" src={LinkedIn} alt="linkedin"/>
          </a>
          <a href='https://instagram.com/matthewkwon_' target='_blank' rel="noreferrer">
            <Image width="30px" height="30px" className={styles.link} src={Instagram} alt="instagram"/>
          </a>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}
