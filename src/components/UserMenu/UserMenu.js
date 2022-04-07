import { useSelector, useDispatch } from "react-redux";
import {getUserEmail} from '../../redux/authNav/authNav-selectors';
import { logout } from "../../redux/authNav/authNav-operations";

export default function UserMenu () {

    const userEmail = useSelector(getUserEmail);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(logout());
    }

    return (
        <>
        <h5>Hello {userEmail}</h5>
        <button type="button" onClick={handleSubmit}>Logout</button>
        </>
    );
}