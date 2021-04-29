import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import LoginScreen from './components/LoginScreen';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './app/firebase';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './components/ProfileScreen';


function App()
 {
  const user=useSelector(selectUser)
  const dispatch=useDispatch()
  useEffect(() => {
    const unsubscribe=auth.onAuthStateChanged((userAuth)=>
    {
      if (userAuth)
      {
        //logged in 
        dispatch(
          login({
            email:userAuth.email,
            uid:userAuth.uid,
          })
        )
      }
      else
      {
        //not logged in 
        dispatch(logout())
      } 
    })
    return unsubscribe
  }, [])
  return (
    <div className="app" >
      <Router>
        {
          ! user ?(
            <LoginScreen/>
          ):(
            <Switch>
              <Route exact path='/profile'>
                <ProfileScreen/>
              </Route>
          <Route exact path='/'>
            <HomeScreen/>
          </Route>
        </Switch>
          )}
      </Router>
   </div>
  );
}

export default App;
