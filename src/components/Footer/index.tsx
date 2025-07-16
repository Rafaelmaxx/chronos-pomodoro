import { Link } from 'react-router';
import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to='/about-pomodoro'>Entenda a técnica pomodoro 🍅</Link>
      <Link to='/'>Chronos Pomodoro © 2025 - Feito por Rafael Maximiano</Link>
    </footer>
  );
}
