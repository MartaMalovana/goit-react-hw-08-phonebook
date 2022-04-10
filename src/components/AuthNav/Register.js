import { useState } from "react";
import {useDispatch} from 'react-redux';
import Button from '@mui/material/Button';
import { register } from "../../redux/authNav/authNav-operations";
import AuthNav from "./AuthNav";

export default function Register () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
          case 'name':
            return setName(value);
          case 'email':
            return setEmail(value);
          case 'password':
            return setPassword(value);
          default:
            return;
        };
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(register({"name": name, "email": email, "password": password}));
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <>
        <AuthNav />
        <form name="signup_form" autoComplete="off" onSubmit={handleSubmit}>
            <label>
                <h3>Name</h3>
                <input type="text" name="name"  value={name} onChange={handleChange}></input>
            </label>
            <label>
                <h3>Email</h3>
                <input type="email" name="email" value={email} onChange={handleChange}></input>
            </label>
            <label>
                <h3>Password</h3>
                <input type="password" name="password" value={password} onChange={handleChange}></input>
            </label>

            <Button variant="contained" type="submit" onSubmit={handleSubmit} sx={{marginTop: '20px'}}>Submit</Button>
        </form>
        </>
    );
}