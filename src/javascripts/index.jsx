import React from "react";
import { createRoot } from "react-dom/client";

import telegram from '../images/telegram.svg';
import vk from '../images/vk.svg';

const menuLinks = [

    {
        'title': 'сорта',
        'link': 'sorts.html',
    },
    {
        'title': 'посуда',
        'link': 'dishes.html',
    },
    {
        'title': 'статьи',
        'link': 'articles.html',
    },
    {
        'title': 'вопросы',
        'link': 'faq.html',
    },
]

const socialLinks = [
    {
        'title': 'Telegram',
        'link': 'https://t.me/huolutea',
        'image': telegram
    },
    {
        'title': 'VK',
        'link': 'https://vk.com/HOLUTEA',
        'image': vk
    },
]

import S_Main from '../components/S_Main.jsx';

const app = document.querySelector('#app');
const root = createRoot(app)
root.render(<S_Main menuLinks = {menuLinks} socialLinks = {socialLinks}/>)