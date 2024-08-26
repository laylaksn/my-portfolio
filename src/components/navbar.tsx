import styles from "@/styles/Home.module.css";

export const Navbar=()=>{

return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <ul className={styles.navbarMenu}>
          <li className={styles.navbarItem}>
            <a href="/" className={styles.navbarLink}>
              Home
            </a>
          </li>
          <li className={styles.navbarItem}>
            <a href="/projects" className={styles.navbarLink}>
              Projects
            </a>
          </li>
          <li className={styles.navbarItem}>
            <a href="/cv.pdf" className={styles.navbarLink}>
              CV
            </a>
          </li>
          <li className={styles.navbarItem}>
            <a
              href="mailto:your-email@example.com"
              className={styles.navbarLink}
            >
              <i className="fas fa-envelope"></i>
            </a>
          </li>
          <li className={styles.navbarItem}>
            <a
              href="https://github.com/laylaksn"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navbarLink}
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className={styles.navbarItem}>
            <a
              href="https://linkedin.com/in/laylaksn"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navbarLink}
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li className={styles.navbarItem}>
            <a
              href="https://twitter.com/layla_ksn"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navbarLink}
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>)

}