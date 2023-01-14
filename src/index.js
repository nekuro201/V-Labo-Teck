import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {AuthContextProvider} from './context/AuthContext';
import { ExercicesContextProvider } from './context/ExercicesContext';

import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    
    <GoogleOAuthProvider clientId={"process.env.GOOGLE_CLIENT_ID"}>

      <AuthContextProvider>
        <ExercicesContextProvider>
          <App />
        </ExercicesContextProvider>
      </AuthContextProvider>
      
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
