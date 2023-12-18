import React, { useState, useEffect } from 'react';

function Articles() {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api/v1/articles')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setArticles(data))
            .catch(error => {
                console.error('Error fetching data: ', error);
                setError(error);
            });
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            {articles.map(article => (
                <div key={article.id}>
                    <h2>{article.title}</h2>
                    <p>{article.body}</p>
                </div>
            ))}
        </div>
    );
}

export default Articles;
