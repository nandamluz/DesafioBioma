import Image from 'next/image';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.card}>
      <div className={styles.back}>
        <Image src="/back.png" alt="filtro" width="20" height="20" />
      </div>
      <div className={styles.infosCard}>
        <Image src="/foto.png" alt="filtro" width="80" height="80" />

        <h1>Fernanda Luz</h1>
        <h3>
          <Image src="/local.png" alt="local" width="15" height="12" />
          Uberlândia, Minas Gerais
        </h3>
        <h2>Desenvolvimento Web</h2>
        <button className={styles.buttonUpgrade}>Upgrade Now - Go Pro</button>
      </div>
    </header>
  );
}
