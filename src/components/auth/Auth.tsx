import { FC, FormEvent, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { handleLoginError, handlePasswordError, login } from "../../store/reducers/UserSlice";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

export interface CustomizedLocation {
    from: string;
}
interface AuthProps {
    title: string
}

export const Auth: FC<AuthProps> = ({ title }) => {
    const { loginError, passwordError, userData } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [authType, setAuthType] = useState(false);
    const { from } = location?.state as CustomizedLocation;

    useEffect(() => {
        if (title === "login") {
            setAuthType(true)
        } else {
            setAuthType(false)
        }

        if (userData.email && from) {
            navigate(from)
        }

        return () => {
            handleError(null, null);
        }
    }, [title, userData])

    const handleAuth = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        handleError(email, password);

        if (loginError || passwordError) {
            return
        }

        if (email.trim() && password.trim()) {

            const auth = getAuth();

            if (authType) {

                signInWithEmailAndPassword(auth, email, password)
                    .then(({ user: { email, uid, refreshToken } }) => {
                        loginUserSuccess(email, uid, refreshToken)
                    })
                    .catch((error) => {
                        handleError(error.code, error.code);
                    });

            } else {

                createUserWithEmailAndPassword(auth, email, password)
                    .then(({ user: { email, uid, refreshToken } }) => {
                        loginUserSuccess(email, uid, refreshToken)
                    })
                    .catch((error) => {
                        handleError(error.code, error.code);
                    });

            }
        }
    }

    const loginUserSuccess = (email: string | null, id: string, token: string): void => {
        dispatch(login({
            email,
            id,
            token
        }))
        setLogin('');
        handleError(null, null);
        navigate(from || "/", { replace: true });
    }

    const handleError = (loginErrorType: string | null, passwordErrorType: string | null): void => {
        dispatch(handleLoginError(loginErrorType));
        dispatch(handlePasswordError(passwordErrorType));
    }

    return (
        <div className="modal-auth is-open" onClick={() => navigate(-1)}>
            <div className="modal-dialog modal-dialog-auth" onClick={e => e.stopPropagation()}>
                <button className="close-auth" onClick={() => navigate(-1)}>&times;</button>
                <form id="logInForm" onSubmit={e => handleAuth(e)}>

                    <fieldset className="modal-body">

                        <legend className="modal-title">{authType ? "Authorization" : "Registration"}</legend>

                        <label className="label-auth">

                            {loginError && <p className="error-message-auth">{loginError}</p>}
                            <span>Email</span>
                            <input
                                type="text"
                                autoComplete="off"
                                value={email}
                                onChange={e => setLogin(e.target.value)}
                                onBlur={() => dispatch(handleLoginError(email))} />

                        </label>
                        <label className="label-auth">

                            {passwordError && <p className="error-message-auth">{passwordError}</p>}
                            <span>Password</span>
                            <input
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                onBlur={() => dispatch(handlePasswordError(password))} />

                        </label>
                    </fieldset>

                    {authType ?
                        <p>If you don't have an account
                            <Link className="auth-link" to="/signUp" state={{ background: "/", from: from }} replace>
                                <span> Sign up</span>
                            </Link>
                        </p>
                        :
                        <p>If you already have an account
                            <Link className="auth-link" to="/login" state={{ background: "/", from: from }} replace>
                                <span> Log in</span>
                            </Link>
                        </p>}
                    <div className="modal-footer">
                        <div className="footer-buttons">
                            <button className="button button-primary button-login" type="submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}