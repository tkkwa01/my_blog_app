import React from "react";
import ReactDOM from "react-dom";
import Article from "../components/Article";

document.addEventListener("turbolinks:load", () => {
    const app = document.getElementById('react-app');
    if (app) {
        ReactDOM.render(<Article title="Sample Article" body="This is a sample article." />, app);
    }
});
