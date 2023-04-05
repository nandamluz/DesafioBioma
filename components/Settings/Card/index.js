import Image from 'next/image';
import styles from './card.module.css';

export default function Card({ iconName, description, iconAction }) {
  return (
    <div className={styles.options}>
      <li>
        <spam>
          <Image src={iconName} alt={description} width="28" height="28" />
          {description}
        </spam>
        <Image
          src={iconAction}
          alt="Go"
          className={styles.go}
          width="22"
          height="22"
        />
      </li>
    </div>
  );
}
