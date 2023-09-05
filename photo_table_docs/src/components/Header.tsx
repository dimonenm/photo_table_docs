import Link from 'next/link'
import styles from './Header.module.scss'

interface HeaderProps {
  active: string
}

export default function Header({ active }: HeaderProps): JSX.Element {

  function getMenuLinks(activePage: string): JSX.Element[] {

    const linksArr: JSX.Element[] = []

    linksArr.push(<Link href='/' key={'logo'} className={styles.logo}>Photo Table</Link>)

    linksArr.push(<Link href='/docs' key={'docs'} className={styles.docs}>Docs</Link>)

    linksArr.push(<Link href='/blog' key={'blog'} className={styles.blog}>Blog</Link>)

    linksArr.push(<Link href='/download' key={'download'} className={styles.download}>Download</Link>)

    linksArr.push(<div></div>)

    linksArr.push(<Link href='/feedback' key={'feedback'} className={styles.feedback}>Feedback</Link>)

    switch (activePage) {
      case 'docs':
        linksArr[1] = <Link href='/docs' key={'docs'} className={styles.docs_active}>Docs</Link>
        break;
      case 'blog':
        linksArr[2] = <Link href='/blog' key={'blog'} className={styles.blog_active}>Blog</Link>
        break;
      case 'download':
        linksArr[3] = <Link href='/download' key={'download'} className={styles.download_active}>Download</Link>
        break;
      case 'feedback':
        linksArr[5] = <Link href='/feedback' key={'feedback'} className={styles.feedback_active}>Feedback</Link>
        break;

      default:
        break;
    }

    return linksArr
  }

  const links: JSX.Element[] = getMenuLinks(active)

  return (
    <div className={styles.header}>
      <div className={styles.header_menu}>
        {links}
      </div>
    </div>
  )
}