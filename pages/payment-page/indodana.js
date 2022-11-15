import PaymentLayout from '../../components/PaymentLayout';


export default function Indodana() {
  return (
    <div>Indodana</div>
  )
}

Indodana.getLayout = function getLayout(page) {
  return (
    <PaymentLayout>
      {page}
    </PaymentLayout>
  )
}