import PaymentLayout from '../../components/PaymentLayout';


export default function BNIMobile() {
  return (
    <div>BNI Mobile</div>
  )
}

BNIMobile.getLayout = function getLayout(page) {
  return (
    <PaymentLayout>
      {page}
    </PaymentLayout>
  )
}