import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user-actions'
import { useSelector, useDispatch } from 'react-redux';


import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';

import './App.css';

function App() {
  

  let unsubscribeFromAuth = null;

  const signOut = () => {
    setCurrentUser(null)
  }

  let dispatch = useDispatch()

  useEffect( () => {  

    unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          dispatch({
            type:"SET_CURRENT_USER",
            payload:{
              id: snapShot.id,
              ...snapShot
            }
          })
        })
      } else {
        setCurrentUser(null)
      }
    })
  },[])

  // useEffect(() => {  
  //   unsubscribeFromAuth();
  // },[])

  return (
    <div>
      <Header signOut={signOut} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}



export default App;
