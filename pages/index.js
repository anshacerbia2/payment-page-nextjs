import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function index() {
  return (
    <Link href="/payment-page/credit-debit-card" className={styles["custom-btn"]}>
      Go to payment page?
    </Link>
  )
}
