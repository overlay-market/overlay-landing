import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ThemeProvider from './theme/theme';
import store from './state/state';
import { transitions, positions, Provider as ReactAlertProvider } from 'react-alert';
import AlertMUITemplate from "react-alert-template-mui";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* @ts-ignore */}  
      <ReactAlertProvider template={AlertMUITemplate} {...options}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ReactAlertProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
