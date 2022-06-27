import { FC } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { deleteLogin } from "../../store/reducers/AuthSlice";
import "./Header.css"

export const Header: FC = () => {
    const user = useAppSelector(state => state.auth.login);
    const dispatch = useAppDispatch();
    const location = useLocation();

    const handleLogOut = () => {
        dispatch(deleteLogin())
    }

    return (
        <div className="container">
            <header className="header">
                <NavLink className="logo" to="/">
                    <img src="img/icon/logo.svg" alt="Logo" />
                </NavLink>
                <label className="address">
                    <input type="text" className="input input-address" placeholder="Delivery address" />
                </label>
                <div className="buttons">
                    {
                        user ? (
                            <>
                                <span className="user-name">{user}</span>
                                <Link className="button button-cart" id="cart-button" to="cart" state={{ background: location }}>
                                    <span className="button-cart-svg"></span>
                                    <span className="button-text">Cart</span>
                                </Link>
                                <button className="button button-primary button-out" onClick={handleLogOut}>
                                    <span className="button-text">Log out</span>
                                    <span className="button-out-svg"></span>
                                </button>
                            </>
                        ) : (
                            <Link className="button button-primary button-auth" to="login" state={{ background: location }}>
                                <span className="button-auth-svg"></span>
                                <span className="button-text">Log in</span>
                            </Link>
                        )
                    }
                </div>
            </header>
        </div>
    )
}