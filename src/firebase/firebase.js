import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {

    apiKey: "AIzaSyC_1pYAYQ1raKDVJv3gQvKLFW-aib_WR3E",
  
    authDomain: "ecommerce-db-5547c.firebaseapp.com",
  
    projectId: "ecommerce-db-5547c",
  
    storageBucket: "ecommerce-db-5547c.appspot.com",
  
    messagingSenderId: "453454161995",
  
    appId: "1:453454161995:web:f4f17d00b017e26c6e45ce",
  
    measurementId: "G-H44PJYYJKP"
  
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    console.log('this is user auth:');
    console.log(userAuth);

    const snapShot = await userRef.get()

    if(!snapShot.exist) {

        const { displayName, email } = userAuth

        const createdAt = new Date()

        try {
            await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase