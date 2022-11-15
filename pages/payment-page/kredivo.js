import PaymentLayout from '../../components/PaymentLayout';


export default function Kredivo() {
  return (
    <div>Kredivo</div>
  )
}

Kredivo.getLayout = function getLayout(page) {
  return (
    <PaymentLayout>
      {page}
    </PaymentLayout>
  )
}