import PaymentLayout from '../../components/PaymentLayout';


export default function ShopeePay() {
  return (
    <div>ShopeePay</div>
  )
}

ShopeePay.getLayout = function getLayout(page) {
  return (
    <PaymentLayout>
      {page}
    </PaymentLayout>
  )
}