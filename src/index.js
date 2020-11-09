import React from 'react';
import ReactDOM from 'react-dom';
import Map from './Map';
import Search from './Search';
import './formap.css';

ReactDOM.render(
  <React.StrictMode>
    <Search />
  </React.StrictMode>,
  document.getElementById('root') // react가 html을 넣는 문구, App.js를 html의 div id root에 넣어준다 //
);


