import styles from '../styles/NavBar.module.css';
import logo from '../public/images/garuda-indonesia-logo-1.svg';
import Link from 'next/link';
import Image from 'next/image';
import Countdown from 'react-countdown';
import { useState } from 'react';

export default function NavBar() {
  const [timer, setTimer] = useState(new Date(new Date().getTime() + (1000 * 60 * 60)));

  const renderer = ({ total, hours, minutes, seconds }) => {
    if (total) {
      return (
        <span
          style={{
            marginLeft: 4,
            fontFamily: 'Source Sans Pro',
            fontWeight: 600,
            color: '#fff'
          }}
        >
          {hours < 10 ? `0${hours}` : hours}:
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </span>
      );
    }
  };

  return (
    <nav className={styles.sticky}>
      <div className="container">
        <div className={styles.stickyWrapper}>
          <Link
            href="/"
            passHref={true}
            style={{ margin: '0 20px' }}
          >
            {/* <a style={{ height: 55 }}> */}
            <Image
              src={logo}
              height={55}
              width={110}
              layout="fixed"
              objectFit="contain"
            />
            {/* </a> */}
          </Link>
          <div className={styles["multi-step-nav"]}>
            <div className={styles["step-icon"]}>
              <span className="material-icons-outlined">
                flight
              </span>
              <span>1. SELECT</span>
            </div>
            <div className={styles["step-line"]}></div>
            <div className={styles["step-icon"]}>
              <span className="material-icons-outlined">
                event_available
              </span>
              <span>2. BOOK</span>
            </div>
            <div className={styles["step-line"]}></div>
            <div className={styles["step-icon"] + " " + styles["active"]}>
              <span className="material-icons-outlined">
                payment
              </span>
              <span>3. PAYMENT</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["countdown"]}>
        <div style={{ width: '100%' }}>
          <span style={{ marginRight: 10, color: '#fff' }}>Complete Payment in :</span>
          <span className="material-icons-outlined">
            alarm_on
          </span>
          <Countdown
            date={timer}
            renderer={renderer}
          />
        </div>

      </div>
    </nav>
  );
}
