import React from "react";

import M_Header from "../components/M_Header.jsx";
import M_Footer from "../components/M_Footer.jsx";
import S_SearchContent from "./S_SearchContent.jsx";

export default function S_Search({
    menuLinks,
    socialLinks
}) {
    return (
        <>
            <M_Header
    menuLinks={menuLinks}
    showHero={false}
/>

            <S_SearchContent />

            <M_Footer
                menuLinks={menuLinks}
                socialLinks={socialLinks}
            />
        </>
    );
}