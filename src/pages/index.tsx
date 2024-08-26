import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Layla Sadeghi Namaghi</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Generated by create next app" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>
      
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <ul className={styles.navbarMenu}>
            <li className={styles.navbarItem}><a href="#home" className={styles.navbarLink}>Home</a></li>
            <li className={styles.navbarItem}><a href="#portfolio" className={styles.navbarLink}>Portfolio</a></li>
            <li className={styles.navbarItem}><a href="#cv" className={styles.navbarLink}>CV</a></li>
            <li className={styles.navbarItem}>
              <a href="mailto:your-email@example.com" className={styles.navbarLink}>
                <i className="fas fa-envelope"></i>
              </a>
            </li>
            <li className={styles.navbarItem}>
              <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className={styles.navbarLink}>
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className={styles.navbarItem}>
              <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className={styles.navbarLink}>
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li className={styles.navbarItem}>
              <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className={styles.navbarLink}>
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}></div>

        <div className={styles.container}>
          <div className={styles.center}>
            <h1 className={styles.title}>Layla Sadeghi Namaghi</h1>
            <p className={styles.bio}>
              Welcome to my portfolio...
            </p>
          </div>

          <div className={styles.photoGrid}>
            <div className={styles.photoTile}>
              <Image src="/photos/3mt.jpg" alt="Photo 1" width={225} height={225} />
            </div>
            <div className={styles.photoTile}>
              <Image src="/photos/bake.jpg" alt="Photo 2" width={225} height={225} />
            </div>
            <div className={styles.photoTile}>
              <Image src="/photos/hannahfry.jpg" alt="Photo 3" width={225} height={225} />
            </div>
            <div className={styles.photoTile}>
              <Image src="/photos/icms.jpg" alt="Photo 4" width={225} height={225} />
            </div>
            <div className={styles.photoTile}>
              <Image src="/photos/outreach1.jpg" alt="Photo 5" width={225} height={225} />
            </div>
            <div className={styles.photoTile}>
              <Image src="/photos/talk1.jpg" alt="Photo 6" width={225} height={225} />
            </div>
            <div className={styles.photoTile}>
              <Image src="/photos/outreach2.jpg" alt="Photo 7" width={225} height={225} />
            </div>
            <div className={styles.photoTile}>
              <Image src="/photos/outreachcrypto.jpg" alt="Photo 8" width={225} height={225} />
            </div>
            <div className={styles.photoTile}>
              <Image src="/photos/outreach2.jpg" alt="Photo 9" width={225} height={225} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
