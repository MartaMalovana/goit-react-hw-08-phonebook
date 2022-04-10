import { useState } from "react";
import {useDispatch} from 'react-redux';
import Button from '@mui/material/Button';
import { login } from "../../redux/authNav/authNav-operations";
import AuthNav from "./AuthNav";
import { InputName, InputPassword } from "./Login.styled";

export default function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
          case 'email':
            return setEmail(value);
        case 'password':
            return setPassword(value);
          default:
            return;
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({"email": email, "password": password}));
        setEmail('');
        setPassword('');
    }


    return (
        <>
        <AuthNav />
        <form name="login_form" onSubmit={handleSubmit}>
            <label>
                <h3>Email</h3>
                <InputName type="email" name="email" value={email} onChange={handleChange} />
            </label> 
            <label>
                <h3>Password</h3>
                <InputPassword type="text" name="password" value={password} onChange={handleChange} />
            </label> 
            <Button variant="contained" type="submit" onSubmit={handleSubmit} sx={{marginTop: '20px'}}>Submit</Button>
            {/* <button type="submit" onSubmit={handleSubmit}>Submit</button> */}
        </form>
        </>
    );
}