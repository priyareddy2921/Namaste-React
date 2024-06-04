import React from "react";
import ReactDOM from "react-dom/client";

const parent=ReactDOM.createRoot(document.getElementById("root"));

const heading=React.createElement("h1",{},"Hello World");

parent.render(heading);