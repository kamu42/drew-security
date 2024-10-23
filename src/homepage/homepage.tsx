import styles from './homepage.module.css';
import cn from 'classnames';

import { ReactComponent as Arrow } from '../assets/arrow_right.svg';

export function Home() {
  return (
    <div>
      <section className={styles['protection-section']}>
        <div className={styles['protection-header']}>
          <div className={styles['protection-logo']}>
            <img src="../assets/logo.png" alt="Logo" />
            <span className={styles['tagline']}>
              Your Shield in a Digital World
            </span>
          </div>
          <h1 className={styles['protection-title']}>
            Protection Across any Chain
          </h1>
          <h2 className={styles['protection-subtitle']}>Ethereum</h2>
        </div>

        <div className={styles['protection-stats']}>
          <div className={styles['stat']}>
            <span className={styles['stat-number']}>100</span>
            <span className={styles['stat-label']}>Clients</span>
          </div>
          <div className={styles['stat']}>
            <span className={styles['stat-number']}>8Y</span>
            <span className={styles['stat-label']}>Experience</span>
          </div>
          <span />
          <div className={styles['stat']}>
            <span className={styles['stat-number']}>300</span>
            <span className={styles['stat-label']}>Discords Protected</span>
          </div>
          <div className={styles['stat']}>
            <span className={styles['stat-number']}>250K</span>
            <span className={styles['stat-label']}>Members Protected</span>
          </div>
        </div>

        <div className={styles['statsContainer']}>
          <div className={styles.stats}>
            <span className={styles.number}>100+</span>
            <span className={styles.label}>Clients</span>
          </div>
          <div className={styles.stats}>
            <span className={styles.number}>300+</span>
            <span className={styles.label}>Discords Protected</span>
          </div>
          <div className={styles.stats}>
            <span className={styles.number}>8Y</span>
            <span className={styles.label}>Experience</span>
          </div>
          <div className={styles.stats}>
            <span className={styles.number}>250K</span>
            <span className={styles.label}>Members Protected</span>
          </div>
        </div>

        <div className={styles['services']}>
          <button className={styles['services-button']}>
            <Arrow />
          </button>{' '}
          <span>Security Services</span>
        </div>
      </section>

      <div className={styles['trusted-brands']}>
        <img src="../assets/Netflix_logo.svg" alt="Netflix" />
        <img src="../assets/disney_logo.svg" alt="Disney" />
        <img src="../assets/logo.svg" alt="Other Brand" />

        <img
          src="../assets/Netflix_logo.svg"
          alt="Netflix"
          className={cn(styles['second-brands'])}
        />
        <img
          src="../assets/disney_logo.svg"
          alt="Disney"
          className={cn(styles['second-brands'])}
        />
        <img
          src="../assets/logo.svg"
          alt="Other Brand"
          className={cn(styles['second-brands'])}
        />
      </div>
    </div>
  );
}
