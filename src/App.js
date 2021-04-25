import { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


import { setCurrentUser } from './redux/user/user-actions'
import { useDispatch, useSelector } from 'react-redux';


import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';
import Checkout from './pages/Checkout/Checkout';

import './App.css';

function App() {

  const currentUser = useSelector(state => state.user.currentUser);
  

  const signOut = () => {
    setCurrentUser(null)
  }

  let dispatch = useDispatch()

  useEffect( () => {  
    auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        await userRef.onSnapshot((snapshot) => (
          
          dispatch(
            setCurrentUser({id:snapshot.id, displayName:snapshot.data().displayName, email: snapshot.data().email })
          )
        ))
      }
    })
  },[])


  return (
    <div>
      <Header signOut={signOut} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signin' render = {() => currentUser ?  <Redirect to = "/" /> : <SignInAndSignUpPage /> } />
        <Route exact path='/checkout' component={Checkout} />
      </Switch>
    </div>
  );
}



export default App;
