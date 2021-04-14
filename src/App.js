import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';
import Header from './components/Header/Header';
import { auth } from './firebase/firebase.utils';
import { useEffect, useState } from 'react';

function App() {
  
  const [currentUser, setCurrentUser] = useState(null);

  let unsubscribeFromAuth = null;

  const signOut = () => {
    setCurrentUser(null)
  }

  useEffect(() => {  
    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      if(user){
        setCurrentUser(user.email)
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
      <Header currentUser={currentUser} signOut={signOut} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
