import { NavLink } from 'react-router-dom';
import Register from './Register';
import Login from './Login';

export default function AuthNav () {
    return (
        <>
        <NavLink to="/login"  exact>Login</NavLink>
        <NavLink to="/register" exact>Register</NavLink>
        </>
    );
}