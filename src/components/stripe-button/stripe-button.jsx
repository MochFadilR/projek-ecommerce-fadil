import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51KeL61JcDQwwraKPC1EbCRis2xRfNuOYPeEGIfigQRU0gX5ar1bXGSUv2PxZXPi1HTymtY0NqE4T9S6BCys0uvI700R1HnwnQm'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

  return (
    <StripeCheckout 
    label='Pay Now'
    name="Fadil's ecommerce project"
    billingAddress
    shippingAddress
    image='../../assets/favicon.ico'
    description={`your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton