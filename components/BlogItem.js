import { useState } from 'react'
import Popup from 'reactjs-popup'

import styles from '../styles/BlogItem.module.scss'

export const BlogItem = ({title, date, tag, children}) => {

    const [open, setOpen] = useState(false)
    const closeModal = () => setOpen(false)

    const overlayStyle = { background: 'rgba(0,0,0,0.5)' }  

  return (
    <div className={styles.container} onClick={() => setOpen((o) => !o)}>
        <h3>{title}</h3>
        <p>{date}</p>
        <p className={styles.tag}>{tag}</p>
        <Popup modal nested lockScroll overlayStyle={overlayStyle} open={open}>
            <div className={styles.popup}>
                <button
                    className={styles.close}
                    onClick={closeModal}
                >
                    &times;
                </button>
                <div className={styles.header}>
                    <h1>{title}</h1>
                    <p>{date}</p>
                </div>
                <div className={styles.content}>
                    {children}
                </div>
                
            </div>
        </Popup>
    </div>
  )
}

export default BlogItem