import { FC, FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { createLogin } from "../../store/reducers/AuthSlice";

interface LocationState {
    from: string;
}

export const Auth: FC = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const { from } = location?.state as LocationState;

    const handleLogIn = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (login.trim()) {
            dispatch(createLogin(login));
            setLogin('');
            setError(false);
            navigate(from || "/");
        }
        setError(true)
    }

    return (
        <div className="modal-auth is-open" onClick={() => navigate(-1)}>
            <div className="modal-dialog modal-dialog-auth" onClick={e => e.stopPropagation()}>
                <button className="close-auth" onClick={() => navigate(-1)}>&times;</button>
                <form id="logInForm" onSubmit={e => handleLogIn(e)}>
                    <fieldset className="modal-body">
                        <legend className="modal-title">Authorization</legend>
                        <label className={error ? "label-auth  label-auth-error" : "label-auth"} onFocus={() => setError(false)}>
                            <span>Login</span>
                            <input id="login" type="text" autoComplete="off" value={login} onChange={e => setLogin(e.target.value)} />
                        </label>
                        <label className="label-auth">
                            <span>Password</span>
                            <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </label>
                    </fieldset>
                    <div className="modal-footer">
                        <div className="footer-buttons">
                            <button className="button button-primary button-login" type="submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}