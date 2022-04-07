import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../redux/authNav/authNav-selectors";

export default function PrivateRoute ({children, ...props}) {

    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <Route {...props}>{isLoggedIn ? children : <Redirect to="/login"/>}</Route>
    );
} 