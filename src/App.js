import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user-actions'
import { useDispatch } from 'react-redux';


import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';

import './App.css';

function App() {

  const signOut = () => {
    setCurrentUser(null)
  }

  let dispatch = useDispatch()

  useEffect( () => {  
    auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        await userRef.onSnapshot((snapshot) => (
          dispatch({
            type:"SET_CURRENT_USER",
            payload:{
              id: snapshot.id,
              displayName: snapshot.data().displayName,
              email: snapshot.data().email
            }
          })
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
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}



export default App;
