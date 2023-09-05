import Header from '@/components/Header'
import { Metadata } from 'next'
import styles from '../page.module.scss'

export const metadata: Metadata = {
  title: 'Photo Table - Docs',
}

export default function Docs() {
  return (
    <div className={styles.container}>
      <Header active='docs' />
      <div className={styles.container_separator}></div>
      <div className='main'>
        main
      </div>
    </div>
  )
}