import * as ReactDOM from "react-dom/client";
import React from "react";

const heading = React.createElement(
    "h1",
    { "id": "heading" },
    "Namaste React🛫🛫"
);

// console.log(heading);

const jsxHeading = <h1 id="heading">Namaste JSX Heading</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

const t = <h2>Hello</h2>


root.render(jsxHeading); 
