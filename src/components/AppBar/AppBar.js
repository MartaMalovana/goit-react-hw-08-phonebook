import {NavLink} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Login from '../AuthNav/Login';
import Register from '../AuthNav/Register';
import {getIsLoggedIn} from '../../redux/authNav/authNav-selectors';
import AuthNav from '../AuthNav/AuthNav';
import UserPage from '../UserPage/UserPage';

export default function AppBar () {
    
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <>
        {isLoggedIn ? <UserPage /> : <AuthNav />}
        </>
    );
}
