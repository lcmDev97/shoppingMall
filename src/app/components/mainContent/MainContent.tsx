import styles from './mainContent.module.css'
import Link from 'next/Link'

export default function MainContent() {
    return (
        <section className={styles.itemSection}>
            <div className={styles.itemWrap}>
                <div className={styles.item}>
                    <div className={styles.imgBox}>
                        <img src="./img/item1.jpeg" alt="브이넥 니트"/>
                    </div>
                    <div className={styles.textBox}>
                        <p className={styles.textBox__name}>브이넥 니트</p>
                        <p className={styles.textBox__price}>39,000원</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgBox}>
                        <img src="./img/item2.jpeg" alt="집업 바람막이 "/>
                    </div>
                    <div className={styles.textBox}>
                        <p className={styles.textBox__name}>집업 바람막이 </p>
                        <p className={styles.textBox__price}>24,000원</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgBox}>
                        <img src="./img/item3.jpeg" alt="밴딩 슬랙스"/>
                    </div>
                    <div className={styles.textBox}>
                        <p className={styles.textBox__name}>밴딩 슬랙스</p>
                        <p className={styles.textBox__price}>22,000원</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgBox}>
                        <img src="./img/item4.jpeg" alt="반바지"/>
                    </div>
                    <div className={styles.textBox}>
                        <p className={styles.textBox__name}>반바지</p>
                        <p className={styles.textBox__price}>19,800원</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgBox}>
                        <img src="./img/item1.jpeg" alt="브이넥 니트"/>
                    </div>
                    <div className={styles.textBox}>
                        <p className={styles.textBox__name}>브이넥 니트</p>
                        <p className={styles.textBox__price}>39,000원</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgBox}>
                        <img src="./img/item2.jpeg" alt="집업 바람막이 "/>
                    </div>
                    <div className={styles.textBox}>
                        <p className={styles.textBox__name}>집업 바람막이 </p>
                        <p className={styles.textBox__price}>24,000원</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgBox}>
                        <img src="./img/item3.jpeg" alt="밴딩 슬랙스"/>
                    </div>
                    <div className={styles.textBox}>
                        <p className={styles.textBox__name}>밴딩 슬랙스</p>
                        <p className={styles.textBox__price}>22,000원</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgBox}>
                        <img src="./img/item4.jpeg" alt="반바지"/>
                    </div>
                    <div className={styles.textBox}>
                        <p className={styles.textBox__name}>반바지</p>
                        <p className={styles.textBox__price}>19,800원</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgBox}>
                        <img src="./img/item1.jpeg" alt="브이넥 니트"/>
                    </div>
                    <div className={styles.textBox}>
                        <p className={styles.textBox__name}>브이넥 니트</p>
                        <p className={styles.textBox__price}>39,000원</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgBox}>
                        <img src="./img/item2.jpeg" alt="집업 바람막이 "/>
                    </div>
                    <div className={styles.textBox}>
                        <p className={styles.textBox__name}>집업 바람막이 </p>
                        <p className={styles.textBox__price}>24,000원</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgBox}>
                        <img src="./img/item3.jpeg" alt="밴딩 슬랙스"/>
                    </div>
                    <div className={styles.textBox}>
                        <p className={styles.textBox__name}>밴딩 슬랙스</p>
                        <p className={styles.textBox__price}>22,000원</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgBox}>
                        <img src="./img/item4.jpeg" alt="반바지"/>
                    </div>
                    <div className={styles.textBox}>
                        <p className={styles.textBox__name}>반바지</p>
                        <p className={styles.textBox__price}>19,800원</p>
                    </div>
                </div>




            </div>
        </section>
        )
}