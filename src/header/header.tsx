import React from 'react';
import { useState } from 'react';
import cn from 'classnames';

import styles from './header.module.scss';

import { ReactComponent as Close } from './assets/Close.svg';
import { ReactComponent as MenuIcon } from './assets/burguer.svg';
import { ReactComponent as Arrow } from '../assets/arrow.svg';
import { ReactComponent as Discord } from './assets/discord-icon.svg';
import { ReactComponent as X } from './assets/x-icon.svg';

const Header: React.FC = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.drew}>DRE</span>
        <span className={styles.dre_w}>W</span>
        <span className={styles.security}>SECURITY</span>
        <p className={styles.tagline}>
          Don't worry about security until it's too late
        </p>
      </div>

      <div className={styles.actions}>
        <div className={styles.social}>
          <X className={styles.icon} />
          <Discord />
        </div>

        <button className={styles.toolsButton}>
          <span>Tools to stay secure</span>
          <div className={styles.arrow}>
            <Arrow />
          </div>
        </button>
        <button className={styles['call-Button']}>Book a call</button>
      </div>

      <button className={cn(styles['menu-button'])} onClick={togglePanel}>
        <MenuIcon className={styles['menu-icon']} />
      </button>

      <div className={styles[`fullscreen-panel${isPanelOpen ? '-open' : ''}`]}>
        <button className={styles['toolsButton-side']}>
          <span>Tools to stay secure</span>
          <div className={styles['arrow-side']}>
            <Arrow />
          </div>
        </button>

        <button className={styles['callButton-side']}>Book A Call</button>

        <div className={styles['side-footer']}>
          <p className={styles['in-touch']}>Get in touch</p>
          <p className={styles['x-contact']}>Hi@drewsecurity.com</p>
          <div className={styles['social-side']}>
          <X className={styles.icon} />
          <Discord />
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
