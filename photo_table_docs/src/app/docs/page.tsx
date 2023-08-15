import Header from '@/components/Header'
import styles from '../page.module.scss'

export default function Docs() {
  return (
    <div className={styles.container}>
      <Header active='docs' />
      <div className='main'>
        main
      </div>
    </div>
  )
}