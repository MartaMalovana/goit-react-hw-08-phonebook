import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../redux/authNav/authNav-selectors";

export default function PrivateRoute ({children, restricted, ...props}) {

    const isLoggedIn = useSelector(getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;

    return (
        <Route {...props}>{shouldRedirect ? <Redirect to="/contacts"/> : children}</Route>
    );
} 