import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Greeter from './Greeter'
import LikeButton from './LikeButton'
import * as serviceWorker from './serviceWorker';
const Display=()=>{
  let rows=[];
  for (let i=0;i<10;i++){
    rows.push(<button>Like!</button>)
  }
  return rows;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
 <>
    <Greeter />
    <LikeButton />
    <Display/>
    </>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
