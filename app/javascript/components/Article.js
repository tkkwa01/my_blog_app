import React from "react";
import Typography from '@mui/material/Typography';

function Article({ title, body }) {
    return (
        <div>
            <Typography variant="h4" component="h1">
                {title}
            </Typography>
            <Typography variant="body1">
                {body}
            </Typography>
        </div>
    );
}

export default Article;
