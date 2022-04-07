import {useEffect} from 'react';
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Register from './components/AuthNav/Register';
import Login from './components/AuthNav/Login';
import AppBar from './components/AppBar/AppBar';
import UserPage from './components/UserPage/UserPage';
import { fetchCurrentUser } from './redux/authNav/authNav-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

export default function App () {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  
  return (
    <div className="App">
        {/* <AppBar /> */}

        <Switch>
          <Route exact path='/'><AppBar /></Route>
          <PublicRoute path='/register' restricted><Register /></PublicRoute>
          <PublicRoute path='/login' restricted><Login /></PublicRoute>
          <PrivateRoute path='/contacts'><UserPage /></PrivateRoute>
        </Switch>

    </div>
  );
};

