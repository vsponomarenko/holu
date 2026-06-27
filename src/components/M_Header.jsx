import React, { useState } from "react";

import logo from "../images/main/logo.png";
import footerlogo from "../images/footer-logo.png";
import hillsmini from "../images/main/hills-mini.png";

export default function M_Header({
    menuLinks,
    showHero = true,
}) {
    const [search, setSearch] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();

        if (!search.trim()) return;

        window.location.href = `/search.html?q=${encodeURIComponent(search)}`;
    };

    const menuItems = menuLinks.map((menuItem, i) => (
        <a
            key={i}
            href={menuItem.link}
            onClick={() => setIsMenuOpen(false)}
        >
            {menuItem.title}
        </a>
    ));

    return (
        <section
            className={showHero ? "section-hero" : "section-header"}
            id="главная"
        >
            {showHero && (
                <img
                    src={hillsmini}
                    alt="Чайные холмы"
                    className="hero-bg"
                />
            )}

            <header className="site-header">
                <div className="header-inner">

                    <div className="header-logo">
                        <a href="/">
                            <img
                                src={footerlogo}
                                alt="ХОЛУ логотип"
                                className="header-logo-img"
                            />
                        </a>
                    </div>

                    <nav className="main-nav">
                        {menuItems}
                    </nav>

                    <form
                        className="header-search"
                        onSubmit={handleSearch}
                    >
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Поиск..."
                            className="header-search-input"
                        />

                        <button
                            type="submit"
                            className="header-search-button"
                        >
                            Найти
                        </button>
                    </form>

                    <div
                        className={`mobile-menu-toggle ${isMenuOpen ? "active" : ""}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>

                <div
    className={`mobile-nav ${isMenuOpen ? "active" : ""}`}
>

    <form
        className="mobile-search"
        onSubmit={handleSearch}
    >
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Поиск..."
            className="mobile-search-input"
        />

        <button
            type="submit"
            className="mobile-search-button"
        >
            Найти
        </button>
    </form>

    {menuItems}

</div>
            </header>

            {showHero && (
                <div className="hero-content">
                    <div className="hero-logo">
                        <img
                            src={logo}
                            alt="ХОЛУ логотип"
                        />
                    </div>

                    <p className="hero-subtitle">
                        Медиа, полностью посвященное миру китайского чая
                    </p>
                </div>
            )}
        </section>
    );
}