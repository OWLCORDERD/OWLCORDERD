import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root') as HTMLElement;
const rootElement = ReactDOM.createRoot(container);

rootElement.render(<App />);
