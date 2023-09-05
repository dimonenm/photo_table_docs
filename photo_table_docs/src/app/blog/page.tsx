import Header from '@/components/Header'
import styles from '../page.module.scss'

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