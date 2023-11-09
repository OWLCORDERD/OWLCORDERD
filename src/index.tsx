import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { hydrate, render } from 'react-dom';
import App from './App';

const root = document.getElementById('root') as HTMLElement;

if (root.hasChildNodes()) {
  hydrate(<App />, root);
} else {
  render(<App />, root);
}
