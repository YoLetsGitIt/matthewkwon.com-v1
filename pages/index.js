import Head from 'next/head'
import Image from 'next/image'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

import LinkedIn from '../assets/img/linkedin.svg'
import Github from '../assets/img/github.svg'
import Instagram from '../assets/img/instagram.svg'

import styles from '../styles/Home.module.scss'
import Socials from '../components/Socials'

export default function Home() {

  const LogoAnimation = () => {
    const mesh = useRef(null)
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.002))
  
    return (
      <>
        <mesh ref={mesh}>
          <sphereGeometry args={[1, 40, 40]} />
          <meshStandardMaterial attach='material' color='#143D66' wireframe={true} />
        </mesh>
      </>
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Matthew Kwon</title>
      </Head>
      <div className={styles.profile}>
        <h1 className={styles.intro}>
          Hi, I‘m<span>{' '}Matthew</span>
        </h1>
        <h1>a <span>Front-end Developer</span> and <span>UX Designer</span> in <span>Melbourne</span></h1>
        <Socials/>
      </div>
      <div className={styles.animation}>
        <Canvas shadows camera={{ position: [-5, 2, 10], fov: 20 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 15, 10]} angle={0.3} castShadow />
          <LogoAnimation />
        </Canvas>
      </div>
    </div>
  )
}
