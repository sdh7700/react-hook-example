import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import useAxios from './useAxios.js/useAxios';

const App = () => {
    const {loading, data, error} = useAxios({url:"https://yts.mx/api/v2/list_movies.json"});
    console.log(`Loading: ${loading}\nError:${error}\nData:${JSON.stringify(data)}`);
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById("root"));

// // thi si
// ReactDOM.render(
//   <React.StrictMode>
//     <UseClick />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
