import { NavLink } from 'react-router-dom';

export default function AuthNav () {
    return (
        <>
        <NavLink to="/login"  exact>Login</NavLink>
        <NavLink to="/register" exact>Register</NavLink>
        </>
    );
}