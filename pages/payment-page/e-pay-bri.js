import PaymentLayout from '../../components/PaymentLayout';


export default function EPayBRI() {
  return (
    <div>E-Pay BRI</div>
  )
}

EPayBRI.getLayout = function getLayout(page) {
  return (
    <PaymentLayout>
      {page}
    </PaymentLayout>
  )
}