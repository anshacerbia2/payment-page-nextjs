import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <div className={styles["footer"]}>
      <div className="container">
        <div className={styles["footer-wrapper"]}>
          <div>© 2020. PT Garuda Indonesia (Persero) Tbk. All rights reserved.</div>
          <div>Privacy Policy</div>
          <div>Contact Us</div>
        </div>
      </div>
    </div>
  )
}
