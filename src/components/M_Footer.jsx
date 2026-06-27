import React from "react";

import footerlogo from '../images/footer-logo.png';

export default function M_Footer (
    {
        menuLinks,
        socialLinks
    }
) {
    const menuItems = menuLinks.map((menuItem, i) => {
        return (
            <a key={i} href={menuItem.link}>{menuItem.title}</a>
        )
    })

    const socialItems = socialLinks.map((socialItem, i) => {
        return (
            <a key={i} href={socialItem.link} target="_blank" className="social-link">
                <img src={socialItem.image} alt={socialItem.title} />
            </a>
        )
    })

    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-logo">
                    <img src={footerlogo} alt="ХОЛУ" />
                </div>

                <div className="footer-nav-wrapper">
                    <div className="footer-nav-links">
                        {menuItems}
                    </div>

                    <div className="footer-columns">
                    <div className="footer-col">
                        <p className="footer-col-heading">кураторы</p>
                        <p>Антон Ларин</p>
                        <p>Юрий Сыров</p>
                    </div>
                    <div className="footer-col">
                        <p className="footer-col-heading">студенты</p>
                        <p>Катя Котлярова</p>
                        <p>Рита Филатова</p>
                        <p>Лера Пономаренко</p>
                    </div>
                    </div>
                </div>

                <div className="footer-social">
                    {socialItems}
                </div>
            </div>
        </footer>
    )
}