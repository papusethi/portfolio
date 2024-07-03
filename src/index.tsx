import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import './index.css';

// Clear the existing HTML content.
document.body.innerHTML = "<div id='root'></div>";

// Render your main entry component here.
const domNode = document.getElementById('root') as HTMLElement;
const root = createRoot(domNode);
root.render(<App />);
