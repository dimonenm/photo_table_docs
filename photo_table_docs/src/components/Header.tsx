import Link from 'next/link'
import styles from './Header.module.scss'

interface IHeaderProps {
  active: string
}
interface INavLinks {
  id: number
  title: string
  path: string
  classStyle: string
  classStyleActive: string
}

const navLinks: INavLinks[] = [
  { id: 1, title: 'Photo Table', path: '/', classStyle: 'logo', classStyleActive: 'logo_active' },
  { id: 2, title: 'Docs', path: '/docs', classStyle: 'docs', classStyleActive: 'docs_active' },
  { id: 3, title: 'Blog', path: '/blog', classStyle: 'blog', classStyleActive: 'blog_active' },
  { id: 4, title: 'Download', path: '/download', classStyle: 'download', classStyleActive: 'download_active' },
  { id: 5, title: '', path: '', classStyle: '', classStyleActive: '' },
  { id: 6, title: 'Feedback', path: '/feedback', classStyle: 'feedback', classStyleActive: 'feedback_active' },
]

export default function Header({ active }: IHeaderProps): JSX.Element {

  const menuItems: JSX.Element[] = navLinks.map(({ id, title, path, classStyle, classStyleActive }): JSX.Element => {
    
    const className = active === classStyle ? styles[classStyleActive] : styles[classStyle]

    if (id === 5) {
      return <div key={id}></div>
    }

    return <Link href={path ? path : '/'} key={id} className={className}>{title}</Link>
  })

  return (
    <div className={styles.header}>
      <div className={styles.header_menu}>
        {menuItems}
      </div>
    </div>
  )
}