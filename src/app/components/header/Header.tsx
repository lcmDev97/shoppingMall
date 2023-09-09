import styles from './header.module.css'
import Link from 'next/Link'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <div className={styles.logo}>
                    <h1><a href="/">LOGO</a></h1>
                </div>
                <div className={styles.menu}>
                    <ul className={styles.menu__ul}>
                        <li>
                            <Link href="/">BEST 100</Link>
                        </li>
                        <li>
                            <Link href="/">Top</Link>
                        </li>
                        <li>
                            <Link href="/">Outer</Link>
                        </li>
                        <li>
                            <Link href="/">Pants</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.user}>
                    <h1><Link href="/">유저사진</Link></h1>
                </div>
            </div>
        </header>
    )
}
