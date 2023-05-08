import {Panel} from "../primitives/Panel";
import {useDispatch, useSelector} from "react-redux";
import {
    switchToSignUp,
    updateLogin,
    updatePassword,
    validateSignInForm,
} from "../../feature/registration/authSlice";

export function SigninPanel () {
    const login = useSelector((state: any) => state.auth.login)
    const password = useSelector((state: any) => state.auth.password)
    const errors = useSelector((state: any) => state.auth.errors)
    const dispatch = useDispatch()
    return (
            <Panel>
                <div className={'d-flex flex-row justify-content-start'}>
                    <h2 className={'m-2'}>Авторизация</h2>
                    <button className={'btn btn-secondary m-2'} onClick={() => dispatch(switchToSignUp())}>
                        Зарегистрироваться
                    </button>
                </div>
                <form>
                    <div className="form-group m-1">
                        <label htmlFor="sign_in_login">Логин</label>
                        <input type="text" className="form-control" id="sign_in_login" placeholder="Введите логин"
                               value={login} onChange={(event) => dispatch(updateLogin(event.target.value))}/>
                    </div>
                    <div className="form-group m-1">
                        <label htmlFor="sign_in_password">Пароль</label>
                        <input type="password" className="form-control" id="sign_in_password" placeholder="Пароль"
                               value={password} onChange={(event) => dispatch(updatePassword(event.target.value))}/>
                    </div>
                    {errors.length !== 0 && errors.map((error: string, index: number) => <p className={'text-danger'} key={index}>{error}</p>)}
                </form>
                <button className="btn btn-primary m-2"
                        onClick={() => dispatch(validateSignInForm())}>Войти</button>
            </Panel>
    );
}