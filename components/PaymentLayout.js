import React, { useState } from 'react';
import styles from '../styles/PaymentLayout.module.css';
import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PaymentLayout({ children }) {
  const router = useRouter();
  const paths = router.pathname.split('/');
  const path = paths[paths.length - 1];
  let isOpen = false;
  [
    "bri-ceria",
    "shopeepay",
    "akulaku",
    "indodana",
    "kredivo",
  ].forEach(v => {
    if (v === path) isOpen = true;
  })
  const [subDropdown, setSubDropdown] = useState(isOpen);

  const cardTypes = [
    "Creadit / Debit Card",
    "Klik BCA",
    "e-pay BRI",
    "CIMB Clicks",
    "GoPay",
    "ATM",
    "BNI Mobile",
    [
      "BRI Ceria",
      "ShopeePay",
      "Akulaku",
      "Indodana",
      "Kredivo",
    ],
    "OVO",
    "Convenient Store",
    "Bank Transfer",
    "Alfamart",
    "Indomaret"
  ];

  const cardLinks = [
    "credit-debit-card",
    "klik-bca",
    "e-pay-bri",
    "cimb-clicks",
    "gopay",
    "atm",
    "bni-mobile",
    [
      "bri-ceria",
      "shopeepay",
      "akulaku",
      "indodana",
      "kredivo",
    ],
    "ovo",
    "convenient-store",
    "bank-transfer",
    "alfamart",
    "indomaret"
  ];

  return (
    <div className="container">
      <Head>
        <title>Payment Page | Garuda Indonesia</title>
      </Head>

      <main className={styles.main}>
        <div className="custom-row">
          <div className="custom-col-7">
            <div className="custom-row card-type-container" style={{ width: '100%', left: 0 }}>
              <div className={styles["card-type"]}>
                <ul className="list-unstyled">
                  {
                    cardTypes.map((card, idx) => {
                      if (typeof card === 'string') {
                        return (
                          <li key={`card-type${idx}`}><Link href={`/payment-page/${cardLinks[idx]}`} className={cardLinks[idx] === path ? styles["active"] : null}>{card}</Link></li>
                        )
                      } else {
                        return (
                          <ul key="subdropdown" className={styles["sub-dropdown"] + " list-unstyled" + (subDropdown ? " " + styles["active"] : "")}>
                            <li onClick={() => setSubDropdown(!subDropdown)}>
                              Buy Now Pay Later
                              <span className="material-symbols-outlined">
                                expand_more
                              </span>
                            </li>
                            {
                              card.map((v, i) => {
                                return (
                                  <li key={`card-type-bnpl${i}`}><Link href={`/payment-page/${cardLinks[idx][i]}`} className={cardLinks[idx][i] === path ? styles["active"] : null}>• {v}</Link></li>
                                )
                              })
                            }
                          </ul>
                        )
                      }
                    })
                  }
                </ul>
              </div>
              <div className={styles["card-form"]}>
                {children}
              </div>
            </div>
          </div>
          <div className="custom-col-3">
            <div className={styles["booking-details"]}>
              <div className={styles["booking-details-title"]}>
                <div>YOUR BOOKING</div>
                <Link href="">Details</Link>
              </div>
              <div className={styles["booking-passenger"]}>
                <div>LIST OF PASSENGER(S)</div>
                <div className={styles["passenger-details"]}>
                  <span>Mr. John Doe</span>
                  <span>Adult</span>
                </div>
              </div>
              <div className={styles["booking-flight"]}>
                <div>FLIGHT</div>
                <div className={styles["flight-schedule"]}>
                  <span className="material-icons-outlined" style={{ fontSize: 14 }}>
                    flight
                  </span>
                  <span className={styles["flight-from"]}>Jakarta (CGK)</span>
                  <span className="material-icons-outlined" style={{ margin: "0 3px", fontSize: 16 }}>
                    arrow_right_alt
                  </span>
                  <span className={styles["flight-to"]}>Denpasar (DPS)</span>
                </div>
                <div className={styles["flight-date"]}>
                  <span className="material-icons-outlined" style={{ fontSize: 14 }}>
                    event
                  </span>
                  <span>23 Nov 2020</span>
                </div>
              </div>
              <div style={{ color: '#06499f', fontWeight: 600 }}>PRICE</div>
              <div className={styles["booking-price"]}>
                <span>Total</span>
                <span
                  className="material-icons-outlined"
                  style={{
                    marginRight: 4,
                    color: '#df1212',
                    fontSize: 12
                  }}
                >
                  info
                </span>
                <span style={{ color: '#212529', fontSize: 14, fontWeight: 600 }}>IDR 2.238.000</span>
              </div>
            </div>
          </div>
        </div>
      </main >
    </div >
  )
}