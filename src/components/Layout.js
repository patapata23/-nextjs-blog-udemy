import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";

const name = "Shin Code";
export const siteTitle = "Next.js blog";

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img src="/images/profile.png" className={`borderCircle ${styles.headerHomeImage}`} />
                        <h1 className="heading2Xl">{name}</h1>
                    </>
                ):(
                    <>
                        <img src="/images/profile.png" className="borderCircle" />
                        <h1 className="heading2Xl">{name}</h1>

                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div>
                    <Link href="/">← ホームへ戻る</Link>
                </div>
            )}
        </div>
    );
}