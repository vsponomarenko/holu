import React from "react";

export default function A_Text({text, type, classprop}) {
    const Tag = type
    return (
        <Tag className={classprop}>{text}</Tag>
    )
}