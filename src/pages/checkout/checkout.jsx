import React from 'react'

import { connect } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelector'
import CheckoutItem from '../../components/checkoutItem/checkoutItem'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button'

import './checkout.scss'

const Checkout = ({ cartItems, total }) => {
  return (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>Product</div>
            <div className='header-block'>Description</div>
            <div className='header-block'>Quantity</div>
            <div className='header-block'>Price</div>
            <div className='header-block'>Remove</div>
        </div>
        
        {
            cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }

        <div className='total'>
            TOTAL: ${total}
        </div>
        <div className='test-warning'>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 12/34 - CVV: 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
  )
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    total: selectCartTotal(state)
})

export default connect(mapStateToProps)(Checkout)