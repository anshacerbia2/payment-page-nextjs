import PaymentLayout from '../../components/PaymentLayout';


export default function BankTransfer() {
  return (
    <div>Bank Transfer</div>
  )
}

BankTransfer.getLayout = function getLayout(page) {
  return (
    <PaymentLayout>
      {page}
    </PaymentLayout>
  )
}