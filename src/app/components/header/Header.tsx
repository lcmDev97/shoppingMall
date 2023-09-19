'use client'
import styles from './header.module.css'
import Link from 'next/link'
import {useRouter} from "next/navigation"

export default function Header() {
    const router = useRouter();

    const userId = localStorage.getItem('id')
    const userPassword = localStorage.getItem('password')
    const isLogin = userId ? true : false

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
                    {isLogin ? <h3><button onClick={()=>{
                        localStorage.clear()
                        router.refresh()
                        router.push('/')
                    }}>로그아웃</button> <Link href="/mypage">마이페이지</Link></h3> : <h3><Link href="/login">로그인</Link></h3>}
                </div>거
            </div>
        </header>
    )
}
