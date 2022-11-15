import PaymentLayout from '../../components/PaymentLayout';


export default function ConvenientStore() {
  return (
    <div>Convenient Store</div>
  )
}

ConvenientStore.getLayout = function getLayout(page) {
  return (
    <PaymentLayout>
      {page}
    </PaymentLayout>
  )
}