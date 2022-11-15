import PaymentLayout from '../../components/PaymentLayout';


export default function Akulaku() {
  return (
    <div>Akulaku</div>
  )
}

Akulaku.getLayout = function getLayout(page) {
  return (
    <PaymentLayout>
      {page}
    </PaymentLayout>
  )
}