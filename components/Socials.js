import Image from 'next/image'

import LinkedIn from '../assets/img/linkedin.svg'
import Github from '../assets/img/github.svg'
import Instagram from '../assets/img/instagram.svg'

import styles from '../styles/Socials.module.scss'

export const Socials = () => {
  return (
    <div className={styles.socials}>
          <a href='https://github.com/YoLetsGitIt' target='_blank' rel="noreferrer">
            <Image width="25px" height="25px" src={Github} alt="github"/>
          </a>
          <a style={{marginLeft: '15px', marginRight: '15px'}} href='https://www.linkedin.com/in/mmkwon' target='_blank' rel="noreferrer">
            <Image width="25px" height="25px" src={LinkedIn} alt="linkedin"/>
          </a>
          <a href='https://instagram.com/matthewkwon_' target='_blank' rel="noreferrer">
            <Image width="25px" height="25px" className={styles.link} src={Instagram} alt="instagram"/>
          </a>
        </div>
  )
}

export default Socials