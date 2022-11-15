import PaymentLayout from '../../components/PaymentLayout';


export default function OVO() {
  return (
    <div>OVO</div>
  )
}

OVO.getLayout = function getLayout(page) {
  return (
    <PaymentLayout>
      {page}
    </PaymentLayout>
  )
}