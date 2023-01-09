import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'))

// axios.defaults.baseURL = 'http://localhost:8000';
// // axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

// axios.interceptors.request.use(request => {
//     console.log(request);
//     // Edit request config
//     return request;
// }, error => {
//     console.log(error);
//     return Promise.reject(error);
// });

// axios.interceptors.response.use(response => {
//     console.log(response);
//     // Edit response config
//     return response;
// }, error => {
//     console.log(error);
//     return Promise.reject(error);
// });
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)

reportWebVitals();
