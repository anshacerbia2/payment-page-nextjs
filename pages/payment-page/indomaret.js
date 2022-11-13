import PaymentLayout from '../../components/PaymentLayout';


export default function Indomaret() {
  return (
    <div>Indomaret</div>
  )
}

Indomaret.getLayout = function getLayout(page) {
  return (
    <PaymentLayout>
      {page}
    </PaymentLayout>
  )
}