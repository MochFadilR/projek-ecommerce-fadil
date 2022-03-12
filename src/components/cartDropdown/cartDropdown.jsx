import React from 'react'

import CustomButton from '../custom-button/custom-button'
import { connect } from 'react-redux'
import CartItem from '../cartItem/cartItem'
import { selectCartItems } from '../../redux/cart/cartSelector'

import './cartDropdown.scss'

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
          {
            cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          }
        </div>
        <CustomButton>CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = state => ({
  cartItems: selectCartItems(state  )
})

export default connect(mapStateToProps)(CartDropdown)