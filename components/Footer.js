import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <a
          href="https://gezamahardika.com"
          target="_blank"
          rel="noopener noreferrer"
        >
            made bay{' '}
            <span className={styles}>
            <Image src="/Logo-gm.svg" alt="Geza Logo" width={120} height={53} />
          </span>
        </a>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
  )
}
