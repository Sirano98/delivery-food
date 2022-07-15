import { FC } from "react";
import { NavLink } from "react-router-dom";

export const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-block">
                    <NavLink className="logo" to="/">
                        <img src="img/icon/logo.svg" alt="Logo" />
                    </NavLink>
                    <nav className="footer-nav">
                        <p className="footer-link">Restaurants</p>
                        <p className="footer-link">Couriers</p>
                        <p className="footer-link">Press center</p>
                        <p className="footer-link">Contacts</p>
                    </nav>
                    <div className="social-links">
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            className="social-link">
                            <img src="img/social/instagram.svg" alt="instagram" />
                        </a>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="social-link">
                            <img src="img/social/fb.svg" alt="facebook" />
                        </a>
                        <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noreferrer"
                            className="social-link">
                            <img src="img/social/twitter.svg" alt="twitter" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}