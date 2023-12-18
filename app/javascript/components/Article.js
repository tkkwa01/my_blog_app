import React from "react";

function Article({ title, body }) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
}

export default Article;