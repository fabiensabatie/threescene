import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// This is the entry point for development/testing
// The actual federation module exports App directly
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />); 