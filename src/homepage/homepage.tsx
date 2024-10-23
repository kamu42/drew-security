import styles from './homepage.module.scss';
import cn from 'classnames';

import { ReactComponent as Arrow } from '../assets/arrow.svg';
import Netflix from './assets/netflix-logo.svg';
import Disney from './assets/disney-logo.svg';
import W from './assets/w-logo.svg';

import security from './assets/security-icon.svg'
import settings from './assets/settings-icon.svg'
import training from './assets/training-icon.svg'

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
        <img src={Netflix} alt="Netflix" />
        <img src={Disney} alt="Disney" />
        <img src={W} alt="Other Brand" />

        <img
          src={Netflix}
          alt="Netflix"
          className={cn(styles['second-brands'])}
        />
        <img
          src={Disney}
          alt="Disney"
          className={cn(styles['second-brands'])}
        />
        <img
          src={W}
          alt="Other Brand"
          className={cn(styles['second-brands'])}
        />
      </div>

      <div className={styles['security-Services-Section']}>
        <div className={styles['title']}>
          <h2 className={styles['section-Title']}>Security Services</h2>
          <p className={styles['section-Subtitle']}>
            Web3 security built on top of Web2
          </p>
        </div>

        <div className={styles['services-Container']}>
          <div className={styles['service-Card']}>
            <div className={styles['icon']}>
              <img src={settings} alt="Setup Icon" />
            </div>

            <div>
              <h3 className={styles['service-Title']}>Setup</h3>
              <button className={styles['book-Call-Button']}>
                Book a call
              </button>
            </div>

            <p className={styles['service-Description']}>
              Whether you are an established enterprise or a new venture,
              securing your digital infrastructure is paramount. Our
              comprehensive cybersecurity consulting services cover a wide range
              of platforms, including Discord, X (formerly Twitter), Gmail, and
              more. By ensuring your systems are properly configured and secure,
              we help protect your brand's reputation, maintain trust in your
              business, and safeguard your community from potential threats.
            </p>
          </div>

          <div className={styles['service-Card']}>
            <div className={styles['icon']}>
              <img src={security} alt="Setup Icon" />
            </div>

            <div>
              <h3 className={styles['service-Title']}>Security</h3>
              <button className={styles['book-Call-Button']}>
                Book a call
              </button>
            </div>

            <p className={styles['service-Description']}>
              Elevate your community's safety with our premier cybersecurity
              consulting services. We prioritize member privacy and security by
              implementing robust measures such as role-based permissions,
              anti-spam filters, and advanced moderation tools. With our
              expertise, your community remains protected from potential
              threats, ensuring a seamless and secure experience for all users.
              Safeguard your brand today and foster a thriving, secure
              community.
            </p>
          </div>

          <div className={styles['service-Card']}>
            <div className={styles['icon']}>
              <img src={training} alt="Setup Icon" />
            </div>

            <div>
              <h3 className={styles['service-Title']}>Training</h3>
              <button className={styles['book-Call-Button']}>
                Book a call
              </button>
            </div>

            <p className={styles['service-Description']}>
              Enhance your team's capabilities with our comprehensive Security
              Training programs. Recognizing the critical importance of
              maintaining safety within your team and community, our expert-led
              training imparts the latest security best practices. Your team
              will learn to identify potential vulnerabilities, prevent data
              breaches, and manage security incidents effectively. From
              configuring recommended security settings and permissions to
              implementing multi-factor authentication, our training ensures
              thorough coverage. Empower your team with the knowledge needed to
              protect your community from potential threats.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
