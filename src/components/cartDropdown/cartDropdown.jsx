import React from 'react'

import CustomButton from '../custom-button/custom-button'
import { connect } from 'react-redux'
import CartItem from '../cartItem/cartItem'
import { selectCartItems } from '../../redux/cart/cartSelector'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cartAction'

import './cartDropdown.scss'

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
          { cartItems.length ?
            cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
            :
            <span className='empty-message'>The cart is empty</span>
          }
        </div>
        <CustomButton onClick={() => {history.push('/checkout'); dispatch(toggleCartHidden()) }} >CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = state => ({
  cartItems: selectCartItems(state  )
})

export default withRouter(connect(mapStateToProps)(CartDropdown))