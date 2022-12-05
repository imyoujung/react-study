import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

/*
import CommentList from "./chapter_05/CommentList";
import NotificationList from "./chapter_06/NotificationList";*/
/*
import Accommodate from "./chapter_07/Accommodate";
*/
import ConfirmButton from "./chapter_08/ConfirmButton";

ReactDOM.render(
  <React.StrictMode>
    <ConfirmButton />
  </React.StrictMode>,
  document.getElementById('root')
);

/*
setInterval(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>,
    document.getElementById('root')
  );
}, 1000);
*/


reportWebVitals();
