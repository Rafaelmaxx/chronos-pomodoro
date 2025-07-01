import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

export function Menu() {
  type AvaliableThemes = 'dark' | 'light';

  const [theme, setTheme] = useState<AvaliableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvaliableThemes) || 'dark';
    return storageTheme;
  });

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); //nao segue o link
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  }; //pode ser feito com if/else também

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={styles.menu}>
      <a className={styles.menuLink} href='#' aria-label='Home' title='Home'>
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Histórico'
        title='Histórico'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Alterar tema'
        title='Alterar tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </div>
  );
}
