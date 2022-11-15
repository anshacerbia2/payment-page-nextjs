import PaymentLayout from '../../components/PaymentLayout';


export default function BRICeria() {
  return (
    <div>BRI Ceria</div>
  )
}

BRICeria.getLayout = function getLayout(page) {
  return (
    <PaymentLayout>
      {page}
    </PaymentLayout>
  )
}