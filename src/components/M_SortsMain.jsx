import React, { useEffect, useState } from "react";
import { getData } from "../javascripts/airtable.js";

import A_Text from "./A_Text.jsx";

export default function M_SortsMain() {

    const [dataPosts, setDataPosts] = useState([]);

    // Получаем данные
    useEffect(() => {
        getData().then(setDataPosts);
    }, []);

    // Сортируем по дате
    dataPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    function postPreview() {

        const postPublic = [];

        dataPosts.forEach((post) => {

            if (
                post.type === "Sort" &&
                post.main &&
                postPublic.length < 3
            ) {
                postPublic.push(post);
            }

        });

        if (postPublic.length > 0) {

            return postPublic.map((post) => (

                <a
                    key={post.id}
                    href={post.link}
                    className="variety-card-link"
                >

                    <div className="variety-card">

                        <div className="variety-tags">

                            {Array.isArray(post.tags) &&
                                post.tags.length > 0
                                ? post.tags.map((tag, index) => (

                                    <A_Text
                                        key={index}
                                        text={tag}
                                        type={"span"}
                                        classprop={"variety-tag"}
                                    />

                                ))
                                : null}

                        </div>

                        <A_Text
                            text={post.title}
                            type={"p"}
                            classprop={"variety-desc"}
                        />

                        <div className="variety-image">

                            {Array.isArray(post.image)
                                ? (
                                    <img
                                        src={post.image[0].url}
                                        alt={post.title}
                                    />
                                )
                                : null}

                        </div>

                    </div>

                </a>

            ));
        }

        return null;
    }

    return (
        <section
            className="section-varieties"
            id="сорта"
        >

            <div className="varieties-inner">

                <h2 className="varieties-heading">
                    читай о самых разных сортах чая
                </h2>

                <div className="varieties-link-wrapper">

                    <a
                        href="sorts.html"
                        className="varieties-link-all"
                    >
                        читать все →
                    </a>

                </div>

                <div className="varieties-grid">

                    {postPreview()}

                </div>

            </div>

        </section>
    );
}