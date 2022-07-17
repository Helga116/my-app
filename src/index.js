import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import App from './app';



// const Post = (props) => {
//   return <div>Post: {props.title}</div>;
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Post title={'Hello World'} />);

// const element = <h1>hello world</h1>

// react компонент это функция, которая возвращает реакт элемент; реакт элемент у нас это константа. Все реакт компоненты называются с большой буквы



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
