import PaymentLayout from '../../components/PaymentLayout';


export default function GoPay() {
  return (
    <div>GoPay</div>
  )
}

GoPay.getLayout = function getLayout(page) {
  return (
    <PaymentLayout>
      {page}
    </PaymentLayout>
  )
}