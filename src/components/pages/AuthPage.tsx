import {SignupPanel} from "../panels/SignupPanel";
import {SigninPanel} from "../panels/SigninPanel";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

export function AuthPage() {
    const mode = useSelector((state: any) => state.auth.mode)
    const isAuth = useSelector((state: any) => state.auth.isAuth)
    return (
        <>
            {mode === 'signUp' ? <SignupPanel/> : <SigninPanel/>}
            {isAuth && <Navigate to={'/profile'}/>}
        </>
    );
}