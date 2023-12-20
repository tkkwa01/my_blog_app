import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
        return <Typography color="error">Error: {error.message}</Typography>;
    }

    return (
        <div>
            {articles.map(article => (
                <Card key={article.id} style={{ marginBottom: '20px' }}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {article.title}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {article.body}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}


export default Articles;
