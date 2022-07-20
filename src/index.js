import React from 'react';
import ReactDOMClient from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Home from './Pages/Home';
// import Cart from './Pages/Cart';
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";



// const root = ReactDOM.createRoot(
//   document.getElementById("root")
// );
// root.render(
//   <BrowserRouter>
//       <Routes>
//         <Route path='/' element={App} />
//         <Route path='/home' element={Home} />
//         <Route path='/cart' element={Cart} />
//       </Routes>
//       </BrowserRouter>
// );



const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(<App />);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

