import React, { useState, useEffect } from "react";
import { getData } from "../javascripts/airtable";

import A_Text from "./A_Text.jsx";

export default function S_SearchContent() {
    const [searchInputValue, setSearchInputValue] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getData().then(setPosts);
    }, []);

    useEffect(() => {
        const query = new URLSearchParams(window.location.search).get("q");

        if (query) {
            setSearchInputValue(query);
        }
    }, []);

    const clean = (str) =>
        (str || "")
            .toLowerCase()
            .replace(/ё/g, "е")
            .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");

    const filteredPosts = posts.filter((post) => {
        if (!searchInputValue.trim()) return false;

        const search = clean(searchInputValue);

        const title = clean(post.title);

        const tags = Array.isArray(post.tags)
            ? clean(post.tags.join(" "))
            : "";

        return title.includes(search) || tags.includes(search);
    });

    return (
        <section className="section-articles">
            <div className="articles-inner">

                <h2 className="articles-heading">
                    Результаты поиска
                </h2>

                {filteredPosts.length === 0 ? (
                    <A_Text
                        text="По вашему запросу ничего не найдено."
                        type={"p"}
                    />
                ) : (
                    <div className="articles-grid">
                        {filteredPosts.map((post) => (
                            <a
                                key={post.id}
                                href={post.link}
                                className="article-card-link"
                            >
                                <article className="article-card">

                                    <div className="article-image">
                                        {Array.isArray(post.image) ? (
                                            <img
                                                src={post.image[0].url}
                                                alt={post.title}
                                            />
                                        ) : null}

                                        <div className="article-tags">
                                            {Array.isArray(post.tags)
                                                ? post.tags.map((tag, index) => (
                                                      <A_Text
                                                          key={index}
                                                          text={tag}
                                                          type={"span"}
                                                          classprop={"article-tag"}
                                                      />
                                                  ))
                                                : null}
                                        </div>
                                    </div>

                                    <div className="article-body">

                                        <A_Text
                                            text={post.title}
                                            type={"h3"}
                                            classprop={"article-title"}
                                        />

                                        {post.type === "Article" && (
                                            <A_Text
                                                text={post.daterus}
                                                type={"div"}
                                                classprop={"article-date"}
                                            />
                                        )}

                                    </div>

                                </article>
                            </a>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}