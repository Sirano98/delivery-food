import { FC } from "react";

export const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-block">
                    <img src="img/icon/logo.svg" alt="logo" className="logo footer-logo" />
                    <nav className="footer-nav">
                        <p className="footer-link">Ресторанам </p>
                        <p className="footer-link">Курьерам</p>
                        <p className="footer-link">Пресс-центр</p>
                        <p className="footer-link">Контакты</p>
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