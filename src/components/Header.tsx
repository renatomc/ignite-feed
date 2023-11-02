
import igniteLogo from '../assets/images/Ignite-logo.svg'

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo Ignite" />
      <strong>Ignite Feed</strong>
    </header>
    
  );
}