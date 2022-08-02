import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
);
