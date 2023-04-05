import Image from 'next/image';
import Card from './Card';
import styles from './settings.module.css';

export default function Settings({ settings = [], title }) {
  return (
    <div className={styles.options}>
      <h1>{title}</h1>
      <div className={styles.gridOptions}>
        <ul>
          <li className={styles.darkButtonContainer}>
            <div className={styles.darkButton}>
              <Image src="/moon.png" alt="filtro" width="30" height="30" />
              Dark Mode
            </div>
            <div className={styles.toggle}>
              <input type="checkbox" id="foo" />
              <label for="foo"></label>
            </div>
          </li>
          {settings.map((setting) => {
            return (
              <Card
                iconName={setting.iconName}
                key={setting.description}
                description={setting.description}
                iconAction={setting.iconAction}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
