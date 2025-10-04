#  React Series 🛫🛫

# to start any day project
- npm init
- npm install -D parcel
- npm install react react-dom
- npx parcel index.html // to start the project or npm start
- npm run build // to build the project or npm parcel build index.html

## Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- Minification
- File Watching Algorithm - written in C++
- Caching - Faster builds
- Compression - Reducing file sizes
- Tree Shaking - Eliminating dead code
- Image Optimization - Compressing images
- Code Transformation - Using Babel, PostCSS, etc.
- Bundling - Combining multiple files into one
- Code Splitting - Loading only necessary code
- Consistent Hashing - For long term caching
- Diffrentional Serving - Serving different code to different browsers
- Diffrential Bundling - Creating different bundles for different environments
- Multi-core Compilation - Using multiple CPU cores for faster builds+
- Support for JS, CSS, HTML, File assets, etc.



## React
- Library for building UI
- Components - Reusable pieces of UI
- JSX - JavaScript XML HTML-Like Syntax
- Virtual DOM - Lightweight copy of the real DOM
- One-way Data Binding - Data flows in one direction Parent to Child
- State - Data that changes over time
- Props - Data passed from Parent to Child
- Lifecycle Methods - Methods that get called at different stages of a component's life
- Hooks - Functions that let you use state and other React features in functional components


## ReactDOM
- ReactDOM is a package that provides DOM-specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page.
- ReactDOM is used to render React components to the DOM.
- ReactDOM provides methods like render(), hydrate(), and unmountComponentAtNode() to manage the rendering and unmounting of React components in the DOM.
- ReactDOM.render() is used to render a React component to the DOM.
- ReactDOM.hydrate() is used to hydrate a server-rendered React component.
- ReactDOM.unmountComponentAtNode() is used to unmount a React component from the DOM.
- ReactDOM is typically used in the entry point of a React application to render the root component to the DOM.
- ReactDOM is a separate package from React, and needs to be installed separately using npm or yarn.
- ReactDOM is only used in web applications, while React Native uses a different package called react

## Babel
- Babel is a JavaScript compiler that allows you to use next generation JavaScript, today.
- Babel can transform JSX syntax into JavaScript that browsers can understand.
- Babel can also transform modern JavaScript features (like arrow functions, classes, async/await, etc.) into older JavaScript syntax that is compatible with older browsers.
- Babel is typically used in conjunction with a build tool like Parcel, Webpack, or Rollup to automate the process of transforming and bundling JavaScript code.
- Babel is configured using a .babelrc file or babel.config.js file, where you can specify which presets and plugins to use for transforming your code.
- Babel presets are collections of plugins that enable support for specific sets of JavaScript features. For example, the @babel/preset-env preset enables support for the latest JavaScript features based on the target environment.


## JSX
- JSX stands for JavaScript XML.
- JSX is a syntax extension for JavaScript that looks similar to XML or HTML.
- JSX allows you to write HTML-like code within JavaScript files.
- JSX is transpiled into regular JavaScript function calls by Babel.
- JSX makes it easier to create and visualize the structure of React components.
- JSX can include JavaScript expressions within curly braces {}.
- JSX can be used to create React elements, which are the building blocks of React components.
- JSX can be used to create both functional and class components in React.
- JSX can be used to create nested components and pass props to child components.
- JSX can be used to conditionally render elements using JavaScript expressions.
- JSX can be used to create lists of elements using the map() function.
- JSX can be used to handle events using event handlers like onClick, onChange, etc
- JSX can be used to style elements using inline styles or CSS classes.
- JSX can be used to create fragments using the <> and </> syntax to group multiple elements without adding extra nodes to the DOM.
- JSX can be used to create portals using ReactDOM.createPortal() to render elements outside of the main React component tree.
- JSX can be used to create higher-order components (HOCs) by wrapping existing components with additional functionality.
- JSX can be used to create context providers and consumers using the React Context API.

## Components
- Components are the building blocks of a React application.
- Components are reusable pieces of UI that can be composed together to create complex user interfaces.
- Components can be defined as either functional components or class components.
- Functional components are defined as JavaScript functions that return JSX.
- Class components are defined as JavaScript classes that extend the React.Component class and have a render() method that returns JSX.
- Components can accept props (short for properties) as input, which are passed down from parent components to child components.
- Props are read-only and cannot be modified by the child component.
- Components can have state, which is data that can change over time and is managed within the component.
- State is mutable and can be updated using the setState() method in class components or the useState() hook in functional components.
- Components can have lifecycle methods that are called at different stages of a component's life, such as mounting, updating, and unmounting.
- Components can be nested within other components to create a hierarchy of components.
- Components can be styled using CSS classes, inline styles, or CSS-in-JS libraries like styled-components or emotion.
- Components can be tested using testing libraries like Jest and React Testing Library.

## Funcitonal Components- Functional components are a simpler way to write components that only contain a render method and don't have their own state.
- Functional components are defined as JavaScript functions that return JSX.
- Functional components can accept props as input, which are passed down from parent components to child components.
- Props are read-only and cannot be modified by the child component.
- Functional components can use hooks to manage state and side effects.
- The useState hook allows functional components to have state, which is data that can change over time.
- The useEffect hook allows functional components to perform side effects, such as fetching data or updating the DOM.
- Functional components can be written as arrow functions or regular functions.
- Functional components can be memoized using the React.memo() higher-order component to optimize performance by preventing unnecessary re-renders.
- Functional components can be tested using testing libraries like Jest and React Testing Library.


## Class Components- Class components are a more traditional way to write components that can have their own state and lifecycle methods
- Class components are defined as JavaScript classes that extend the React.Component class.
- Class components must have a render() method that returns JSX.
- Class components can accept props as input, which are passed down from parent components to child components.
- Props are read-only and cannot be modified by the child component.
- Class components can have state, which is data that can change over time and is managed within the component.
- State is mutable and can be updated using the setState() method.
- Class components can have lifecycle methods that are called at different stages of a component's life, such as mounting, updating, and unmounting.
- Common lifecycle methods include componentDidMount(), componentDidUpdate(), and componentWillUnmount().
- Class components can be tested using testing libraries like Jest and React Testing Library.



## Props
- Props (short for properties) are a way to pass data from a parent component to a child component in React.
- Props are read-only and cannot be modified by the child component.
- Props are passed to a component as an object, where each key-value pair represents a prop name and its value.
- Props can be of any data type, including strings, numbers, booleans, arrays, objects, and functions.
- Props can be accessed within a component using the props object, which is passed as an argument to functional components or accessed using this.props in class components.
- Props can be destructured for easier access to individual prop values.
- Props can have default values using the defaultProps property in class components or default parameters in functional components.
- Props can be validated using the prop-types library to ensure that the correct data types are being passed to a component.
- Props can be used to conditionally render elements or apply styles based on their values.






>>> # Interview Guide
- What is React?
- What is CDN?
- What is crossorigin?
- What is React Component?
- What are the typre of React Component?
- What is Component Composition?
- What is JSX?
