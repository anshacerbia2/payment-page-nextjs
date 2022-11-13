import PaymentLayout from '../../components/PaymentLayout';


export default function KlikBCA() {
  return (
    <div>Klik BCA</div>
  )
}

KlikBCA.getLayout = function getLayout(page) {
  return (
    <PaymentLayout>
      {page}
    </PaymentLayout>
  )
}