import Header from '@/components/Header'
import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header active='home' />
      <div className={styles.container_separator}></div>
      <div className='main'>
        main
      </div>
    </div>
  )
}
