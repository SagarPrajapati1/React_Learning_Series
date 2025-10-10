import * as ReactDOM from "react-dom/client";
import React from "react";
import Header from "./components/Header.js";
import Body from "./components/Body.js";


console.log("hello Food!!!!")

// const RestaurantCard = ({resName, cuisine}) => {
// const RestaurantCard = ({resName, cuisine}) => {


// not using keys (not acceptable) <<<<<<<<< index as keys <<<<<<<<< unique key



const AppLayout = () => {
    return (
        <div className="app">

            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);