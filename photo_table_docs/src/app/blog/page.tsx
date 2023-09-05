import Header from '@/components/Header'
import { Metadata } from 'next'
import styles from '../page.module.scss'

export const metadata: Metadata = {
  title: 'Photo Table - Blog',
}

export default function Blog() {
  return (
    <div className={styles.container}>
      <Header active='blog' />
      <div className={styles.container_separator}></div>
      <div className='main'>
        main
      </div>
    </div>
  )
}