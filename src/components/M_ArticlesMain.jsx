import React, { useEffect, useState } from "react";
import { getData } from "../javascripts/airtable";

import A_Text from "./A_Text.jsx";

export default function M_ArticlesMain() {
    const [dataPosts, setDataPosts] = useState([]);

    useEffect(() => {
        getData().then(setDataPosts);
    }, []);

    const articles = [...dataPosts]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .filter((post) => post.type === "Article")
        .slice(0, 2);

    return (
        <section className="section-articles" id="статьи">
            <div className="articles-inner">

                <h2 className="articles-heading">
                    Самые интересные статьи
                </h2>

                <div className="articles-link-wrapper">
                    <a
                        href="articles.html"
                        className="articles-link-all"
                    >
                        читать все →
                    </a>
                </div>

                <div className="articles-grid">

                    {articles.map((post) => (
                        <a
                            key={post.id}
                            href={post.link}
                            className="article-card-link"
                        >
                            <article className="main-article-card">

                                <div className="main-article-body">

                                    <div className="main-article-tags">
                                        {Array.isArray(post.tags) &&
                                            post.tags.map((tag, index) => (
                                                <A_Text
                                                    key={index}
                                                    text={tag}
                                                    type="span"
                                                    classprop="main-article-tag"
                                                />
                                            ))}
                                    </div>

                                    <A_Text
                                        text={post.title}
                                        type="h3"
                                        classprop="main-article-title"
                                    />

                                    <A_Text
                                        text={post.daterus}
                                        type="div"
                                        classprop="main-article-date"
                                    />

                                </div>

                                <div className="main-article-image">
                                    {Array.isArray(post.image) && (
                                        <img
                                            src={post.image[0].url}
                                            alt={post.title}
                                        />
                                    )}
                                </div>

                            </article>
                        </a>
                    ))}

                </div>
            </div>
        </section>
    );
}