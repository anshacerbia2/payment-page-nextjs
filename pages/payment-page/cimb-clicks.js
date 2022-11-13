import PaymentLayout from '../../components/PaymentLayout';


export default function CIMBClicks() {
  return (
    <div>CIMB Clicks</div>
  )
}

CIMBClicks.getLayout = function getLayout(page) {
  return (
    <PaymentLayout>
      {page}
    </PaymentLayout>
  )
}