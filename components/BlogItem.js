import { useState } from 'react'
import Popup from 'reactjs-popup'

import styles from '../styles/BlogItem.module.scss'

export const BlogItem = (props) => {

    const [open, setOpen] = useState(false)
    const closeModal = () => setOpen(false)

    const overlayStyle = { background: 'rgba(0,0,0,0.5)' }  

  return (
    <div className={styles.container} onClick={() => setOpen((o) => !o)}>
        <h3>{props.title}</h3>
        <p>{props.date}</p>
        <p className={styles.tag}>{props.tag}</p>
        <Popup modal nested lockScroll overlayStyle={overlayStyle} open={open}>
            <div className={styles.popup}>
                <button
                    className={styles.close}
                    onClick={closeModal}
                >
                    &times;
                </button>
                <div className={styles.header}>
                    <h2>Why I made this website</h2>
                    <p>{props.date}</p>
                </div>
                <div className={styles.content}>
                <b>Why I made this website</b>
            <br />
            At the time of developing this website and writing this blog post, I am currently
            unemployed as a fresh Masters graduate and need a job to pay my rent and bills.
            <br />
            <br />
            Scouring through the LinkedIn job board, I noticed that most software or design jobs had
            an option for me to add a link to my website/portfolio, so I built and published this
            website with hopes that my applications would get me more interviews.
            <br />
            <br />
            Besides that, I always wanted to start a website to showcase my personality and work,
            and this was the perfect opportunity to have a cool web project as part of my work. I
            plan to constantly iterate on this website in the future.
            <br />
            <br />
            <b>Blogging</b>
            <br />
            This is not only the start of my portfolio journey, but also a start to my blogs. I
            wanted to start vlogging for two reasons:
            <br />
            <br />
            1. I wanted to practise my writing
            <br />
            2. I wanted a record of my professional/technical learnings
            <br />
            <br />
            Being a software engineering grad, I haven’t had much chance to write about anything in
            general since high school, and I hope that blogging about the things I’m passionate
            about will be a way for me to enjoy writing for the first time in my life. I have hopes
            that my blogs are going to contain anything that I want to write about, ranging from
            anything technical, personal and professional learnings, and maybe even movie reviews.
            I’m not 100% sure on the direction of my blogs yet but I’ll see where it takes me.
            <br />
            <br />
            <b>Inspiration</b>
            <br />I looked at a range of developer portfolios for inspiration before starting the
            design for this iteration, and I was most influenced by Robb (https://robbowen.digital/)
            and Britney’s (https://brittanychiang.com/) website. My web development skills aren’t
            quite brushed up yet, so I had to have a good balance of what I think is cool and what
            is technically achievable. Britney’s website was what I referenced in terms of the
            content and layout, whereas my colours and aesthetic were influenced by Robb’s website.
            <br />
            <br />
            <b>Tech Stack</b>
            <br />
            I wanted to have this website published ASAP for my job applications, so it was
            developed using React, the framework that I am most familiar with right now. I still
            wanted to pick up something new and have a kick to my website, so I looked into 3D
            animations and came across Three.js. I watched a few tutorials on this a quickly whipped
            up two animations for my website based on the logo that I made on Figma in less than 5
            minutes.
            <br />
            <br />
                </div>
            </div>
        </Popup>
    </div>
  )
}

export default BlogItem