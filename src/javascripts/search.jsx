import React from "react";
import { createRoot } from "react-dom/client";

import telegram from "../images/telegram.svg";
import vk from "../images/vk.svg";

import S_Search from "../components/S_Search.jsx";

const menuLinks = [
    { title: "сорта", link: "sorts.html" },
    { title: "посуда", link: "dishes.html" },
    { title: "статьи", link: "articles.html" },
    { title: "вопросы", link: "faq.html" },
];

const socialLinks = [
    {
        title: "Telegram",
        link: "https://t.me/huolutea",
        image: telegram,
    },
    {
        title: "VK",
        link: "https://vk.com/HOLUTEA",
        image: vk,
    },
];

const app = document.querySelector("#app");
const root = createRoot(app);

root.render(
    <S_Search
        menuLinks={menuLinks}
        socialLinks={socialLinks}
    />
);