import PaymentLayout from '../../components/PaymentLayout';


export default function ATM() {
  return (
    <div>ATM</div>
  )
}

ATM.getLayout = function getLayout(page) {
  return (
    <PaymentLayout>
      {page}
    </PaymentLayout>
  )
}