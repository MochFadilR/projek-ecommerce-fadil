import React from 'react'

import { connect } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelector'
import CheckoutItem from '../../components/checkoutItem/checkoutItem'

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
    </div>
  )
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    total: selectCartTotal(state)
})

export default connect(mapStateToProps)(Checkout)