import React from "react";

import M_Header from '../components/M_Header.jsx'
import M_ArticlesMain from '../components/M_ArticlesMain.jsx'
import M_SortsMain from '../components/M_SortsMain.jsx'
import M_FaqMain from '../components/M_FaqMain.jsx'
import M_Footer from '../components/M_Footer.jsx'

import ourgoal from '../images/main/our-goal.jpg';
import teaware from '../images/main/teaware.jpg';

export default function S_Main (
    {
        menuLinks,
        socialLinks
    }
) {
    return (
        <>
            <M_Header menuLinks={menuLinks}/>

            <section className="section-goal" id="цель">
                <div className="goal-inner">
                    <h2 className="goal-heading">наша цель</h2>
                    <div className="goal-image-center">
                        <img src={ourgoal} alt="Наша цель — чайная культура" />
                    </div>
                </div>
            </section>

            <M_SortsMain />

            <section className="section-teaware" id="посуда">
                <div className="teaware-inner">
                    <div className="teaware-text">
                        <h2 className="teaware-heading">посуда для ароматного китайского чая Улун</h2>
                        <p className="teaware-desc">
                        Главный выбор, который вам предстоит сделать перед покупкой чайного сервиза, —
                        это предпочитаете ли вы заваривать чай в чайнике или в гайване. Наш выбор начинается именно с этих двух
                        предметов, поскольку они являются главными, а все остальные элементы должны гармонировать с ними.
                        </p>
                        <a href="dishes.html" className="btn-primary">Читать больше</a>
                    </div>
                    <div className="teaware-images">
                        <img src={teaware} alt="Чайная посуда" className="teaware-main-img" />
                    </div>
                </div>
            </section>

            <M_ArticlesMain />

            <M_FaqMain />

            <M_Footer menuLinks={menuLinks} socialLinks={socialLinks}/>
        </>
    )
}