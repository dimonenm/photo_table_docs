import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header_menu}>
          <div className={styles.logo}>Photo Table Docs</div>
          <div className={styles.docs}>Docs</div>
          <div className={styles.news}>News</div>
          <div className={styles.feedback}>Feedback</div>
        </div>
      </div>
      <div className='main'>
        main
      </div>
    </div>
  )
}
