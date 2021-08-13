import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import AppLayout from './components/AppLayout';

function App() {
  return (
   <AppLayout />
  );
}

ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById('root'));
