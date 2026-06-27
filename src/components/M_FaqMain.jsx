import React, { useEffect, useState } from "react";
import { getData } from "../javascripts/airtable.js";

import A_Text from "./A_Text.jsx";

export default function M_FaqMain () {

    const [dataPosts, setDataPosts] = useState([])

    //Данные получили
    useEffect(() => {
        getData().then(setDataPosts)
    }, [])

    //Данные отсортировали по дате
    dataPosts.sort((a,b) => new Date(b.date) - new Date(a.date));

    function postPreview () {
        const postPublic = []
        dataPosts.forEach((post) => {
            if (post.type == 'Faq' && postPublic.length < 4) {
                postPublic.push(post);
            }
        })

        if (postPublic.length > 0) {
            return postPublic.map((post) => (
                <a key={post.id} href={post.link}>
                    <div className="qa-card">
                        <div className="qa-tags">
                            {
                                Array.isArray(post.tags) && post.tags.length > 0 ? post.tags.map((tag, index) => (
                                    <A_Text key={index} text={tag} type={'span'} classprop={'qa-tag'} />
                                )) : null
                            }
                        </div>
                        <A_Text text={post.title} type={'p'} classprop={'qa-question'} />
                        <div className="qa-image">
                            {Array.isArray(post.image) ? (<img src={post.image[0].url} />) : null}
                        </div>
                    </div>
                </a>
            ))
        }
    }

    return (
        <section className="section-qa" id="вопросы">
            <div className="qa-inner">
                <h2 className="qa-heading">отвечаем на ваши вопросы</h2>
                <div className="qa-grid">

                { postPreview() }

                </div>
                <div className="qa-cta">
                    <a href="faq.html" className="btn-primary">Читать больше</a>
                </div>
            </div>
        </section>
    )
}