import Link from 'next/link'
import styles from './Header.module.scss'

interface HeaderProps{
  active: string
}

export default function Header({ active }: HeaderProps): JSX.Element {
  console.log('active: ', active);

  const links: JSX.Element[] = getMenuLinks(active)

  function getMenuLinks(activePage: string): JSX.Element[] {
    const linksArr: JSX.Element[] = []

    if (activePage === 'home') {
      linksArr.push(<Link href='/' key={'logo'} className={`${styles.logo} ${styles.active}`}>Photo Table Docs</Link>)
    } else {
      linksArr.push(<Link href='/' key={'logo'} className={styles.logo}>Photo Table Docs</Link>)
    }
    if (activePage === 'docs') {
      linksArr.push(<Link href='/docs' key={'docs'} className={`${styles.docs} ${styles.active}`}>Docs</Link>)
    } else {
      linksArr.push(<Link href='/docs' key={'docs'} className={styles.docs}>Docs</Link>)
    }
    if (activePage === 'news') {
      linksArr.push(<Link href='/news' key={'news'} className={`${styles.news} ${styles.active}`}>News</Link>)
    } else {
      linksArr.push(<Link href='/news' key={'news'} className={styles.news}>News</Link>)
    }
    if (activePage === 'feedback') {
      linksArr.push(<Link href='/feedback' key={'feedback'} className={`${styles.feedback} ${styles.active}`}>Feedback</Link>)
    } else {
      linksArr.push(<Link href='/feedback' key={'feedback'} className={styles.feedback}>Feedback</Link>)
    }

    return linksArr
  }

  return (
    <div className={styles.header}>
      <div className={styles.header_menu}>
        {links}
      </div>
    </div>
  )
}