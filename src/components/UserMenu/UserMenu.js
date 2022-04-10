import { useSelector, useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import {getUserEmail} from '../../redux/authNav/authNav-selectors';
import { logout } from "../../redux/authNav/authNav-operations";
import {UserBar} from './UserMenu.styled';

export default function UserMenu () {

    const userEmail = useSelector(getUserEmail);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(logout());
    }

    return (
        <UserBar>
            <h4>{userEmail}</h4>
            <Button variant="text" type="button" onClick={handleSubmit}>Logout</Button>
        </UserBar>
    );
}