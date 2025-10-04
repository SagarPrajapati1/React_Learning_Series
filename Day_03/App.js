import * as ReactDOM from "react-dom/client";
import React from "react";

// const heading = React.createElement(
//     "h1",
//     { "id": "heading" },
//     "Namaste React🛫🛫"
// );

// console.log(heading);

// const jsxHeading = (
//     <h1 id="heading" className="heading">
//         Namaste JSX Heading
//     </h1>
// )
const root = ReactDOM.createRoot(document.getElementById("root"));

// error because react element do not have render method we can only use root to render
// const t = <h2>Hello</h2>
// const temp = React.createElement("h2", { "id": "temp" }, "hello world!!!!!!!!!");

// temp.render(t);

// root.render(jsxHeading);


// React Component
// 1. Class Based Component
// 2. Funcitonal Component


// Functional Component
const fn1 = () => true;

// fn1 == fn2
const fn2 = () => {
    return true;
}

// HeadingComponent1 == HeadingComponent2
const HeadingComponent1 = () => (<h1>Funcitonal Component 1</h1>);
const HeadingComponent2 = () => {
    return <h1>Funcitonal Component 2</h1>
};


//react component
const Title = () => (
    <div id="title">
        <h4>
            It is a Title inside the component
        </h4>
    </div>
)


// Component Composition
const TempComponent = () => (
    <div id="container">
        <Title />
        <h1 id="heading">Funcitonal Component with Title </h1>
        <p>Component inside a Component called a Component Composition</p>
    </div>
)

const number = 1000000;

//react element
const title = (
    <div id="title">
        <h4>
            It is a Title inside the component.
            {number}
        </h4>
    </div>
)


const TempComponent2 = () => (
    <div id="container">
        {/* {number} */}
        {title}
        <h1 id="heading">Funcitonal Component with Title </h1>
        <p>Component inside a Component called a Component Composition</p>
    </div>
)

// with function keyword
function TempComponent1() {
    // return keyword is must
    return (
        <div id="container">
            {/* all three lines are same */}
            <Title />
            <Title></Title>
            {Title()}
            <h1 id="heading">Funcitonal Component with Title111 </h1>
            <p>Component inside a Component called a Component Composition</p>
        </div>
    )
}

root.render(<TempComponent1 />);