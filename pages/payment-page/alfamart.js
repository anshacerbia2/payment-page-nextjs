import PaymentLayout from '../../components/PaymentLayout';


export default function Alfamart() {
  return (
    <div>Alfamart</div>
  )
}

Alfamart.getLayout = function getLayout(page) {
  return (
    <PaymentLayout>
      {page}
    </PaymentLayout>
  )
}