import { NavLink } from 'react-router-dom';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { Navigation } from './AuthNav.styled';

export default function AuthNav () {
    return (
        <Navigation>
            <NavLink to="/login" exact style={{textDecoration: "none"}}><Button variant="contained" >Login</Button></NavLink>
            <NavLink to="/register" exact style={{textDecoration: "none", marginLeft: "10px"}}><Button variant="contained">Register</Button></NavLink>
        </Navigation>
    );
}