import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './routes';

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
              <AppRoutes/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

