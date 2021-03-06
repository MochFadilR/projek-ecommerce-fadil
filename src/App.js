import React from 'react';
import styled from 'styled-components'
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom'

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/shopPage';
import SignInAndSignUp from './pages/signin-and-signup/signin-and-signup';
import Header from './components/header/header';
import Checkout from './pages/checkout/checkout';

import { auth, createUserProfileDocument } from './firebase/firebase'
import react from 'react';
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/userAction';
import Contact from './pages/contact/contact';

class App extends react.Component {
  unsubscribeFromAuth = null

  componentDidMount() {

    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            }
          )
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
