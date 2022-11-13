import Image from 'next/image'
import PaymentLayout from '../../components/PaymentLayout';
import styles from '../../styles/CreditDebitCard.module.css';
import cardImg from '../../public/images/card-img.svg';
import { useState } from 'react';
import { cc_formater } from '../../helpers/cc_formater';
import { getMonth } from '../../helpers/getMonth';
import { getYear } from '../../helpers/getYear';
import { phone_formater } from '../../helpers/phone_formater';
import { swalWithBootstrapButtons } from '../../helpers/alert';

export default function CreditCard({ countries }) {
  // const countriesArr = countries.map(v => v.name.common);
  const countriesArr = ["Indonesia", "Singapore", 'Philippines'];

  const [inputVal, setInputVal] = useState({
    cardNumber: '',
    expirationMonth: '',
    expirationYear: '',
    cvc: '',
    cardHolderName: '',
    address: '',
    country: '',
    province: '',
    city: '',
    zipCode: '',
    email: '',
    phone: '',
    installmentPlan: 'no-installment'
  });
  const [cardNumberErr, setCardNumberErr] = useState("");
  const [expDateErr, setExpDateErr] = useState("");
  const [holderNameErr, setHolderNameErr] = useState("");

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "cardNumber" || name === "phone") value = value.replace(/\s/g, "");
    if (name === "cvc") {
      value = value
        .replace(/\s+/g, "")
        .replace(/[^0-9]/gi, "")
        .substring(0, 3);
    }
    setInputVal({ ...inputVal, [name]: value });
  }

  const clearErr = () => {
    setCardNumberErr("");
    setExpDateErr("");
    setHolderNameErr("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let err = false;
    let expErr = expDateErr;

    if (!inputVal.cardNumber.trim()) {
      setCardNumberErr("Card Number is Required.");
      err = true;
    }
    if (inputVal.cardNumber.trim() && inputVal.cardNumber.trim().length < 16) {
      setCardNumberErr("Card Number is Incorrect.");
      err = true;
    }
    if (!inputVal.expirationMonth.trim()) {
      expErr += " Expiration Month is Required.";
      err = true;
    }
    if (!inputVal.expirationYear.trim()) {
      expErr += " Expiration Year is Required.";
      err = true;
    }
    if (!inputVal.cvc.trim()) {
      expErr += " CVC is Required.";
      err = true;
    }
    if (inputVal.cvc.trim() && inputVal.cvc.trim().length < 3) {
      expErr += " CVC is Incorrect.";
      err = true;
    }
    if (!inputVal.cardHolderName.trim()) {
      setHolderNameErr("Card Holder Name is Required.");
      err = true;
    }
    setExpDateErr(expErr);

    if (!err) {
      console.log(inputVal);
      swalWithBootstrapButtons.fire({
        html: `
          <div>Card Number: ${inputVal.cardNumber}</div>
          <div>Expiration Month: ${inputVal.expirationMonth}</div>
          <div>Expiration Year: ${inputVal.expirationYear}</div>
          <div>CVC: ${inputVal.cvc}</div>
          <div>Card Holder Name: ${inputVal.cardHolderName}</div>
          <div>Address: ${inputVal.address}</div>
          <div>Country: ${inputVal.country}</div>
          <div>Province: ${inputVal.province}</div>
          <div>City: ${inputVal.city}</div>
          <div>ZIP Code: ${inputVal.zipCode}</div>
          <div>Email: ${inputVal.email}</div>
          <div>Phone: ${inputVal.phone}</div>
          <div>Installmernt Plan: ${inputVal.installmentPlan}</div>
        `,
        icon: 'success',
        showCancelButton: false,
      })
      setInputVal({
        cardNumber: '',
        expirationMonth: '',
        expirationYear: '',
        cvc: '',
        cardHolderName: '',
        address: '',
        country: '',
        province: '',
        city: '',
        zipCode: '',
        email: '',
        phone: '',
        installmentPlan: 'no-installment'
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* CARD DETAILS */}
      <div className={styles["form-part-title"]}>
        <div>CARD DETAILS</div>
        <div>
          <span className="material-symbols-outlined">
            lock
          </span>
          Secure Server
        </div>
      </div>
      <div className="form-group mb-2">
        <label>Card Number*</label>
        <div className="d-flex">
          <div id={styles["ccNumber"]}>
            <input
              className="form-control flex-grow-1"
              type="tel"
              maxLength="19"
              placeholder="•••• •••• •••• ••••"
              name="cardNumber"
              value={cc_formater(inputVal.cardNumber)}
              onChange={handleChange}
            />
            {
              cardNumberErr && (
                <div className="invalid-input">
                  <span className="material-icons-outlined">
                    error_outline
                  </span>
                  {cardNumberErr}
                </div>
              )
            }
          </div>
          <div>
            <Image
              src={cardImg}
              layout="fixed"
              height={22.5}
              objectFit="contain"
              alt="master-card-icon"
            />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className={styles["form-group-row"]}>
          <label style={{ width: '100%' }}>Expiration Date*</label>
          <div className="form-group" id={styles.expirationMonth}>
            <span className="material-symbols-outlined">
              expand_more
            </span>
            <select
              className="form-control"
              style={inputVal.expirationMonth ? { color: "#000" } : { color: "rgb(163, 163, 163)" }}
              placeholder="Month"
              name="expirationMonth"
              value={inputVal.expirationMonth}
              onChange={handleChange}
            >
              <option disabled value="">Month</option>
              {
                getMonth().map((month, idx) => {
                  return (
                    <option key={month} value={month}>{month}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="form-group" id={styles["expirationYear"]}>
            <span className="material-symbols-outlined">
              expand_more
            </span>
            <select
              className="form-control"
              style={inputVal.expirationYear ? { color: "#000" } : { color: "rgb(163, 163, 163)" }}
              placeholder="Year"
              name="expirationYear"
              value={inputVal.expirationYear}
              onChange={handleChange}
            >
              <option disabled value="">Year</option>
              {
                getYear().map((year, idx) => {
                  return (
                    <option key={year} value={year}>{year}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="tel"
              maxLength="3"
              placeholder="CVC"
              name="cvc"
              value={inputVal.cvc}
              onChange={handleChange}
            />
          </div>
        </div>
        {
          expDateErr && (
            <div className="invalid-input">
              <span className="material-icons-outlined">
                error_outline
              </span>
              {expDateErr.trim()}
            </div>
          )
        }
      </div>
      {/* BILLING INFORMATION */}
      <div className={styles["form-part-title"]}>
        <div>BILLING INFORMATION</div>
      </div>
      <div className="mb-2">
        <div className="form-group">
          <label>Card Holder Name*</label>
          <input
            className="form-control flex-grow-1"
            type="text"
            placeholder="John Doe"
            name="cardHolderName"
            value={inputVal.cardHolderName}
            onChange={handleChange}
          />
        </div>
        {
          holderNameErr && (
            <div className="invalid-input">
              <span className="material-icons-outlined">
                error_outline
              </span>
              {holderNameErr}
            </div>
          )
        }
      </div>
      <div className={styles["form-group-row"] + " mb-2"}>
        <div id={styles["address"]}>
          <div className="form-group">
            <label>Address</label>
            <input
              className="form-control flex-grow-1"
              type="text"
              placeholder="Jl. Jendral Sudirman Kav. 10-11"
              name="address"
              value={inputVal.address}
              onChange={handleChange}
            />
          </div>
        </div>
        <div id={styles["country"]}>
          <label htmlFor="country">Country</label>
          <div className="form-group">
            <span className="material-symbols-outlined">
              expand_more
            </span>
            <select
              className="form-control"
              style={inputVal.country ? { color: "#000" } : { color: "rgb(163, 163, 163)" }}
              name="country"
              value={inputVal.country}
              onChange={handleChange}
            >
              <option disabled value="">Country</option>
              {
                countriesArr.map((country, idx) => {
                  return (
                    <option key={country + "-" + idx} value={country}>{country}</option>
                  )
                })
              }
            </select>
          </div>
        </div>
      </div>
      <div className={styles["form-group-row"]}>
        <div className="form-group" id={styles["province"]}>
          <label>Province/State</label>
          <input
            className="form-control"
            type="text"
            placeholder="DKI Jakarta"
            name="province"
            value={inputVal.province}
            onChange={handleChange}
          />
        </div>
        <div className="form-group" id={styles["city"]}>
          <label>City</label>
          <input
            className="form-control"
            type="text"
            placeholder="Jakarta"
            name="city"
            value={inputVal.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group" id={styles["zipCode"]}>
          <label>ZIP Code</label>
          <input
            className="form-control"
            type="text"
            placeholder="10202"
            name="zipCode"
            value={inputVal.zipCode}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles["form-group-row"] + " mb-3"}>
        <div id={styles["email"]}>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control flex-grow-1"
              type="text"
              placeholder="example@mail.com"
              name="email"
              value={inputVal.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div id={styles["phone"]}>
          <div className="form-group">
            <label>Phone</label>
            <input
              className="form-control flex-grow-1"
              type="tel"
              placeholder="0812 3456 7890"
              name="phone"
              value={phone_formater(inputVal.phone)}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className={styles["form-part-title"]}></div>
      <div className={styles["form-group-row"] + " mb-3"}>
        <div id={styles["redeemPoint"]}>
          <div
            className="d-flex align-items-center"
            style={{
              marginBottom: 4,
              fontSize: 10
            }}
          >
            <span style={{ flexGrow: 1, color: '#c3c3c3' }}>Redeem Point</span>
            <span
              className="material-icons-outlined"
              style={{
                fontSize: 10,
                color: '#c3c3c3'
              }}
            >
              help
            </span>
          </div>
          <div
            className={styles["redeem-check"]}
            style={{
              fontSize: 10,
              color: '#c3c3c3'
            }}
          >
            <span
              className="material-icons"
              style={{
                marginRight: 6,
                fontSize: 10,
                color: 'rgb(36 161 249)'
              }}
            >
              check_circle
            </span>
            I&apos;d like to redeem point from this credit card
          </div>
        </div>
        <div id={styles["installmentPlan"]}>
          <div className="d-flex align-items-center">
            <label
              style={{
                color: '#c3c3c3',
                fontWeight: 400,
                flexGrow: 1
              }}
            >Installment Plan</label>
            <span
              className="material-icons-outlined"
              style={{
                color: '#c3c3c3',
                fontSize: 10
              }}
            >
              help
            </span>
          </div>
          <div className="form-group">
            <span className="material-symbols-outlined">
              expand_more
            </span>
            <select
              className="form-control"
              style={inputVal.installmentPlan !== 'no-installment' ? { color: "#000" } : { color: "rgb(163, 163, 163)" }}
              name="installmentPlan"
              value={inputVal.installmentPlan}
              onChange={handleChange}
            >
              <option disabled value="no-installment">No Installment</option>
            </select>
          </div>
        </div>
      </div>
      {/* PRICE DETAILS */}
      <div className={styles["price-details"]}>
        <div>PRICE DETAILS</div>
        <div>
          <span>Air Transportation Charges</span>
          <span>IDR 2.167.000</span>
        </div>
        <div>
          <span>Baggage</span>
          <span className={styles["free-cost"]}>FREE</span>
        </div>
        <div>
          <span>Flight Insurance</span>
          <span>IDR 60.000</span>
        </div>
        <div>
          <span>Service Fee</span>
          <span>IDR 11.000</span>
        </div>
        <div className={styles["total-price"]}>
          <span>Total Price</span>
          <span
            className="material-icons-outlined"
            style={{
              fontSize: 10
            }}
          >
            info
          </span>
          <span>IDR 2.238.000</span>
        </div>
      </div>
      {/* PROMO CODE */}
      <div className={styles["promo-code"]}>
        <button type="button" onClick={(e) => e.preventDefault()}>Use Promo Code</button>
      </div>
      <div className={styles["pay-now"]}>
        <button type="submit" onClick={clearErr}>Pay Now</button>
      </div>
    </form >
  )
}

CreditCard.getLayout = function getLayout(page) {
  return (
    <PaymentLayout>
      {page}
    </PaymentLayout>
  )
}

// export async function getStaticProps() {
//   const res = await fetch('https://restcountries.com/v3.1/all');
//   const countries = await res.json();

//   return {
//     props: {
//       countries,
//     },
//   }
// }