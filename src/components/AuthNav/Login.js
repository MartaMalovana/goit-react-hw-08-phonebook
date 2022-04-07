import { useState } from "react";
import {useDispatch} from 'react-redux';
import { login } from "../../redux/authNav/authNav-operations";
import AuthNav from "./AuthNav";

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
                Email
                <input type="email" name="email" value={email} onChange={handleChange}></input>
            </label>
            <label>
                Password
                <input type="text" name="password" value={password} onChange={handleChange}></input>
            </label>

            <button type="submit" onSubmit={handleSubmit}>Submit</button>
        </form>

        </>
    );
}