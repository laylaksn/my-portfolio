import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from 'next/image';


export const HomePhotos = () => {
    return (
    <div className={styles.photoGrid}>
                <div className={styles.photoTile}>
                <Image
                    src="/photos/3mt.jpg"
                    alt="Photo 1"
                    width={225}
                    height={225}
                />
                </div>
                <div className={styles.photoTile}>
                <Image
                    src="/photos/bake.jpg"
                    alt="Photo 2"
                    width={225}
                    height={225}
                />
                </div>
                <div className={styles.photoTile}>
                <Image
                    src="/photos/hannahfry.jpg"
                    alt="Photo 3"
                    width={225}
                    height={225}
                />
                </div>
                <div className={styles.photoTile}>
                <Image
                    src="/photos/icms.jpg"
                    alt="Photo 4"
                    width={225}
                    height={225}
                />
                </div>
                <div className={styles.photoTile}>
                <Image
                    src="/photos/outreach1.jpg"
                    alt="Photo 5"
                    width={225}
                    height={225}
                />
                </div>
                <div className={styles.photoTile}>
                <Image
                    src="/photos/talk1.jpg"
                    alt="Photo 6"
                    width={225}
                    height={225}
                />
                </div>
                <div className={styles.photoTile}>
                <Image
                    src="/photos/outreach2.jpg"
                    alt="Photo 7"
                    width={225}
                    height={225}
                />
                </div>
                <div className={styles.photoTile}>
                <Image
                    src="/photos/outreachcrypto.jpg"
                    alt="Photo 8"
                    width={225}
                    height={225}
                />
                </div>
                <div className={styles.photoTile}>
                <Image
                    src="/photos/3mt1.jpg"
                    alt="Photo 9"
                    width={225}
                    height={225}
                />
                </div>
            </div>
              );
            };
            