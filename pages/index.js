import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Settings from '@/components/Settings';
import Header from '@/components/Header';

const settings = [
  {
    iconName: '/notification-bell.png',
    description: 'Notifications',
    iconAction: '/go.png',
  },
  {
    iconName: '/unlock.png',
    description: 'Privacy',
    iconAction: '/go.png',
  },
  {
    iconName: '/shield.png',
    description: 'Segurança',
    iconAction: '/go.png',
  },
  {
    iconName: '/user.png',
    description: 'Conta',
    iconAction: '/go.png',
  },
  {
    iconName: '/help.png',
    description: 'Help',
    iconAction: '/go.png',
  },
  {
    iconName: '/info.png',
    description: 'Info',
    iconAction: '/go.png',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Desafio Bioma</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={styles.main}>
        <Header />
        <Settings settings={settings} />
      </main>
    </>
  );
}
